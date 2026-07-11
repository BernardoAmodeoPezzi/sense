import { Reveal } from "./Reveal";
import { CONTACT } from "@/lib/team";

const items = [
  {
    label: "Instagram",
    hint: "@sense.medicinaeodonto",
    href: CONTACT.instagram,
    external: true,
  },
  { label: "Facebook", hint: "Sense Medicina & Odontologia", href: CONTACT.facebook, external: true },
  { label: "Agendar Horário", hint: "WhatsApp — resposta imediata", href: CONTACT.whatsapp, external: true },
  { label: "Localização", hint: "Google Maps", href: CONTACT.maps, external: true },
];

export function Contact() {
  return (
    <section id="contato" className="relative py-28 md:py-40">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Contato</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Vamos <em className="italic text-sand">conversar</em>.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="mt-8 inline-block font-display text-3xl md:text-4xl text-foreground hover:text-sand transition-colors"
            >
              {CONTACT.phone}
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 80}>
              <a
                href={it.href}
                target={it.external ? "_blank" : undefined}
                rel={it.external ? "noreferrer" : undefined}
                className="group block h-full bg-background p-8 md:p-10 transition-colors duration-500 hover:bg-sand/[0.08]"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-foreground/50">
                  0{i + 1}
                </div>
                <div className="mt-6 font-display text-2xl md:text-3xl group-hover:text-sand transition-colors">
                  {it.label}
                </div>
                <div className="mt-3 text-sm text-foreground/60 font-light">{it.hint}</div>
                <div className="mt-8 text-sand text-xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  →
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
