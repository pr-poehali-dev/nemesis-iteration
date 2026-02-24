import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-6xl lg:text-7xl">
                Получите
                <br />
                книгу
                <br />
                <span className="text-foreground/40">бесплатно</span>
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Переходите в Telegram-канал</p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <p className="max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
                  Книга доступна в Telegram-канале. Подпишитесь — и получите её бесплатно, а также полезные материалы по теме.
                </p>
              </div>

              <div
                className={`flex flex-col gap-3 transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                {[
                  "Без регистрации и платежей",
                  "Мгновенный доступ к PDF",
                  "90-дневный план внутри",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Icon name="Check" size={14} className="text-foreground/60" />
                    <span className="font-mono text-xs text-foreground/70 md:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Telegram CTA */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6 md:space-y-10">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur-sm md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10">
                      <Icon name="Send" size={18} className="text-foreground/80" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-foreground">Telegram-канал</p>
                      <p className="font-mono text-xs text-foreground/50">@semitrium</p>
                    </div>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-foreground/70">
                    Подпишитесь на канал — там вас ждёт книга «Семитриум» и регулярные материалы о том, как жить осмысленно.
                  </p>
                  <a href="https://t.me/semitrium" target="_blank" rel="noopener noreferrer">
                    <MagneticButton variant="primary" size="lg" className="w-full">
                      Открыть канал →
                    </MagneticButton>
                  </a>
                  <p className="mt-3 text-center font-mono text-xs text-foreground/40">
                    Бесплатно · Сразу · Без регистрации
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
