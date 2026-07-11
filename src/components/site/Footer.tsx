import logo from "@/assets/logo-mark.png";
import { CONTACT } from "@/lib/team";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "./SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 pt-20 pb-10">
      <div className="container-page grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Sense" className="h-10 w-auto" />
            <span className="font-display text-xl">Sense</span>
          </div>
          <p className="mt-4 text-sm font-light text-foreground/70 max-w-xs">
            Sense — Medicina & Odontologia Integradas
          </p>
        </div>
        <div>
          <div className="eyebrow">Endereço</div>
          <div className="mt-4 text-sm font-light text-foreground/75 space-y-1">
            <div>{CONTACT.addressLine1}</div>
            <div>{CONTACT.addressLine2}</div>
            <div className="text-foreground/55">{CONTACT.addressLine3}</div>
          </div>
        </div>
        <div>
          <div className="eyebrow">Contato</div>
          <div className="mt-4 space-y-2 text-sm font-light">
            <a href={`tel:${CONTACT.phoneTel}`} className="block hover:text-sand transition-colors">
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-sand transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-sand transition-colors"
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-sand transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="container-page mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs uppercase tracking-[0.2em] text-foreground/50">
        <div>© {year} Sense. Direitos reservados.</div>
        <div>Porto Alegre / RS</div>
      </div>
    </footer>
  );
}
