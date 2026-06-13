import client from "../data/client";
import useReveal from "../hooks/useReveal";

export default function Services() {
  const headRef = useReveal();
  return (
    <section id="consultas" className="bg-navy py-24 px-[6%]">
      <div className="max-w-6xl mx-auto">
        <div ref={headRef} className="reveal text-center mb-16">
          <span className="inline-block font-sans font-semibold text-gold text-xs uppercase tracking-[0.22em] mb-5">
            Consultas
          </span>
          <h2 className="font-display font-light text-white text-5xl leading-[1.1] mb-5">
            Cuidado completo em <em className="text-gold-light italic font-light">cada etapa</em>
          </h2>
          <p className="font-sans font-light text-white/65 max-w-xl mx-auto">
            Do pré-natal à adolescência, atendimentos pensados para acompanhar o desenvolvimento da criança em todas as fases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {client.services.map((s, i) => (
            <Card key={i} service={s} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ service, delay }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal group relative bg-white/[0.05] border border-gold/20 rounded-2xl p-8 hover:bg-white/[0.09] hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/60 transition-all duration-300 overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-gold-light origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
      />
      <div className="w-12 h-12 rounded-xl bg-gold/15 group-hover:bg-gold/[0.28] flex items-center justify-center text-2xl mb-5 transition-colors">
        {service.icon}
      </div>
      <h3 className="font-display font-light text-white text-2xl mb-3">{service.title}</h3>
      <p className="font-sans font-light text-white/65 text-sm leading-relaxed">{service.description}</p>
    </div>
  );
}
