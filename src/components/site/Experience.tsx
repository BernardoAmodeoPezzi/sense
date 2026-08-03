import { Reveal } from "./Reveal";
import video1 from "@/assets/sense-1.mp4";
import video2 from "@/assets/sense-2.mp4";
import video3 from "@/assets/sense-3.mp4";
import video4 from "@/assets/sense-4.mp4";

const videos = [video1, video2, video3, video4];



export function Experience() {
  return (
    <section
      className="relative py-28 md:py-40"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--sage) 12%, transparent) 50%, transparent 100%)",
      }}
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Experiência Sense</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl">Conheça a Sense</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-base md:text-lg font-light text-foreground/70">
              Um ambiente pensado para acolher, cuidar e proporcionar uma experiência
              integrada em saúde.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 md:gap-6 md:grid-cols-2">
          {videos.map((v, i) => (
            <Reveal key={v.asset_id} delay={i * 120}>
              <div className="overflow-hidden rounded-[1.25rem] bg-ink/5">
                <video
                  src={v}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Vídeo institucional da clínica Sense"
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>


        <Reveal delay={200}>
          <p className="mt-20 mx-auto max-w-2xl text-center font-display italic text-2xl md:text-3xl leading-relaxed text-foreground/85">
            “Cada detalhe da Sense foi pensado para que o cuidado comece antes mesmo do
            atendimento.”
          </p>
        </Reveal>
      </div>
    </section>
  );
}
