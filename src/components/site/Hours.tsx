import { Reveal } from "./Reveal";

const schedule = [
  { day: "Segunda-feira", hours: "08:00 — 18:00", open: true },
  { day: "Terça-feira", hours: "08:00 — 18:00", open: true },
  { day: "Quarta-feira", hours: "08:00 — 18:00", open: true },
  { day: "Quinta-feira", hours: "08:00 — 18:00", open: true },
  { day: "Sexta-feira", hours: "08:00 — 18:00", open: true },
  { day: "Sábado", hours: "Fechado", open: false },
  { day: "Domingo", hours: "Fechado", open: false },
];

export function Hours() {
  return (
    <section id="horarios" className="relative py-28 md:py-40">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Atendimento</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl">Horários</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-base md:text-lg font-light text-foreground/70">
              Recebemos você com hora marcada, em um ambiente reservado e acolhedor.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-7 max-w-6xl mx-auto">
          {schedule.map((s, i) => (
            <Reveal key={s.day} delay={i * 60}>
              <div
                className={`h-full rounded-2xl border p-6 text-center transition-all duration-500 hover:-translate-y-1 ${
                  s.open
                    ? "bg-card border-border hover:border-sand hover:shadow-xl"
                    : "bg-muted/50 border-transparent"
                }`}
              >
                <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
                  {s.day}
                </div>
                <div
                  className={`mt-4 font-display text-lg leading-tight ${
                    s.open ? "text-foreground" : "text-foreground/40"
                  }`}
                >
                  {s.hours}
                </div>
                <div className="mt-4">
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full ${
                      s.open ? "bg-sand" : "bg-foreground/20"
                    }`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
