const stats = [
  { n: "5.0", l: "Nota no Google" },
  { n: "0–18", l: "Anos atendidos" },
  { n: "6+", l: "Tipos de consulta" },
  { n: "❤️", l: "Cuidado humanizado" },
];

export default function StatsBar() {
  return (
    <section className="bg-navy py-12 px-[6%]">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`text-center px-4 ${i < stats.length - 1 ? "md:border-r md:border-gold/20" : ""}`}
          >
            <div className="font-display font-light text-gold" style={{ fontSize: "52px", lineHeight: 1 }}>
              {s.n}
            </div>
            <div className="font-sans text-white/70 text-xs uppercase tracking-[0.18em] mt-3">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
