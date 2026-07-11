import { useEffect, useState } from "react";
import { team, type Doctor, CONTACT } from "@/lib/team";
import { Reveal } from "./Reveal";

export function Team() {
  const [active, setActive] = useState<Doctor | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section
      id="equipe"
      className="relative py-28 md:py-40"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--sand) 10%, transparent) 0%, transparent 60%)",
      }}
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Nossa Equipe</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Profissionais que <em className="italic text-sand">fazem sentido</em>.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-base md:text-lg font-light text-foreground/70 max-w-lg">
              Experiência, atualização constante e um olhar humano para cada paciente.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-14 grid-cols-2 lg:grid-cols-4">
          {team.map((d, i) => (
            <Reveal key={d.slug} delay={i * 100}>
              <button
                onClick={() => setActive(d)}
                className="group text-left w-full"
                aria-label={`Abrir perfil de ${d.name}`}
              >
                <div className="relative overflow-hidden rounded-[1.25rem]">
                  <img
                    src={d.photo}
                    alt={d.name}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, color-mix(in oklab, var(--slate-blue) 70%, transparent))",
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-xs uppercase tracking-[0.2em]">Ver perfil</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-xl leading-tight">{d.name}</h3>
                  <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-sand">
                    {d.specialty}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <DoctorModal doctor={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function DoctorModal({ doctor, onClose }: { doctor: Doctor; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={doctor.name}
    >
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-md fade-in-up"
        style={{ animationDuration: "0.4s" }}
        onClick={onClose}
      />
      <div
        className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl bg-background shadow-2xl fade-in-up"
        style={{ animationDuration: "0.5s" }}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-background/90 backdrop-blur border border-border hover:bg-sand hover:text-white hover:border-sand transition-colors"
        >
          ×
        </button>
        <div className="grid md:grid-cols-5 max-h-[92vh] overflow-y-auto">
          <div className="md:col-span-2">
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="h-64 md:h-full w-full object-cover md:aspect-auto aspect-[4/3]"
            />
          </div>
          <div className="md:col-span-3 p-8 md:p-12">
            <span className="eyebrow">{doctor.specialty}</span>
            <h3 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
              {doctor.name}
            </h3>
            <div className="mt-6 space-y-4 text-foreground/75 font-light leading-relaxed text-[0.95rem]">
              {doctor.bio.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8"
            >
              Agendar com {doctor.name.split(" ")[0]} {doctor.name.split(" ")[1]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
