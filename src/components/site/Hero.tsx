import { openBooking } from "./BookingDialog";
import heroAsset from "@/assets/sense-hero-wall.png";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] w-full overflow-hidden bg-[#1b1e22]">
      <img
        src={heroAsset}
        alt="Sense — Medicina & Odontologia Integradas"
        className="absolute inset-0 h-full w-full object-contain object-top sm:object-cover sm:object-center"
        width={2000}
        height={1200}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/50" />

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col justify-end pb-24">
        <div
          className="fade-in-up flex flex-wrap gap-3"
          style={{ animationDelay: "200ms" }}
        >
          <button type="button" onClick={openBooking} className="btn-primary">
            Agendar Horário
          </button>
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

