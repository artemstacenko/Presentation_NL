import { useState, type ReactNode } from "react";
import {
  EDUCATION,
  FAMILY,
  JOURNEY,
  LEGACY,
  META,
  QUOTES,
  ROLES,
  ROUTINE,
  TIMELINE,
  WORKS,
} from "@/data/presentation";
import { cn } from "@/lib/utils";

function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="enter font-sans text-xs font-medium tracking-[0.22em] text-forest uppercase">
      {children}
    </p>
  );
}

function Title({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "enter enter-1 font-display text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

function Frame({
  src,
  alt,
  className,
  imgClass,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClass?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-lg bg-paper-deep shadow-[var(--shadow-border)]",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn("framed h-full w-full object-cover", imgClass)}
      />
    </figure>
  );
}

export function TitleSlide() {
  return (
    <div className="relative flex h-full min-h-0 flex-col justify-end overflow-hidden rounded-xl">
      <img
        src="/images/scenes/mill.jpg"
        alt="Млин на річці Рось у Стеблеві"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/15" />
      <div className="relative z-10 flex flex-col gap-4 p-6 pb-8 sm:p-10 md:p-14 md:pb-16">
        <Kicker>
          <span className="text-paper/70">{META.kicker}</span>
        </Kicker>
        <h1 className="enter enter-1 font-display max-w-4xl text-4xl leading-[0.95] font-semibold tracking-tight text-paper sm:text-6xl md:text-7xl lg:text-8xl">
          Іван
          <br />
          Нечуй-Левицький
        </h1>
        <div className="enter enter-2 flex flex-wrap items-end gap-x-6 gap-y-2">
          <p className="font-display text-2xl text-paper/85 italic sm:text-3xl">
            Життєвий шлях
          </p>
          <span className="mb-1 hidden h-px w-10 bg-paper/40 sm:block" />
          <p className="font-sans text-sm tracking-[0.18em] text-paper/70 uppercase">
            {META.years}
          </p>
        </div>
        <p className="enter enter-3 max-w-xl font-sans text-sm leading-relaxed text-paper/70 sm:text-base">
          Син сільського священника зі Стеблева. Автор «Кайдашевої сім’ї».
          Людина, що описала українське село так, ніби воно саме розповіло про себе.
        </p>
      </div>
    </div>
  );
}

export function FigureSlide() {
  return (
    <div className="grid h-full min-h-0 grid-rows-[minmax(180px,38%)_1fr] gap-5 md:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] md:grid-rows-1 md:gap-10">
      <Frame
        src="/images/portraits/trush.jpg"
        alt="Портрет Івана Нечуя-Левицького роботи Івана Труша, 1900"
        className="enter min-h-0"
        imgClass="object-top"
      />
      <div className="flex min-h-0 flex-col justify-center gap-5 overflow-auto">
        <Kicker>Постать</Kicker>
        <Title>Класик, що побачив село зсередини</Title>
        <p className="enter enter-2 max-w-prose font-sans text-base leading-relaxed text-ink-soft sm:text-lg">
          Справжнє прізвище — Левицький. Писав під іменем Нечуй. Ніколи не
          одружувався, двадцять років учителював на околицях імперії і віддав
          решту життя українській прозі.
        </p>
        <ul className="enter enter-3 grid grid-cols-2 gap-3">
          {ROLES.map((role) => (
            <li
              key={role.label}
              className="rounded-md bg-paper-deep/80 px-3 py-3 shadow-[var(--shadow-border)] sm:px-4"
            >
              <p className="font-display text-lg font-semibold text-ink">{role.label}</p>
              <p className="mt-1 font-sans text-xs leading-snug text-quiet sm:text-sm">
                {role.detail}
              </p>
            </li>
          ))}
        </ul>
        <p className="enter enter-4 font-sans text-xs text-quiet">
          Портрет: Іван Труш, 1900. Полотно, олія.
        </p>
      </div>
    </div>
  );
}

export function FamilySlide() {
  return (
    <div className="grid h-full min-h-0 gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10">
      <div className="flex min-h-0 flex-col justify-center gap-5">
        <Kicker>1838 · Стеблів на Росі</Kicker>
        <Title>Син сільського священника</Title>
        <p className="enter enter-2 font-sans text-base leading-relaxed text-ink-soft">
          Надросянське містечко, Богуславський повіт Київської губернії. Річка,
          млин, церковний двір і батькова школа для селян — перший всесвіт
          майбутнього реаліста.
        </p>
        <p className="enter enter-3 font-display text-xl text-forest italic">
          {META.born} — {META.birthplace}
        </p>
      </div>
      <div className="grid min-h-0 grid-rows-[minmax(140px,36%)_1fr] gap-4">
        <Frame
          src="/images/scenes/ros-river.jpg"
          alt="Річка Рось біля Стеблева"
          className="enter enter-2 min-h-0"
        />
        <div className="enter enter-3 grid gap-3 sm:grid-cols-2">
          {[FAMILY.father, FAMILY.mother].map((person) => (
            <article
              key={person.role}
              className="flex flex-col rounded-lg bg-paper-deep/70 p-4 shadow-[var(--shadow-border)]"
            >
              <p className="font-sans text-xs tracking-[0.16em] text-forest uppercase">
                {person.role}
              </p>
              <h3 className="mt-2 font-display text-xl leading-snug font-semibold">
                {person.name}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
                {person.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EducationSlide() {
  return (
    <div className="grid h-full min-h-0 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-10">
      <div className="flex min-h-0 flex-col justify-center gap-5 overflow-auto">
        <Kicker>1845–1865 · двадцять років науки</Kicker>
        <Title>Від монастирського училища до магістра</Title>
        <ol className="enter enter-2 relative mt-2 space-y-4 border-l border-line pl-5">
          {EDUCATION.map((step) => (
            <li key={step.years} className="relative">
              <span className="absolute top-1.5 -left-[25px] size-2.5 rounded-full bg-forest" />
              <p className="font-sans text-xs font-medium tracking-[0.14em] text-clay uppercase">
                {step.years}
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">
                {step.place}
              </h3>
              <p className="mt-1 font-sans text-sm leading-relaxed text-ink-soft">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
      <div className="grid min-h-0 grid-rows-2 gap-4">
        <Frame
          src="/images/scenes/monastery.jpg"
          alt="Двір монастирського училища"
          className="enter enter-3 min-h-0"
          imgClass="object-[center_28%]"
        />
        <Frame
          src="/images/scenes/classroom.jpg"
          alt="Класна кімната ХІХ століття"
          className="enter enter-4 min-h-0"
        />
      </div>
    </div>
  );
}

export function JourneySlide() {
  return (
    <div className="flex h-full min-h-0 flex-col justify-center gap-6">
      <div className="flex flex-col gap-3">
        <Kicker>1865–1885 · педагогічна дорога</Kicker>
        <Title>Двадцять років біля кафедри</Title>
        <p className="enter enter-2 max-w-2xl font-sans text-base leading-relaxed text-ink-soft">
          Викладав російську словесність, історію й географію — і водночас
          українською писав те, чого імперія в школі не дозволяла. Шлях проліг
          від Полтави через польські гімназії до Кишинева.
        </p>
      </div>
      <ol className="enter enter-3 grid grid-cols-2 gap-3 md:grid-cols-5">
        {JOURNEY.map((stop, i) => (
          <li
            key={stop.place}
            className="relative flex flex-col rounded-lg bg-paper-deep/80 p-4 shadow-[var(--shadow-border)]"
          >
            <span className="font-display text-3xl text-forest/35">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-2 font-sans text-xs tracking-[0.14em] text-clay uppercase">
              {stop.years}
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold">{stop.place}</h3>
            <p className="mt-1 font-sans text-sm text-quiet">{stop.role}</p>
          </li>
        ))}
      </ol>
      <p className="enter enter-4 max-w-3xl font-sans text-sm leading-relaxed text-ink-soft">
        У Кишиневі очолив гурток прогресивних учителів, говорив про національне
        питання — і потрапив під нагляд жандармерії. 1885-го пішов у відставку
        і повернувся до Києва вже як вільний літератор.
      </p>
    </div>
  );
}

export function DebutSlide() {
  return (
    <div className="grid h-full min-h-0 gap-6 md:grid-cols-2 md:gap-10">
      <div className="flex min-h-0 flex-col justify-center gap-5">
        <Kicker>1868 · Львів, журнал «Правда»</Kicker>
        <Title>З’являється Нечуй</Title>
        <p className="enter enter-2 font-sans text-base leading-relaxed text-ink-soft">
          Повість «Дві московки» написана ще 1865-го, у Полтаві. Друком вона
          вийшла у Львові під псевдонімом Іван Нечуй — так Левицький увійшов в
          літературу.
        </p>
        <blockquote className="enter enter-3 border-l-2 border-forest pl-4">
          <p className="font-display text-2xl leading-snug text-ink italic sm:text-3xl">
            «Там я написав “Дві московки”…»
          </p>
          <cite className="mt-2 block font-sans text-sm text-quiet not-italic">
            з автобіографічних спогадів
          </cite>
        </blockquote>
        <p className="enter enter-4 font-sans text-sm leading-relaxed text-ink-soft">
          Інші маски, якими підписувався: І. Баштовий, Гр. Гетьманець,
          О. Криницький. Але в історію він увійшов як Нечуй.
        </p>
      </div>
      <Frame
        src="/images/scenes/desk.jpg"
        alt="Письмовий стіл ХІХ століття з рукописами"
        className="enter enter-2 min-h-[200px] md:min-h-0"
      />
    </div>
  );
}

export function WorksSlide() {
  return (
    <div className="flex h-full min-h-0 flex-col gap-5">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <Kicker>1874–1884 · розквіт</Kicker>
          <Title>Епос українського села</Title>
        </div>
        <p className="enter enter-2 max-w-md font-sans text-sm leading-relaxed text-ink-soft">
          {QUOTES.franko}
        </p>
      </div>
      <div className="enter enter-3 grid min-h-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
        {WORKS.map((work) => (
          <article
            key={work.title}
            className="flex flex-col justify-between rounded-lg bg-paper-deep/80 p-4 shadow-[var(--shadow-border)] sm:p-5"
          >
            <div>
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-sans text-xs tracking-[0.16em] text-clay uppercase">
                  {work.genre}
                </p>
                <p className="font-sans text-sm tabular-nums text-forest">{work.year}</p>
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                {work.title}
              </h3>
            </div>
            <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
              {work.note}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function KyivSlide() {
  return (
    <div className="grid h-full min-h-0 gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-8">
      <div className="flex min-h-0 flex-col justify-center gap-5 overflow-auto">
        <Kicker>1885–1917 · вільний літератор</Kicker>
        <Title>Київські роки самітника</Title>
        <p className="enter enter-2 font-sans text-base leading-relaxed text-ink-soft">
          Жив у флігелі з садком і пасікою, потім у скромних квартирах на
          Пушкінській, Володимирській, Львівській. Щодня — той самий маршрут до
          Дніпра. Парасолька в будь-яку погоду. Сон о десятій.
        </p>
        <ul className="enter enter-3 grid gap-3 sm:grid-cols-2">
          {ROUTINE.map((item) => (
            <li
              key={item.time}
              className="rounded-md bg-paper-deep/80 px-4 py-3 shadow-[var(--shadow-border)]"
            >
              <p className="font-sans text-xs tracking-[0.16em] text-forest uppercase">
                {item.time}
              </p>
              <p className="mt-1 font-sans text-sm leading-relaxed text-ink-soft">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid min-h-0 grid-rows-2 gap-4">
        <Frame
          src="/images/scenes/kyiv-dusk.jpg"
          alt="Київська вулиця наприкінці ХІХ століття"
          className="enter enter-3 min-h-0"
        />
        <Frame
          src="/images/scenes/dnipro.jpg"
          alt="Дніпро з київських круч"
          className="enter enter-4 min-h-0"
        />
      </div>
    </div>
  );
}

export function LanguageSlide() {
  return (
    <div className="grid h-full min-h-0 gap-6 md:grid-cols-2 md:gap-10">
      <div className="flex min-h-0 flex-col justify-center gap-5">
        <Kicker>Мова · Біблія · граматика</Kicker>
        <Title>Як говорять люди</Title>
        <blockquote className="enter enter-2">
          <p className="font-display text-3xl leading-tight text-ink italic sm:text-4xl">
            «{QUOTES.language}»
          </p>
        </blockquote>
        <p className="enter enter-3 font-sans text-base leading-relaxed text-ink-soft">
          Обстоював народну київську мову, уникав русизмів і полонізмів. 1914-го
          видав «Граматику української мови» у двох частинах.
        </p>
        <p className="enter enter-4 font-sans text-base leading-relaxed text-ink-soft">
          Разом із Пантелеймоном Кулішем та Іваном Пулюєм завершив перший повний
          український переклад Біблії — «Святе Письмо Старого і Нового Завіту»,
          Відень, 1903. Нечуй-Левицький переклав, зокрема, Псалтир.
        </p>
      </div>
      <Frame
        src="/images/scenes/desk.jpg"
        alt="Рукописи, чорнильниця і каганець"
        className="enter enter-2 min-h-[200px] md:min-h-0"
        imgClass="object-[center_70%]"
      />
    </div>
  );
}

export function LastSlide() {
  return (
    <div className="grid h-full min-h-0 gap-6 md:grid-cols-2 md:gap-10">
      <Frame
        src="/images/scenes/cemetery.jpg"
        alt="Осіння алея старого київського кладовища"
        className="enter min-h-[200px] md:min-h-0"
      />
      <div className="flex min-h-0 flex-col justify-center gap-5 overflow-auto">
        <Kicker>1917–1918 · Київ, УНР</Kicker>
        <Title>Самотність на Дегтярівці</Title>
        <p className="enter enter-2 font-sans text-base leading-relaxed text-ink-soft">
          Революція пройшла повз нього. Наприкінці 1917-го впав і зламав ногу.
          Шпиталь ліквідували, письменника перевезли до Дегтярівської богадільні
          для самотніх.
        </p>
        <p className="enter enter-3 font-sans text-base leading-relaxed text-ink-soft">
          30 березня 1918-го Центральна Рада призначила персональну пенсію. Він
          не встиг нею скористатися. Помер 2 квітня. Панахиду відслужили в
          Софійському соборі, поховали на Байковому кладовищі.
        </p>
        <p className="enter enter-4 font-display text-xl text-forest italic">
          79 років. Майже все — за столом, майже все — українською.
        </p>
      </div>
    </div>
  );
}

export function TimelineSlide() {
  const [active, setActive] = useState(0);
  const event = TIMELINE[active];

  return (
    <div className="flex h-full min-h-0 flex-col justify-center gap-6">
      <div className="space-y-2">
        <Kicker>Вісь життя</Kicker>
        <Title>Десять точок на стежці</Title>
      </div>
      <div className="enter enter-2 grid w-full grid-cols-5 gap-1 sm:grid-cols-10 sm:gap-2">
        {TIMELINE.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.year}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "flex min-h-11 w-full flex-col items-center justify-center gap-2 rounded-md px-1 py-3 transition-[background-color,color] duration-150",
                selected ? "bg-forest text-paper" : "bg-paper-deep text-ink hover:bg-line/60",
              )}
            >
              <span className="font-sans text-xs font-medium tabular-nums">{item.year}</span>
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  selected ? "bg-paper" : "bg-forest/50",
                )}
              />
            </button>
          );
        })}
      </div>
      <article className="enter enter-3 rounded-xl bg-paper-deep/80 p-5 shadow-[var(--shadow-border)] sm:p-7">
        <p className="font-sans text-xs tracking-[0.18em] text-forest uppercase">
          {event.year}
        </p>
        <h3 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{event.title}</h3>
        <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-ink-soft sm:text-lg">
          {event.text}
        </p>
      </article>
    </div>
  );
}

export function LegacySlide() {
  return (
    <div className="grid h-full min-h-0 gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="flex min-h-0 flex-col justify-center gap-5">
        <Kicker>Після 1918-го</Kicker>
        <Title>Стежка не обірвалась</Title>
        <p className="enter enter-2 font-sans text-base leading-relaxed text-ink-soft">
          Його село свариться далі — на сторінках шкільної програми, на сцені й
          на екрані. У Стеблеві стоїть музей. Його ім’ям названі вулиці від Києва
          до Харкова.
        </p>
        <Frame
          src="/images/scenes/village.jpg"
          alt="Сільське подвір’я, світ «Кайдашевої сім’ї»"
          className="enter enter-3 hidden min-h-[180px] md:block"
        />
      </div>
      <ul className="enter enter-2 grid min-h-0 content-center gap-3">
        {LEGACY.map((item) => (
          <li
            key={item.year}
            className="grid grid-cols-[4.5rem_1fr] items-start gap-4 rounded-lg bg-paper-deep/80 px-4 py-4 shadow-[var(--shadow-border)]"
          >
            <p className="font-display text-2xl text-forest tabular-nums">{item.year}</p>
            <div>
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-1 font-sans text-sm leading-relaxed text-ink-soft">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CloseSlide() {
  return (
    <div className="relative flex h-full min-h-0 flex-col items-center justify-center overflow-hidden rounded-xl">
      <img
        src="/images/scenes/ros-river.jpg"
        alt="Річка Рось"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/72" />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <p className="enter font-sans text-xs tracking-[0.22em] text-paper/55 uppercase">
          Іван Нечуй-Левицький
        </p>
        <blockquote className="enter enter-1">
          <p className="font-display text-3xl leading-snug text-paper italic sm:text-4xl md:text-5xl">
            «{QUOTES.mine}»
          </p>
        </blockquote>
        <div className="enter enter-3 h-px w-16 bg-paper/30" />
        <p className="enter enter-4 font-sans text-sm tracking-[0.16em] text-paper/60 uppercase">
          Стеблів · Київ · {META.years}
        </p>
      </div>
    </div>
  );
}

export const SLIDES = [
  { id: "title", View: TitleSlide },
  { id: "figure", View: FigureSlide },
  { id: "family", View: FamilySlide },
  { id: "education", View: EducationSlide },
  { id: "journey", View: JourneySlide },
  { id: "debut", View: DebutSlide },
  { id: "works", View: WorksSlide },
  { id: "kyiv", View: KyivSlide },
  { id: "language", View: LanguageSlide },
  { id: "last", View: LastSlide },
  { id: "timeline", View: TimelineSlide },
  { id: "legacy", View: LegacySlide },
  { id: "close", View: CloseSlide },
] as const;
