import client from "../data/client";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/20 py-9 px-[6%]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="font-display text-gold text-xl font-light">{client.name}</div>
        <div className="font-sans font-light text-white/55 text-sm">Pediatra — Ribeirão Preto, SP</div>
        <div className="font-sans font-light text-white/55 text-sm">© 2026 · Todos os direitos reservados</div>
      </div>
    </footer>
  );
}
