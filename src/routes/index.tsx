import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import About from "../components/About";
import Services from "../components/Services";
import PhotoBanner from "../components/PhotoBanner";
import Reviews from "../components/Reviews";
import Location from "../components/Location";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Mariana dos Santos — Pediatra em Ribeirão Preto, SP" },
      {
        name: "description",
        content:
          "Pediatra em Ribeirão Preto-SP. Atendimento humanizado do recém-nascido à adolescência. Consultas particulares com horário marcado.",
      },
      { property: "og:title", content: "Dra. Mariana dos Santos — Pediatra" },
      {
        property: "og:description",
        content: "Atendimento pediátrico humanizado em Ribeirão Preto-SP.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <PhotoBanner />
      <Reviews />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
}
