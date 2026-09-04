import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Maximize2,
  Minimize2,
  X,
} from "lucide-react";
import { SLIDE_INDEX } from "@/data/presentation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SLIDES } from "./slides";

const LAST = SLIDES.length - 1;
const HINTS = [
  { keys: "← →", label: "слайди" },
  { keys: "Пробіл", label: "далі" },
  { keys: "G", label: "зміст" },
  { keys: "F", label: "на весь екран" },
];

export function Deck() {
  const [index, setIndex] = useState(0);
  const [overview, setOverview] = useState(false);
  const [hint, setHint] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [dir, setDir] = useState<1 | -1>(1);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const stageRef = useRef<HTMLElement>(null);

  const go = useCallback((next: number, direction?: 1 | -1) => {
    setIndex((current) => {
      const clamped = Math.max(0, Math.min(LAST, next));
      if (clamped === current) return current;
      setDir(direction ?? (clamped > current ? 1 : -1));
      return clamped;
    });
    setOverview(false);
    setHint(false);
  }, []);

  const next = useCallback(() => go(index + 1, 1), [go, index]);
  const prev = useCallback(() => go(index - 1, -1), [go, index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(index + 1, 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key === "Backspace") {
        e.preventDefault();
        go(index - 1, -1);
      } else if (e.key === "Home") {
        go(0, -1);
      } else if (e.key === "End") {
        go(LAST, 1);
      } else if (e.key === "g" || e.key === "G" || e.key === "Escape") {
        if (e.key === "Escape" && overview) setOverview(false);
        else if (e.key !== "Escape") setOverview((v) => !v);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, overview]);

  useEffect(() => {
    const t = window.setTimeout(() => setHint(false), 5200);
    return () => window.clearTimeout(t);
  }, []);

  function toggleFullscreen() {
    const el = stageRef.current ?? document.documentElement;
    if (!document.fullscreenElement) {
      void el.requestFullscreen?.();
      setFullscreen(true);
    } else {
      void document.exitFullscreen?.();
      setFullscreen(false);
    }
  }

  function onTouchStart(e: TouchEvent) {
    const t = e.changedTouches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchEnd(e: TouchEvent) {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  }

  const slide = SLIDES[index];
  const SlideView = slide.View;
  const progress = ((index + 1) / SLIDES.length) * 100;
  const meta = SLIDE_INDEX[index];

  return (
    <main
      ref={stageRef}
      className="grain flex h-dvh flex-col bg-paper text-ink"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="h-0.5 bg-line"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={SLIDES.length}
        aria-valuenow={index + 1}
        aria-label="Прогрес презентації"
      >
        <div
          className="h-full bg-forest transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <p className="font-sans text-xs tracking-[0.16em] text-quiet uppercase">
          Нечуй-Левицький
        </p>
        <p className="hidden font-sans text-xs text-quiet sm:block">{meta.label}</p>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="iconSm"
            aria-label={overview ? "Закрити зміст" : "Відкрити зміст"}
            onClick={() => setOverview((v) => !v)}
          >
            {overview ? <X className="size-4" /> : <LayoutGrid className="size-4" />}
          </Button>
          <Button
            variant="ghost"
            size="iconSm"
            aria-label={fullscreen ? "Вийти з повного екрана" : "На весь екран"}
            onClick={toggleFullscreen}
          >
            {fullscreen ? (
              <Minimize2 className="size-4" />
            ) : (
              <Maximize2 className="size-4" />
            )}
          </Button>
        </div>
      </header>

      <section
        className="relative mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col px-4 pb-3 sm:px-6"
        aria-live="polite"
        aria-atomic="true"
      >
        {overview ? (
          <Overview current={index} onSelect={(i) => go(i)} />
        ) : (
          <div
            key={slide.id}
            className="min-h-0 flex-1"
            style={{ ["--enter-y" as string]: dir > 0 ? "12px" : "-12px" }}
          >
            <SlideView />
          </div>
        )}
      </section>

      <footer className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Button
          variant="outline"
          size="icon"
          aria-label="Попередній слайд"
          onClick={prev}
          disabled={index === 0 && !overview}
        >
          <ChevronLeft className="size-5" />
        </Button>
        <p className="font-sans text-sm tabular-nums text-quiet">
          <span className="text-ink">{String(index + 1).padStart(2, "0")}</span>
          <span className="mx-1.5 text-line">/</span>
          {String(SLIDES.length).padStart(2, "0")}
        </p>
        <Button
          variant="forest"
          size="icon"
          aria-label="Наступний слайд"
          onClick={next}
          disabled={index === LAST && !overview}
        >
          <ChevronRight className="size-5" />
        </Button>
      </footer>

      {hint && !overview ? (
        <div className="pointer-events-none absolute right-4 bottom-20 z-30 hidden rounded-md bg-ink/88 px-4 py-3 text-paper shadow-[var(--shadow-border)] sm:block">
          <ul className="flex flex-col gap-1.5 font-sans text-xs">
            {HINTS.map((h) => (
              <li key={h.keys} className="flex items-center gap-3">
                <span className="min-w-16 font-medium tracking-wide">{h.keys}</span>
                <span className="text-paper/70">{h.label}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </main>
  );
}

function Overview({
  current,
  onSelect,
}: {
  current: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex h-full min-h-0 flex-col gap-5 overflow-auto py-2">
      <div>
        <p className="font-sans text-xs tracking-[0.2em] text-forest uppercase">
          Зміст
        </p>
        <h2 className="mt-1 font-display text-3xl font-semibold sm:text-4xl">
          Життєвий шлях
        </h2>
      </div>
      <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {SLIDE_INDEX.map((item, i) => {
          const active = i === current;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onSelect(i)}
                className={cn(
                  "flex w-full items-baseline gap-4 rounded-lg px-4 py-3 text-left shadow-[var(--shadow-border)] transition-[background-color,color] duration-150",
                  active
                    ? "bg-forest text-paper"
                    : "bg-paper-deep text-ink hover:bg-line/50",
                )}
              >
                <span className="font-sans text-xs tabular-nums opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-xl font-semibold">
                  {item.label}
                </span>
                <span className="font-sans text-xs tracking-wide opacity-70">
                  {item.year}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
