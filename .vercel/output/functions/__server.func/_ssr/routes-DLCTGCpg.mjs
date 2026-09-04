import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as LayoutGrid, i as Maximize2, o as ChevronRight, r as Minimize2, s as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DLCTGCpg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var META = {
	name: "Іван Нечуй-Левицький",
	given: "Іван Семенович Левицький",
	years: "1838–1918",
	born: "25 листопада 1838",
	died: "2 квітня 1918",
	birthplace: "Стеблів, Київська губернія",
	birthplaceNow: "нині Черкащина",
	kicker: "Класик українського реалізму"
};
var ROLES = [
	{
		label: "Письменник",
		detail: "понад 50 прозових і драматичних творів"
	},
	{
		label: "Педагог",
		detail: "двадцять років гімназійної кафедри"
	},
	{
		label: "Етнограф",
		detail: "побут, фольклор і світогляд села"
	},
	{
		label: "Мовознавець",
		detail: "граматика і оборона народної мови"
	}
];
var FAMILY = {
	father: {
		name: "Семен Степанович Левицький",
		role: "Батько",
		text: "Сільський священник освічених, прогресивних поглядів. Шанував козаччину й Шевченка, зібрав домашню книгозбірню і власним коштом відкрив школу для селянських дітей — саме там син навчився читати."
	},
	mother: {
		name: "Ганна Лук’янівна Трезвинська",
		role: "Мати",
		text: "Неписьменна, лагідної вдачі. Двічі народжувала двійню, що підірвало здоров’я. Померла, коли Іванові було тринадцять — ця втрата лишилася в ньому на все життя."
	}
};
var EDUCATION = [
	{
		years: "1845–1853",
		place: "Богуславське духовне училище",
		text: "При монастирі. Латина, грека, церковнослов’янська. Сім років суворої школи."
	},
	{
		years: "1853–1859",
		place: "Київська духовна семінарія",
		text: "Читає Шевченка, Пушкіна, Гоголя. Захоплюється фольклором і селянським побутом."
	},
	{
		years: "1861–1865",
		place: "Київська духовна академія",
		text: "Закінчує зі званням магістра. Самотужки вивчає французьку й німецьку, читає Данте і Сервантеса. Духовна кар’єра його не вабить."
	}
];
var JOURNEY = [
	{
		years: "1865–66",
		place: "Полтава",
		role: "духовна семінарія"
	},
	{
		years: "1866–67",
		place: "Каліш",
		role: "жіноча гімназія"
	},
	{
		years: "1867–72",
		place: "Седлець",
		role: "жіноча гімназія"
	},
	{
		years: "1873–85",
		place: "Кишинів",
		role: "чоловіча гімназія"
	},
	{
		years: "з 1885",
		place: "Київ",
		role: "вільна літературна праця"
	}
];
var WORKS = [
	{
		year: "1874",
		title: "Хмари",
		genre: "роман",
		note: "Українська інтелігенція між ідеалом і зрадою. Один із перших романів нової літератури."
	},
	{
		year: "1878",
		title: "Микола Джеря",
		genre: "повість",
		note: "Бунт наймита проти панщини. Соціальний реалізм без прикрас."
	},
	{
		year: "1879",
		title: "Кайдашева сім’я",
		genre: "повість",
		note: "Головний твір. Сварка двох дворів як дзеркало всього українського села."
	},
	{
		year: "1884",
		title: "Старосвітські батюшки та матушки",
		genre: "повість",
		note: "Побут духовенства, який він знав із дитинства — іронічно й тепло."
	}
];
var TIMELINE = [
	{
		year: "1838",
		title: "Народження",
		text: "25 листопада, Стеблів на Росі. Син сільського священника Семена Левицького."
	},
	{
		year: "1853",
		title: "Семінарія",
		text: "Вступ до Київської духовної семінарії після Богуславського училища."
	},
	{
		year: "1865",
		title: "Магістр",
		text: "Закінчує Київську духовну академію. Пише «Дві московки». Починає викладати."
	},
	{
		year: "1868",
		title: "Дебют",
		text: "У львівській «Правді» виходить «Дві московки» під псевдонімом Іван Нечуй."
	},
	{
		year: "1873",
		title: "Кишинів",
		text: "Кафедра російської словесності. Таємний учительський гурток. Нагляд жандармерії."
	},
	{
		year: "1879",
		title: "Кайдаші",
		text: "Друкується «Кайдашева сім’я» — твір, за який його знають досі."
	},
	{
		year: "1885",
		title: "Київ",
		text: "Відставка після двадцяти років учительства. Відтепер лише література."
	},
	{
		year: "1903",
		title: "Біблія",
		text: "У Відні виходить перший повний український переклад Святого Письма — разом із Кулішем і Пулюєм."
	},
	{
		year: "1914",
		title: "Граматика",
		text: "«Граматика української мови» у двох частинах. Принцип: писати, як говорять люди."
	},
	{
		year: "1918",
		title: "Смерть",
		text: "2 квітня, Дегтярівська богадільня в Києві. Панахида в Софійському соборі, поховання на Байковому."
	}
];
var LEGACY = [
	{
		year: "1968",
		title: "Музей у Стеблеві",
		text: "Літературно-меморіальний музей на батьківщині письменника."
	},
	{
		year: "1993",
		title: "Премія його імені",
		text: "Літературна премія імені Івана Нечуя-Левицького."
	},
	{
		year: "2013",
		title: "Google Doodle",
		text: "175 років від народження — портрет на головній сторінці світу."
	},
	{
		year: "2020",
		title: "«Спіймати Кайдаша»",
		text: "Серіал за мотивами повісті довів: сварка двох дворів не старіє."
	}
];
var ROUTINE = [
	{
		time: "Ранок",
		text: "Сніданок і кілька годин за столом — без поспіху, але щодня."
	},
	{
		time: "Обід",
		text: "Коротка перерва. Не пив, не курив, уникав суперечок."
	},
	{
		time: "Прогулянка",
		text: "Незмінний маршрут до Дніпра. Сидів біля води — народився над Россю."
	},
	{
		time: "Вечір",
		text: "Знову праця. Сон о десятій, навіть якщо звати на ювілей."
	}
];
var QUOTES = {
	language: "Писати треба так, як люди говорять!",
	mine: "Українська жизнь — то непочатий рудник, що лежить десь під землею, то безконечний матеріал для письменника.",
	franko: "Іван Франко високо оцінив мову і композицію «Кайдашевої сім’ї»."
};
var SLIDE_INDEX = [
	{
		id: "title",
		label: "Титул",
		year: "1838–1918"
	},
	{
		id: "figure",
		label: "Постать",
		year: "класик"
	},
	{
		id: "family",
		label: "Стеблів",
		year: "1838"
	},
	{
		id: "education",
		label: "Освіта",
		year: "1845–65"
	},
	{
		id: "journey",
		label: "Кафедра",
		year: "1865–85"
	},
	{
		id: "debut",
		label: "Дебют",
		year: "1868"
	},
	{
		id: "works",
		label: "Вершини",
		year: "1874–84"
	},
	{
		id: "kyiv",
		label: "Київ",
		year: "1885"
	},
	{
		id: "language",
		label: "Мова",
		year: "1903–14"
	},
	{
		id: "last",
		label: "Останні роки",
		year: "1918"
	},
	{
		id: "timeline",
		label: "Хронологія",
		year: "вісь"
	},
	{
		id: "legacy",
		label: "Спадщина",
		year: "досі"
	},
	{
		id: "close",
		label: "Фінал",
		year: "цитата"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium outline-none select-none transition-[background-color,color,box-shadow,opacity,scale] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-ink text-paper hover:bg-ink-soft",
			forest: "bg-forest text-paper hover:bg-forest-deep",
			ghost: "bg-transparent text-ink hover:bg-ink/[0.06] shadow-none",
			outline: "bg-transparent text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
		},
		size: {
			default: "h-11 rounded-md px-4",
			sm: "h-10 rounded-sm px-3 text-sm",
			icon: "size-11 rounded-md",
			iconSm: "size-10 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "enter font-sans text-xs font-medium tracking-[0.22em] text-forest uppercase",
		children
	});
}
function Title({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: cn("enter enter-1 font-display text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl", className),
		children
	});
}
function Frame({ src, alt, className, imgClass }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: cn("overflow-hidden rounded-lg bg-paper-deep shadow-[var(--shadow-border)]", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: cn("framed h-full w-full object-cover", imgClass)
		})
	});
}
function TitleSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full min-h-0 flex-col justify-end overflow-hidden rounded-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/scenes/mill.jpg",
				alt: "Млин на річці Рось у Стеблеві",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/15" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col gap-4 p-6 pb-8 sm:p-10 md:p-14 md:pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-paper/70",
						children: META.kicker
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "enter enter-1 font-display max-w-4xl text-4xl leading-[0.95] font-semibold tracking-tight text-paper sm:text-6xl md:text-7xl lg:text-8xl",
						children: [
							"Іван",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Нечуй-Левицький"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "enter enter-2 flex flex-wrap items-end gap-x-6 gap-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl text-paper/85 italic sm:text-3xl",
								children: "Життєвий шлях"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mb-1 hidden h-px w-10 bg-paper/40 sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-sm tracking-[0.18em] text-paper/70 uppercase",
								children: META.years
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "enter enter-3 max-w-xl font-sans text-sm leading-relaxed text-paper/70 sm:text-base",
						children: "Син сільського священника зі Стеблева. Автор «Кайдашевої сім’ї». Людина, що описала українське село так, ніби воно саме розповіло про себе."
					})
				]
			})
		]
	});
}
function FigureSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full min-h-0 grid-rows-[minmax(180px,38%)_1fr] gap-5 md:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] md:grid-rows-1 md:gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
			src: "/images/portraits/trush.jpg",
			alt: "Портрет Івана Нечуя-Левицького роботи Івана Труша, 1900",
			className: "enter min-h-0",
			imgClass: "object-[center_12%]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-col justify-center gap-5 overflow-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Постать" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "Класик, що побачив село зсередини" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter enter-2 max-w-prose font-sans text-base leading-relaxed text-ink-soft sm:text-lg",
					children: "Справжнє прізвище — Левицький. Писав під іменем Нечуй. Ніколи не одружувався, двадцять років учителював на околицях імперії і віддав решту життя українській прозі."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "enter enter-3 grid grid-cols-2 gap-3",
					children: ROLES.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-paper-deep/80 px-3 py-3 shadow-[var(--shadow-border)] sm:px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-semibold text-ink",
							children: role.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-xs leading-snug text-quiet sm:text-sm",
							children: role.detail
						})]
					}, role.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter enter-4 font-sans text-xs text-quiet",
					children: "Портрет: Іван Труш, 1900. Полотно, олія."
				})
			]
		})]
	});
}
function FamilySlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full min-h-0 gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-col justify-center gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "1838 · Стеблів на Росі" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "Син сільського священника" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter enter-2 font-sans text-base leading-relaxed text-ink-soft",
					children: "Надросянське містечко, Богуславський повіт Київської губернії. Річка, млин, церковний двір і батькова школа для селян — перший всесвіт майбутнього реаліста."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "enter enter-3 font-display text-xl text-forest italic",
					children: [
						META.born,
						" — ",
						META.birthplace
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-0 grid-rows-[minmax(140px,36%)_1fr] gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				src: "/images/scenes/ros-river.jpg",
				alt: "Річка Рось біля Стеблева",
				className: "enter enter-2 min-h-0"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "enter enter-3 grid gap-3 sm:grid-cols-2",
				children: [FAMILY.father, FAMILY.mother].map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col rounded-lg bg-paper-deep/70 p-4 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs tracking-[0.16em] text-forest uppercase",
							children: person.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-xl leading-snug font-semibold",
							children: person.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm leading-relaxed text-ink-soft",
							children: person.text
						})
					]
				}, person.role))
			})]
		})]
	});
}
function EducationSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full min-h-0 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-col justify-center gap-5 overflow-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "1845–1865 · двадцять років науки" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "Від монастирського училища до магістра" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "enter enter-2 relative mt-2 space-y-4 border-l border-line pl-5",
					children: EDUCATION.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 -left-[25px] size-2.5 rounded-full bg-forest" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-xs font-medium tracking-[0.14em] text-clay uppercase",
								children: step.years
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-xl font-semibold sm:text-2xl",
								children: step.place
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-sans text-sm leading-relaxed text-ink-soft",
								children: step.text
							})
						]
					}, step.years))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-0 grid-rows-2 gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				src: "/images/scenes/monastery.jpg",
				alt: "Двір монастирського училища",
				className: "enter enter-3 min-h-0"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				src: "/images/scenes/classroom.jpg",
				alt: "Класна кімната ХІХ століття",
				className: "enter enter-4 min-h-0"
			})]
		})]
	});
}
function JourneySlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col justify-center gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "1865–1885 · педагогічна дорога" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "Двадцять років біля кафедри" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "enter enter-2 max-w-2xl font-sans text-base leading-relaxed text-ink-soft",
						children: "Викладав російську словесність, історію й географію — і водночас українською писав те, чого імперія в школі не дозволяла. Шлях проліг від Полтави через польські гімназії до Кишинева."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "enter enter-3 grid grid-cols-2 gap-3 md:grid-cols-5",
				children: JOURNEY.map((stop, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative flex flex-col rounded-lg bg-paper-deep/80 p-4 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl text-forest/35",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-xs tracking-[0.14em] text-clay uppercase",
							children: stop.years
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-2xl font-semibold",
							children: stop.place
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-sm text-quiet",
							children: stop.role
						})
					]
				}, stop.place))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter enter-4 max-w-3xl font-sans text-sm leading-relaxed text-ink-soft",
				children: "У Кишиневі очолив гурток прогресивних учителів, говорив про національне питання — і потрапив під нагляд жандармерії. 1885-го пішов у відставку і повернувся до Києва вже як вільний літератор."
			})
		]
	});
}
function DebutSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full min-h-0 gap-6 md:grid-cols-2 md:gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-col justify-center gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "1868 · Львів, журнал «Правда»" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "З’являється Нечуй" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter enter-2 font-sans text-base leading-relaxed text-ink-soft",
					children: "Повість «Дві московки» написана ще 1865-го, у Полтаві. Друком вона вийшла у Львові під псевдонімом Іван Нечуй — так Левицький увійшов в літературу."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "enter enter-3 border-l-2 border-forest pl-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl leading-snug text-ink italic sm:text-3xl",
						children: "«Там я написав “Дві московки”…»"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cite", {
						className: "mt-2 block font-sans text-sm text-quiet not-italic",
						children: "з автобіографічних спогадів"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter enter-4 font-sans text-sm leading-relaxed text-ink-soft",
					children: "Інші маски, якими підписувався: І. Баштовий, Гр. Гетьманець, О. Криницький. Але в історію він увійшов як Нечуй."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
			src: "/images/scenes/desk.jpg",
			alt: "Письмовий стіл ХІХ століття з рукописами",
			className: "enter enter-2 min-h-[200px] md:min-h-0"
		})]
	});
}
function WorksSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "1874–1884 · розквіт" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "Епос українського села" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter enter-2 max-w-md font-sans text-sm leading-relaxed text-ink-soft",
				children: QUOTES.franko
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "enter enter-3 grid min-h-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2",
			children: WORKS.map((work) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "flex flex-col justify-between rounded-lg bg-paper-deep/80 p-4 shadow-[var(--shadow-border)] sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs tracking-[0.16em] text-clay uppercase",
						children: work.genre
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-sm tabular-nums text-forest",
						children: work.year
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-2xl font-semibold sm:text-3xl",
					children: work.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-sans text-sm leading-relaxed text-ink-soft",
					children: work.note
				})]
			}, work.title))
		})]
	});
}
function KyivSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full min-h-0 gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-col justify-center gap-5 overflow-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "1885–1917 · вільний літератор" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "Київські роки самітника" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter enter-2 font-sans text-base leading-relaxed text-ink-soft",
					children: "Жив у флігелі з садком і пасікою, потім у скромних квартирах на Пушкінській, Володимирській, Львівській. Щодня — той самий маршрут до Дніпра. Парасолька в будь-яку погоду. Сон о десятій."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "enter enter-3 grid gap-3 sm:grid-cols-2",
					children: ROUTINE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-paper-deep/80 px-4 py-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs tracking-[0.16em] text-forest uppercase",
							children: item.time
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-sm leading-relaxed text-ink-soft",
							children: item.text
						})]
					}, item.time))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-0 grid-rows-2 gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				src: "/images/scenes/kyiv-dusk.jpg",
				alt: "Київська вулиця наприкінці ХІХ століття",
				className: "enter enter-3 min-h-0"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				src: "/images/scenes/dnipro.jpg",
				alt: "Дніпро з київських круч",
				className: "enter enter-4 min-h-0"
			})]
		})]
	});
}
function LanguageSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full min-h-0 gap-6 md:grid-cols-2 md:gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-col justify-center gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Мова · Біблія · граматика" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "Як говорять люди" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "enter enter-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-3xl leading-tight text-ink italic sm:text-4xl",
						children: [
							"«",
							QUOTES.language,
							"»"
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter enter-3 font-sans text-base leading-relaxed text-ink-soft",
					children: "Обстоював народну київську мову, уникав русизмів і полонізмів. 1914-го видав «Граматику української мови» у двох частинах."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter enter-4 font-sans text-base leading-relaxed text-ink-soft",
					children: "Разом із Пантелеймоном Кулішем та Іваном Пулюєм завершив перший повний український переклад Біблії — «Святе Письмо Старого і Нового Завіту», Відень, 1903. Нечуй-Левицький переклав, зокрема, Псалтир."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
			src: "/images/scenes/desk.jpg",
			alt: "Рукописи, чорнильниця і каганець",
			className: "enter enter-2 min-h-[200px] md:min-h-0",
			imgClass: "object-[center_70%]"
		})]
	});
}
function LastSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full min-h-0 gap-6 md:grid-cols-2 md:gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
			src: "/images/scenes/cemetery.jpg",
			alt: "Осіння алея старого київського кладовища",
			className: "enter min-h-[200px] md:min-h-0"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-col justify-center gap-5 overflow-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "1917–1918 · Київ, УНР" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "Самотність на Дегтярівці" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter enter-2 font-sans text-base leading-relaxed text-ink-soft",
					children: "Революція пройшла повз нього. Наприкінці 1917-го впав і зламав ногу. Шпиталь ліквідували, письменника перевезли до Дегтярівської богадільні для самотніх."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter enter-3 font-sans text-base leading-relaxed text-ink-soft",
					children: "30 березня 1918-го Центральна Рада призначила персональну пенсію. Він не встиг нею скористатися. Помер 2 квітня. Панахиду відслужили в Софійському соборі, поховали на Байковому кладовищі."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter enter-4 font-display text-xl text-forest italic",
					children: "79 років. Майже все — за столом, майже все — українською."
				})
			]
		})]
	});
}
function TimelineSlide() {
	const [active, setActive] = (0, import_react.useState)(0);
	const event = TIMELINE[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col justify-center gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Вісь життя" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "Десять точок на стежці" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "enter enter-2 flex gap-1 overflow-x-auto pb-1 md:grid md:grid-cols-10 md:gap-2 md:overflow-visible",
				children: TIMELINE.map((item, i) => {
					const selected = i === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActive(i),
						className: cn("flex min-h-11 min-w-16 flex-col items-center justify-center gap-2 rounded-md px-2 py-3 transition-[background-color,color] duration-150", selected ? "bg-forest text-paper" : "bg-paper-deep text-ink hover:bg-line/60"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-xs font-medium tabular-nums",
							children: item.year
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", selected ? "bg-paper" : "bg-forest/50") })]
					}, item.year);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "enter enter-3 rounded-xl bg-paper-deep/80 p-5 shadow-[var(--shadow-border)] sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs tracking-[0.18em] text-forest uppercase",
						children: event.year
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
						children: event.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl font-sans text-base leading-relaxed text-ink-soft sm:text-lg",
						children: event.text
					})
				]
			})
		]
	});
}
function LegacySlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full min-h-0 gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-col justify-center gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Після 1918-го" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "Стежка не обірвалась" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter enter-2 font-sans text-base leading-relaxed text-ink-soft",
					children: "Його село свариться далі — на сторінках шкільної програми, на сцені й на екрані. У Стеблеві стоїть музей. Його ім’ям названі вулиці від Києва до Харкова."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
					src: "/images/scenes/village.jpg",
					alt: "Сільське подвір’я, світ «Кайдашевої сім’ї»",
					className: "enter enter-3 hidden min-h-[180px] md:block"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "enter enter-2 grid min-h-0 content-center gap-3",
			children: LEGACY.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid grid-cols-[4.5rem_1fr] items-start gap-4 rounded-lg bg-paper-deep/80 px-4 py-4 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-forest tabular-nums",
					children: item.year
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-sans text-sm leading-relaxed text-ink-soft",
					children: item.text
				})] })]
			}, item.year))
		})]
	});
}
function CloseSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full min-h-0 flex-col items-center justify-center overflow-hidden rounded-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/scenes/ros-river.jpg",
				alt: "Річка Рось",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/72" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "enter font-sans text-xs tracking-[0.22em] text-paper/55 uppercase",
						children: "Іван Нечуй-Левицький"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "enter enter-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-3xl leading-snug text-paper italic sm:text-4xl md:text-5xl",
							children: [
								"«",
								QUOTES.mine,
								"»"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "enter enter-3 h-px w-16 bg-paper/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "enter enter-4 font-sans text-sm tracking-[0.16em] text-paper/60 uppercase",
						children: ["Стеблів · Київ · ", META.years]
					})
				]
			})
		]
	});
}
var SLIDES = [
	{
		id: "title",
		View: TitleSlide
	},
	{
		id: "figure",
		View: FigureSlide
	},
	{
		id: "family",
		View: FamilySlide
	},
	{
		id: "education",
		View: EducationSlide
	},
	{
		id: "journey",
		View: JourneySlide
	},
	{
		id: "debut",
		View: DebutSlide
	},
	{
		id: "works",
		View: WorksSlide
	},
	{
		id: "kyiv",
		View: KyivSlide
	},
	{
		id: "language",
		View: LanguageSlide
	},
	{
		id: "last",
		View: LastSlide
	},
	{
		id: "timeline",
		View: TimelineSlide
	},
	{
		id: "legacy",
		View: LegacySlide
	},
	{
		id: "close",
		View: CloseSlide
	}
];
var LAST = SLIDES.length - 1;
var HINTS = [
	{
		keys: "← →",
		label: "слайди"
	},
	{
		keys: "Пробіл",
		label: "далі"
	},
	{
		keys: "G",
		label: "зміст"
	},
	{
		keys: "F",
		label: "на весь екран"
	}
];
function Deck() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [overview, setOverview] = (0, import_react.useState)(false);
	const [hint, setHint] = (0, import_react.useState)(true);
	const [fullscreen, setFullscreen] = (0, import_react.useState)(false);
	const [dir, setDir] = (0, import_react.useState)(1);
	const touch = (0, import_react.useRef)(null);
	const stageRef = (0, import_react.useRef)(null);
	const go = (0, import_react.useCallback)((next, direction) => {
		setIndex((current) => {
			const clamped = Math.max(0, Math.min(LAST, next));
			if (clamped === current) return current;
			setDir(direction ?? (clamped > current ? 1 : -1));
			return clamped;
		});
		setOverview(false);
		setHint(false);
	}, []);
	const next = (0, import_react.useCallback)(() => go(index + 1, 1), [go, index]);
	const prev = (0, import_react.useCallback)(() => go(index - 1, -1), [go, index]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
				e.preventDefault();
				go(index + 1, 1);
			} else if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key === "Backspace") {
				e.preventDefault();
				go(index - 1, -1);
			} else if (e.key === "Home") go(0, -1);
			else if (e.key === "End") go(LAST, 1);
			else if (e.key === "g" || e.key === "G" || e.key === "Escape") {
				if (e.key === "Escape" && overview) setOverview(false);
				else if (e.key !== "Escape") setOverview((v) => !v);
			} else if (e.key === "f" || e.key === "F") toggleFullscreen();
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		go,
		index,
		overview
	]);
	(0, import_react.useEffect)(() => {
		const t = window.setTimeout(() => setHint(false), 5200);
		return () => window.clearTimeout(t);
	}, []);
	function toggleFullscreen() {
		const el = stageRef.current ?? document.documentElement;
		if (!document.fullscreenElement) {
			el.requestFullscreen?.();
			setFullscreen(true);
		} else {
			document.exitFullscreen?.();
			setFullscreen(false);
		}
	}
	function onTouchStart(e) {
		const t = e.changedTouches[0];
		touch.current = {
			x: t.clientX,
			y: t.clientY
		};
	}
	function onTouchEnd(e) {
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
	const progress = (index + 1) / SLIDES.length * 100;
	const meta = SLIDE_INDEX[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		ref: stageRef,
		className: "grain flex h-dvh flex-col bg-paper text-ink",
		onTouchStart,
		onTouchEnd,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-0.5 bg-line",
				role: "progressbar",
				"aria-valuemin": 1,
				"aria-valuemax": SLIDES.length,
				"aria-valuenow": index + 1,
				"aria-label": "Прогрес презентації",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-forest transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
					style: { width: `${progress}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3 px-4 py-3 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs tracking-[0.16em] text-quiet uppercase",
						children: "Нечуй-Левицький"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden font-sans text-xs text-quiet sm:block",
						children: meta.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "iconSm",
							"aria-label": overview ? "Закрити зміст" : "Відкрити зміст",
							onClick: () => setOverview((v) => !v),
							children: overview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "iconSm",
							"aria-label": fullscreen ? "Вийти з повного екрана" : "На весь екран",
							onClick: toggleFullscreen,
							children: fullscreen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "size-4" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col px-4 pb-3 sm:px-6",
				"aria-live": "polite",
				"aria-atomic": "true",
				children: overview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {
					current: index,
					onSelect: (i) => go(i)
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1",
					style: { ["--enter-y"]: dir > 0 ? "12px" : "-12px" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideView, {})
				}, slide.id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex items-center justify-between gap-3 px-4 py-3 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						"aria-label": "Попередній слайд",
						onClick: prev,
						disabled: index === 0 && !overview,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-sans text-sm tabular-nums text-quiet",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ink",
								children: String(index + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-1.5 text-line",
								children: "/"
							}),
							String(SLIDES.length).padStart(2, "0")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "forest",
						size: "icon",
						"aria-label": "Наступний слайд",
						onClick: next,
						disabled: index === LAST && !overview,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})
				]
			}),
			hint && !overview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute right-4 bottom-20 z-30 hidden rounded-md bg-ink/88 px-4 py-3 text-paper shadow-[var(--shadow-border)] sm:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-1.5 font-sans text-xs",
					children: HINTS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-16 font-medium tracking-wide",
							children: h.keys
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-paper/70",
							children: h.label
						})]
					}, h.keys))
				})
			}) : null
		]
	});
}
function Overview({ current, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col gap-5 overflow-auto py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-sans text-xs tracking-[0.2em] text-forest uppercase",
			children: "Зміст"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-1 font-display text-3xl font-semibold sm:text-4xl",
			children: "Життєвий шлях"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3",
			children: SLIDE_INDEX.map((item, i) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect(i),
					className: cn("flex w-full items-baseline gap-4 rounded-lg px-4 py-3 text-left shadow-[var(--shadow-border)] transition-[background-color,color] duration-150", i === current ? "bg-forest text-paper" : "bg-paper-deep text-ink hover:bg-line/50"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-xs tabular-nums opacity-70",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 font-display text-xl font-semibold",
							children: item.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-xs tracking-wide opacity-70",
							children: item.year
						})
					]
				}) }, item.id);
			})
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, {});
}
//#endregion
export { Home as component };
