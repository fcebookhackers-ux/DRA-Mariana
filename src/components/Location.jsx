import client from "../data/client";
import useReveal from "../hooks/useReveal";

export default function Location() {
  const headRef = useReveal();
  const mapRef = useReveal();
  const { lat, lng } = client.coordinates;
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

  return (
    <section id="localizacao" className="bg-navy-mid py-24 px-[6%]">
      <div className="max-w-6xl mx-auto">
        <div ref={headRef} className="reveal text-center mb-14">
          <span className="inline-block font-sans font-semibold text-gold text-xs uppercase tracking-[0.22em] mb-5">
            Localização
          </span>
          <h2 className="font-display font-light text-white text-5xl">
            Atendimento em <em className="text-gold-light italic font-light">Ribeirão Preto</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {client.locationCards.map((c, i) => (
              <Card key={i} card={c} delay={i * 90} />
            ))}
          </div>
          <div
            ref={mapRef}
            className="reveal reveal-right overflow-hidden shadow-2xl shadow-navy/60"
            style={{ borderRadius: "18px" }}
          >
            <iframe
              src={mapSrc}
              title="Mapa do consultório"
              className="w-full h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ card, delay }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal bg-white/[0.06] border border-gold/20 rounded-xl p-5 flex items-start gap-4 transition-all hover:bg-white/10 hover:-translate-y-0.5"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-11 h-11 rounded-xl bg-gold/[0.18] flex items-center justify-center text-xl shrink-0">
        {card.icon}
      </div>
      <div>
        <div className="font-sans font-semibold text-gold text-[10px] uppercase tracking-[0.2em]">{card.label}</div>
        <div className="font-sans font-medium text-white mt-1">{card.value}</div>
        <div className="font-sans font-light text-white/60 text-sm">{card.sub}</div>
      </div>
    </div>
  );
}
