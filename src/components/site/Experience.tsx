import { Reveal } from "./Reveal";
import smile from "@/assets/gallery-smile.jpg";
import instruments from "@/assets/gallery-instruments.jpg";
import orchid from "@/assets/gallery-orchid.jpg";
import care from "@/assets/gallery-care.jpg";

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

        <div className="mt-20 grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7 lg:col-span-8">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={instruments}
                alt="Detalhe de instrumentos clínicos"
                loading="lazy"
                className="w-full aspect-[16/10] object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={orchid}
                alt="Detalhe delicado — orquídea"
                loading="lazy"
                className="w-full aspect-[16/10] md:aspect-[4/5] object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal className="col-span-6 lg:col-span-4">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={care}
                alt="Cuidado com o sorriso"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="col-span-6 lg:col-span-8">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={smile}
                alt="Sorriso saudável"
                loading="lazy"
                className="w-full aspect-[4/5] lg:aspect-[16/10] object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
              />
            </div>
          </Reveal>
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
