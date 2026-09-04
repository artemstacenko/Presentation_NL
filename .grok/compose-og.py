#!/usr/bin/env python3
"""Museum-catalog OG card from the Trush 1900 portrait + typeset Ukrainian."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFont

W, H = 1920, 1080
CREAM = (243, 237, 227)  # #F3EDE3
INK = (28, 23, 18)  # #1C1712
FOREST = (58, 83, 70)  # #3A5346
UMBER = (139, 107, 82)  # #8B6B52

ROOT = Path("/workspace")
FONT_DIR = ROOT / ".grok/fonts"
PORTRAIT = ROOT / "public/images/portraits/trush.jpg"
OUT = ROOT / ".grok/og-raw.jpg"


def load_font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_DIR / name), size)


def paper() -> Image.Image:
    base = Image.new("RGB", (W, H), CREAM)
    noise = Image.effect_noise((W, H), 18).convert("RGB")
    grain = Image.blend(base, noise, 0.05)
    wash = Image.new("RGB", (W, H), (236, 226, 210))
    return Image.blend(grain, wash, 0.10)


def crop_bust(im: Image.Image) -> Image.Image:
    w, h = im.size
    # Keep full headroom; trim empty canvas at the sides and lower edge.
    left = int(w * 0.06)
    right = int(w * 0.94)
    top = int(h * 0.008)
    bottom = int(h * 0.92)
    return im.crop((left, top, right, bottom))


def matte_portrait(src: Image.Image, inner_h: int) -> Image.Image:
    bust = crop_bust(src)
    inner_w = int(inner_h * (bust.width / bust.height))
    painted = bust.resize((inner_w, inner_h), Image.Resampling.LANCZOS)
    painted = ImageEnhance.Contrast(painted).enhance(1.03)
    painted = ImageEnhance.Color(painted).enhance(0.97)

    forest, cream, umber = 15, 7, 3
    pad = forest + cream + umber
    outer_w = inner_w + 2 * pad
    outer_h = inner_h + 2 * pad
    plate = Image.new("RGB", (outer_w, outer_h), FOREST)
    d = ImageDraw.Draw(plate)
    x = forest
    d.rectangle([x, x, outer_w - x - 1, outer_h - x - 1], fill=CREAM)
    x += cream
    d.rectangle([x, x, outer_w - x - 1, outer_h - x - 1], fill=UMBER)
    x += umber
    plate.paste(painted, (x, x))
    return plate


def draw_centered(
    draw: ImageDraw.ImageDraw,
    text: str,
    cx: float,
    y: float,
    font: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
    tracking: int = 0,
) -> tuple[int, int, int, int]:
    if tracking == 0:
        draw.text((cx, y), text, font=font, fill=fill, anchor="ma")
        return draw.textbbox((cx, y), text, font=font, anchor="ma")
    widths = [font.getbbox(ch)[2] - font.getbbox(ch)[0] for ch in text]
    total = sum(widths) + tracking * (len(text) - 1)
    x = cx - total / 2
    top, bottom = y, y
    for i, ch in enumerate(text):
        draw.text((x, y), ch, font=font, fill=fill, anchor="la")
        bb = draw.textbbox((x, y), ch, font=font, anchor="la")
        top = min(top, bb[1])
        bottom = max(bottom, bb[3])
        x += widths[i] + tracking
    return (int(cx - total / 2), int(top), int(cx + total / 2), int(bottom))


def compose() -> Image.Image:
    img = paper()
    draw = ImageDraw.Draw(img)

    draw.rectangle([44, 44, W - 45, H - 45], outline=FOREST, width=2)
    draw.rectangle([54, 54, W - 55, H - 55], outline=UMBER, width=1)

    plate = matte_portrait(Image.open(PORTRAIT).convert("RGB"), inner_h=868)
    px = 96
    py = (H - plate.height) // 2
    img.paste(plate, (px, py))

    col_left = px + plate.width + 56
    col_right = W - 96
    cx = (col_left + col_right) / 2
    col_w = col_right - col_left

    title = "Нечуй-Левицький"
    subtitle = "Життєвий шлях · 1838–1918"

    # Largest title that stays inside the text column with side padding.
    title_size = 128
    title_font = load_font("CormorantGaramond-Bold.ttf", title_size)
    while title_font.getbbox(title)[2] - title_font.getbbox(title)[0] > col_w - 24 and title_size > 72:
        title_size -= 2
        title_font = load_font("CormorantGaramond-Bold.ttf", title_size)

    sub_font = load_font("CormorantGaramond-MediumItalic.ttf", 48)

    tbox = title_font.getbbox(title)
    sbox = sub_font.getbbox(subtitle)
    title_h = tbox[3] - tbox[1]
    sub_h = sbox[3] - sbox[1]
    gap_rule, rule_h, gap_sub = 32, 2, 24
    lock_h = title_h + gap_rule + rule_h + gap_sub + sub_h
    y = (H - lock_h) / 2

    tb = draw_centered(draw, title, cx, y, title_font, INK)
    y = tb[3] + gap_rule
    rule_w = min(260, (tb[2] - tb[0]) * 0.28)
    draw.rectangle([cx - rule_w / 2, y, cx + rule_w / 2, y + rule_h], fill=FOREST)
    y += rule_h + gap_sub
    draw_centered(draw, subtitle, cx, y, sub_font, FOREST, tracking=2)
    print("title_px", title_size, "title_w", tb[2] - tb[0], "col_w", col_w, "lock", tb, "y0", (H - lock_h) / 2)
    return img


def main() -> None:
    img = compose()
    img.save(OUT, "JPEG", quality=95, subsampling=0, optimize=True)
    print("wrote", OUT, img.size)


if __name__ == "__main__":
    main()
