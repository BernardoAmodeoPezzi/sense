import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M14.5 8.5h2V5.5h-2.4c-1.9 0-3.1 1.3-3.1 3.2v2.3H8.5v3h2.5V21h3v-7h2.3l.5-3H14v-1.8c0-.5.2-.7.7-.7Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M4 20l1.2-3.8A7.5 7.5 0 1 1 8 19.4L4 20Z" />
      <path d="M9 9.5c.2 1.4 1.1 2.9 2.3 4 1.2 1.2 2.7 2.1 4.2 2.3.5.1 1-.3 1.2-.8l.2-.6c.1-.4-.1-.9-.5-1.1l-1.3-.6c-.3-.2-.7-.1-1 .1l-.4.4c-1-.5-1.9-1.4-2.4-2.4l.4-.4c.2-.3.3-.7.1-1L11.2 8c-.2-.4-.7-.6-1.1-.5l-.6.2c-.5.2-.8.7-.7 1.2l.2.6Z" />
    </svg>
  );
}
