import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Семитриум
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Компас, который вы заметили не сразу</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/80 md:text-base">
            Эта книга — не сборник советов «как стать успешным». Это результат долгих наблюдений за людьми, у которых получается.
            <span className="ml-1 text-foreground/60">Автор, Аня, не коуч и не гуру. Она исследователь.</span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-10 lg:gap-x-24">
          {[
            {
              title: "Конец иллюзии продуктивности",
              description: "Почему занятость не равна движению и как перестать имитировать бурную деятельность.",
              direction: "top",
            },
            {
              title: "Правило 7 опор",
              description: "Как выбрать главную семёрку сфер жизни, чтобы не распыляться и наконец увидеть результат.",
              direction: "right",
            },
            {
              title: "Система Тринити",
              description: "Как проверить любую цель на прочность (Дух, Душа, Тело), чтобы не выгореть на полпути.",
              direction: "left",
            },
            {
              title: "План на 90 дней",
              description: "Конкретная инструкция, как перейти от мечтаний к реальным шагам без насилия над собой.",
              direction: "bottom",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-xl font-light text-foreground md:text-2xl">{service.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
    </div>
  )
}
