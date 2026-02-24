import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Знакомо?
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Боли, которые вы уже знаете</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
            Вы просыпаетесь уже уставшим. В списке дел десятки пунктов, но чувства движения вперёд нет.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {[
            {
              number: "01",
              title: "Доход и карьера",
              category: "Вы много работаете, но финансовая свобода кажется миражом. Деньги есть, но спокойствия нет.",
              direction: "left",
            },
            {
              number: "02",
              title: "Отношения и одиночество",
              category: "Вокруг люди, но внутри — пустота. Вы не понимаете, как строить глубокие связи без потери себя.",
              direction: "right",
            },
            {
              number: "03",
              title: "Семья и долг",
              category: "«Ты должен», «тебе пора», «все так живут». Любовь, которая иногда душит ожиданиями.",
              direction: "left",
            },
            {
              number: "04",
              title: "Стресс и смыслы",
              category: "Вы ищете предназначение, но вместо ответа получаете тревогу. Кажется, жизнь проходит мимо.",
              direction: "right",
            },
          ].map((pain, i) => (
            <PainCard key={i} pain={pain} index={i} isVisible={isVisible} />
          ))}
        </div>

        <div
          className={`mt-6 max-w-2xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          style={{ transitionDelay: "700ms" }}
        >
          <p className="border-l-2 border-foreground/30 pl-4 font-mono text-sm italic text-foreground/70 md:text-base">
            Проблема не в вас. Проблема в том, что вас учили держать в воздухе слишком много мячей одновременно.
          </p>
        </div>
      </div>
    </section>
  )
}

function PainCard({
  pain,
  index,
  isVisible,
}: {
  pain: { number: string; title: string; category: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return pain.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-start justify-between border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/20 md:py-5 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 120}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {pain.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-2xl lg:text-3xl">
            {pain.title}
          </h3>
          <p className="max-w-lg font-mono text-xs text-foreground/50 md:text-sm">{pain.category}</p>
        </div>
      </div>
    </div>
  )
}
