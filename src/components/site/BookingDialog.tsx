import { useEffect, useState } from "react";
import { BOOKING_OPTIONS } from "@/lib/team";
import { WhatsAppIcon } from "./SocialIcons";

const EVENT = "sense:open-booking";

export function openBooking() {
  window.dispatchEvent(new CustomEvent(EVENT));
}

export function BookingDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(EVENT, onOpen);
    return () => window.removeEventListener(EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Agendar consulta"
    >
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-md fade-in-up"
        style={{ animationDuration: "0.3s" }}
        onClick={() => setOpen(false)}
      />
      <div
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-background p-8 md:p-12 shadow-2xl fade-in-up"
        style={{ animationDuration: "0.4s" }}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-border bg-background/90 hover:bg-sand hover:text-white hover:border-sand transition-colors"
        >
          ×
        </button>

        <span className="eyebrow">Agendamento</span>
        <h3 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
          Com quem deseja <em className="italic text-sand">agendar</em>?
        </h3>
        <p className="mt-3 text-sm font-light text-foreground/65">
          Escolha uma das opções abaixo para falar diretamente com a recepção
          responsável.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {BOOKING_OPTIONS.map((opt) => (
            <div
              key={opt.id}
              className="flex h-full flex-col rounded-2xl border border-border/70 p-6 transition-colors hover:border-sand"
            >
              <div className="font-display text-lg leading-snug">{opt.doctors}</div>
              <a
                href={`tel:${opt.phoneTel}`}
                className="mt-3 text-sm text-foreground/70 hover:text-sand transition-colors"
              >
                {opt.phone}
              </a>
              <a
                href={opt.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary mt-6 inline-flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Agendar no WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
