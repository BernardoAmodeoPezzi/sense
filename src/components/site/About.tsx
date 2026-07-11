import { Reveal } from "./Reveal";
import gallerySmile from "@/assets/about-institucional.jpeg";

export function About() {
  return (
    <section id="sobre" className="relative py-28 md:py-40">
      <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-24 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <Reveal>
            <span className="eyebrow">Nossa Filosofia</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              O cuidado
              <br />
              <em className="italic text-sand">que faz sentido.</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-foreground/75 font-light max-w-xl">
              <p>
                Na Sense, acreditamos que a saúde não acontece de forma isolada. Nosso
                corpo é um sistema integrado, e é por isso que reunimos em um só lugar o
                que há de mais avançado em <strong className="font-medium text-foreground">endocrinologia</strong> e{" "}
                <strong className="font-medium text-foreground">odontologia</strong>.
              </p>
              <p>
                Da infância à fase adulta, acompanhamos você e sua família em todas as
                etapas da vida. Seja através da regulação metabólica ou da reabilitação
                do seu sorriso, nosso compromisso é oferecer um atendimento humanizado,
                preciso e, acima de tudo, que faça sentido para as suas necessidades reais.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 grid grid-cols-2 gap-8 max-w-md">
              <div>
                <div className="font-display text-4xl text-sand">45+</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-foreground/60">
                  Anos de experiência
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-sand">2</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-foreground/60">
                  Especialidades integradas
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <Reveal delay={120}>
            <div className="relative">
              <div
                className="absolute -inset-6 -z-10 rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--sand) 25%, transparent), color-mix(in oklab, var(--sage) 20%, transparent))",
                }}
              />
              <img
                src={gallerySmile}
                alt="Sorriso saudável"
                loading="lazy"
                width={1200}
                height={1600}
                className="w-full rounded-[1.5rem] object-cover aspect-[4/5] shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-background px-6 py-5 shadow-xl border border-border/60 max-w-[220px]">
                <div className="eyebrow">Sense</div>
                <div className="mt-2 font-display text-lg leading-snug">
                  Clínica boutique em Moinhos de Vento
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
