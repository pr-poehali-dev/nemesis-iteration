import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setEmail("")

    setTimeout(() => setSubmitSuccess(false), 5000)
  }

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
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ PDF-формат. Доступ сразу после ввода email</p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <p className="max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
                  Введите свой email — и мы пришлём вам книгу «Семитриум» прямо сейчас. Без спама. Только ценное.
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

          {/* Right side - Email form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-8">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <label className="mb-2 block font-mono text-xs text-foreground/60 md:mb-3">
                  Ваш Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-2 text-base text-foreground placeholder:text-foreground/40 focus:border-foreground/60 focus:outline-none md:text-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex flex-col gap-2">
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    className="w-full disabled:opacity-50"
                  >
                    {isSubmitting ? "Отправляем..." : "Получить книгу бесплатно →"}
                  </MagneticButton>
                  <p className="text-center font-mono text-xs text-foreground/40">
                    PDF-формат · Доступ сразу
                  </p>
                </div>
                {submitSuccess && (
                  <p className="mt-4 text-center font-mono text-sm text-foreground/80">
                    ✅ Готово! Проверьте почту — книга уже там.
                  </p>
                )}
              </div>

              <div
                className={`pt-2 transition-all duration-700 md:pt-4 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <p className="mb-3 font-mono text-xs text-foreground/50">Или свяжитесь напрямую</p>
                <div className="flex gap-4">
                  {["Telegram", "VK"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="border-b border-transparent font-mono text-xs text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground/90"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
