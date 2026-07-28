import { Reveal } from "./Reveal";
import gallerySmile from "@/assets/about-institucional.jpeg";

const values = [
  "Tradição",
  "Ciência",
  "Empatia",
  "União",
  "Biossegurança",
  "Trabalho em Equipe",
  "Acolhimento",
];

const differentials = [
  {
    title: "Décadas de Tradição e Inovação",
    text: "Liderança médica com mais de 54 anos de experiência clínica combinada às técnicas mais modernas e ao embasamento científico da odontologia.",
  },
  {
    title: "Visão Sistêmica e Preventiva",
    text: "Conexão real entre endocrinologia, medicina ortomolecular, desenvolvimento facial e reabilitação oral.",
  },
  {
    title: "Atendimento para Toda a Família",
    text: "Da prevenção na primeira infância ao acompanhamento metabólico, funcional e estético de adultos e idosos.",
  },
  {
    title: "Equipe de Excelência e Biossegurança",
    text: "Corpo clínico altamente especializado e suporte técnico dedicado a cada procedimento.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-28 md:py-40">
      <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-24 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <Reveal>
            <span className="eyebrow">Quem Somos</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Saúde integrada,
              <br />
              <em className="italic text-sand">sorrisos para toda a família.</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-foreground/75 font-light max-w-xl">
              <p>
                Na <strong className="font-medium text-foreground">Sense Medicina e Odontologia Integrada</strong>,
                acreditamos que a saúde bucal e o bem-estar sistêmico caminham juntos.
                Nossa estrutura foi planejada para oferecer um atendimento de excelência
                que conecta a Medicina e a Odontologia, cuidando do desenvolvimento
                infantil, da saúde metabólica e do sorriso de pacientes em todas as
                fases da vida.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 grid grid-cols-2 gap-8 max-w-md">
              <div>
                <div className="font-display text-4xl text-sand">54+</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-foreground/60">
                  Anos de tradição clínica
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
                alt="Fundadores da Sense"
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

      {/* Nossa História */}
      <div className="container-page mt-32 md:mt-44 grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="eyebrow">Nossa História e Abordagem Integrada</span>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="mt-6 font-display text-3xl md:text-4xl leading-[1.1]">
              Uma trajetória construída em <em className="italic text-sand">família</em>.
            </h3>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal delay={120}>
            <div className="space-y-5 text-base md:text-lg font-light leading-relaxed text-foreground/75">
              <p>
                A clínica começou com o consultório do{" "}
                <strong className="font-medium text-foreground">Dr. Guilherme Ruivo</strong>,
                com a proposta de oferecer um olhar aprofundado, humano e preventivo
                para a saúde de seus pacientes. Mais tarde, com a chegada da sua filha,
                a <strong className="font-medium text-foreground">Dra. Claudia Alves</strong>,
                o espaço passou a contar também com a odontologia, trazendo um cuidado
                dedicado ao desenvolvimento infantil, à respiração bucal e à prevenção
                de más oclusões.
              </p>
              <p>
                A Sense Medicina e Odontologia Integrada nasceu oficialmente quando se
                uniram ao consultório as cirurgiãs-dentistas{" "}
                <strong className="font-medium text-foreground">Dra. Cristiane Biasuz</strong>{" "}
                e <strong className="font-medium text-foreground">Dra. Carla Larentis</strong>.
                A partir dessa união de talentos e laços de confiança, o espaço se
                transformou em uma clínica completa, conectando o equilíbrio metabólico
                e hormonal à saúde, estética e reabilitação bucal de toda a família.
              </p>
              <p>
                Para garantir a máxima precisão e acolhimento em cada atendimento, a
                Sense conta com uma equipe de apoio fundamental:{" "}
                <strong className="font-medium text-foreground">Amanda S. Nogueira</strong>,
                técnica em enfermagem e especialista em instrumentação cirúrgica e
                análises clínicas, e{" "}
                <strong className="font-medium text-foreground">Yasmin Agnys Maia</strong>,
                auxiliar em saúde bucal. Hoje, reunimos medicina, odontologia e suporte
                multiprofissional sob o mesmo teto, promovendo saúde e bem-estar do
                público infantil ao adulto.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Diferenciais */}
      <div className="container-page mt-32 md:mt-44">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Diferenciais</span>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="mt-6 font-display text-3xl md:text-4xl leading-[1.1]">
              O que torna a Sense <em className="italic text-sand">única</em>.
            </h3>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border/60 bg-background/60 p-7 backdrop-blur-sm hover:border-sand/60 transition-colors">
                <h4 className="font-display text-xl leading-snug">{d.title}</h4>
                <p className="mt-3 text-sm font-light leading-relaxed text-foreground/70">
                  {d.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Missão, Visão, Valores */}
      <div className="container-page mt-32 md:mt-44 grid gap-10 md:grid-cols-3">
        <Reveal>
          <div>
            <span className="eyebrow">Missão</span>
            <p className="mt-5 font-light leading-relaxed text-foreground/75">
              Promover saúde e bem-estar integral por meio de uma abordagem médica
              e odontológica integrada, ética e humanizada.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div>
            <span className="eyebrow">Visão</span>
            <p className="mt-5 font-light leading-relaxed text-foreground/75">
              Ser referência em saúde multidisciplinar, medicina preventiva e ortopedia
              funcional, destacando-se pelo cuidado completo da família.
            </p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div>
            <span className="eyebrow">Valores</span>
            <ul className="mt-5 flex flex-wrap gap-2">
              {values.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-border/60 px-3.5 py-1.5 text-xs uppercase tracking-[0.14em] text-foreground/70"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
