import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Team } from "@/components/site/Team";
import { Hours } from "@/components/site/Hours";
import { Experience } from "@/components/site/Experience";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { BookingDialog } from "@/components/site/BookingDialog";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Sense — Medicina & Odontologia Integradas em Porto Alegre",
      },
      {
        name: "description",
        content:
          "Sense Medicina & Odontologia Integradas: atendimento médico e odontológico de excelência, tecnologia, conforto e cuidado humanizado em Porto Alegre.",
      },
      { property: "og:title", content: "Sense — Medicina & Odontologia Integradas em Porto Alegre" },
      {
        property: "og:description",
        content:
          "Sense Medicina & Odontologia Integradas: atendimento médico e odontológico de excelência, tecnologia, conforto e cuidado humanizado em Porto Alegre.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Sense — Medicina & Odontologia Integradas",
          telephone: "+55 51 3222-3198",
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. Dr. Florêncio Ygartua, 69 – Sala 305",
            addressLocality: "Porto Alegre",
            addressRegion: "RS",
            postalCode: "90430-010",
            addressCountry: "BR",
          },
          openingHours: "Mo-Fr 08:30-18:00",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Experience />
        <Hours />
        <Location />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <BookingDialog />
    </div>
  );
}
