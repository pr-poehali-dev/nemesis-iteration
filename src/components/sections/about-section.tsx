import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - For whom */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-5xl lg:text-6xl">
                Эта книга
                <br />
                для вас,
                <br />
                <span className="text-foreground/40">если...</span>
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {[
                "Вы чувствуете, что возможностей больше, чем понимания — куда именно идти.",
                "Вы устали от гонки за чужими целями и бесконечного сравнения с другими.",
                "Вы хотите не просто достигать, а понимать: зачем, ради чего и в каком направлении.",
                "Вы ищете способ выстроить осмысленную жизнь — со своими ритмами и ценностями.",
                "Вам важно разобраться, а не просто вдохновиться на пять минут.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 text-sm text-foreground/60">✅</span>
                  <p className="text-sm leading-relaxed text-foreground/85 md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Quote + stats */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-10">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <blockquote className="border-l-2 border-foreground/40 pl-6">
                <p className="mb-4 text-base leading-relaxed text-foreground/90 md:text-lg">
                  «Успех не универсален. Для кого-то это миллионы, для другого — здоровая семья. Семитриум не навязывает образ "правильной жизни". Он возвращает ответственность за выбор ориентиров вам».
                </p>
                <cite className="font-mono text-xs text-foreground/50">— из книги «Семитриум»</cite>
              </blockquote>
            </div>

            {[
              { value: "7", label: "Опор жизни", sublabel: "Главные сферы, без распыления", direction: "right" },
              { value: "90", label: "Дней", sublabel: "Конкретный план перемен", direction: "left" },
              { value: "1", label: "Система", sublabel: "Тринити: Дух, Душа, Тело", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${500 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div className="text-3xl font-light text-foreground md:text-5xl lg:text-6xl">{stat.value}</div>
                  <div>
                    <div className="font-sans text-base font-light text-foreground md:text-xl">{stat.label}</div>
                    <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-12 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "850ms" }}
        >
          <a href="https://t.me/semitrium" target="_blank" rel="noopener noreferrer">
            <MagneticButton size="lg" variant="primary">
              Получить книгу бесплатно
            </MagneticButton>
          </a>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(2)}>
            Что внутри
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}