import { Reveal } from "./Reveal";
import { CONTACT } from "@/lib/team";

export function Location() {
  return (
    <section id="localizacao" className="relative py-28 md:py-40 bg-muted/40">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">Onde Estamos</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Moinhos de <em className="italic text-sand">Vento</em>.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 space-y-2 font-light text-foreground/80">
              <p className="text-lg">{CONTACT.addressLine1}</p>
              <p>{CONTACT.addressLine2}</p>
              <p className="text-sm text-foreground/60">{CONTACT.addressLine3}</p>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CONTACT.maps}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Como Chegar
              </a>
              <a
                href={CONTACT.maps}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Abrir no Google Maps
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[1.5rem] shadow-2xl aspect-[4/3] lg:aspect-[5/4]">
              <iframe
                title="Localização Sense — Moinhos de Vento"
                src="https://www.google.com/maps?q=R.%20Dr.%20Flor%C3%AAncio%20Ygartua%2C%2069%2C%20Porto%20Alegre&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.15) contrast(0.95)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
