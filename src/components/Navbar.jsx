import { useEffect, useState } from "react";
import client from "../data/client";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/[0.97] backdrop-blur-md border-b border-gold/30"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-[6%] py-5">
        <a href="#" className="font-display text-white text-2xl font-light tracking-wide">
          {client.name}
        </a>
        <nav className="hidden md:flex items-center gap-9 text-white/85 font-sans text-sm">
          <a href="#sobre" className="hover:text-gold-light transition-colors">Sobre</a>
          <a href="#consultas" className="hover:text-gold-light transition-colors">Consultas</a>
          <a href="#avaliacoes" className="hover:text-gold-light transition-colors">Avaliações</a>
          <a href="#localizacao" className="hover:text-gold-light transition-colors">Localização</a>
        </nav>
        <a
          href={client.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-navy font-sans font-medium text-sm px-6 py-2.5 rounded-full hover:bg-gold-light transition-colors"
        >
          Agendar consulta
        </a>
      </div>
    </header>
  );
}
