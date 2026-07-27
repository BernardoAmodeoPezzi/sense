import { useEffect, useState } from "react";
import logoMark from "@/assets/logo-mark.png";
import { openBooking } from "./BookingDialog";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre a Clínica", href: "#sobre" },
  { label: "Nossa Equipe", href: "#equipe" },
  { label: "Horários", href: "#horarios" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-3 shrink-0" aria-label="Sense — início">
          <img src={logoMark} alt="Sense" className="h-10 w-auto md:h-11" />
        </a>


        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.78rem] uppercase tracking-[0.18em] text-foreground/70 hover:text-sand transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openBooking}
            className="btn-primary hidden md:inline-flex text-[0.72rem]! px-5! py-2.5!"
          >
            Agendar Consulta
          </button>
          <button
            aria-label="Abrir menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-foreground transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-foreground transition-transform ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-page py-6 flex flex-col gap-4 bg-background/95 backdrop-blur-xl">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-foreground/80 py-2 border-b border-border/50"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openBooking();
            }}
            className="btn-primary mt-2 w-full"
          >
            Agendar Consulta
          </button>
        </div>
      </div>
    </header>
  );
}
