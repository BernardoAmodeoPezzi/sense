import { CONTACT } from "@/lib/team";
import heroImg from "@/assets/hero-sense.png";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Sense — Medicina & Odontologia Integradas"
        className="absolute inset-0 h-full w-full object-cover"
        width={2000}
        height={1200}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/60" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 40%, color-mix(in oklab, var(--sand) 25%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col justify-center pt-32 pb-24">
        <span
          className="eyebrow fade-in-up"
          style={{ color: "color-mix(in oklab, var(--sand) 80%, white)" }}
        >
          Medicina & Odontologia Integradas
        </span>
        <h1
          className="fade-in-up mt-6 max-w-[18ch] text-5xl leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "120ms" }}
        >
          Sense
        </h1>
        <p
          className="fade-in-up mt-6 max-w-xl text-lg font-light text-white/85 md:text-xl"
          style={{ animationDelay: "220ms" }}
        >
          Saúde integrada para cuidar de você em todas as fases da vida.
        </p>

        <div
          className="fade-in-up mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "340ms" }}
        >
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Agendar Horário
          </a>
          <a
            href="#localizacao"
            className="btn-ghost"
            style={{
              color: "white",
              borderColor: "rgba(255,255,255,0.4)",
            }}
          >
            Ver Localização
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para conhecer a clínica"
        className="scroll-hint absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <span className="flex flex-col items-center gap-2">
          <span className="text-[0.65rem] uppercase tracking-[0.35em]">Rolar</span>
          <span className="block h-8 w-px bg-white/50" />
        </span>
      </a>
    </section>
  );
}
