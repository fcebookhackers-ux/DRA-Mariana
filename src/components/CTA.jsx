import client from "../data/client";
import useReveal from "../hooks/useReveal";

export default function CTA() {
  const ref = useReveal();
  return (
    <section
      id="contato"
      className="relative overflow-hidden py-24 px-[6%]"
      style={{ background: "linear-gradient(135deg, #0D1F3C, #162B52)" }}
    >
      <span className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl pointer-events-none" />
      <span className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      <div ref={ref} className="reveal relative z-10 text-center max-w-3xl mx-auto">
        <span className="inline-block font-sans font-semibold text-gold text-xs uppercase tracking-[0.22em] mb-5">
          Agende sua consulta
        </span>
        <h2
          className="font-display font-light text-white leading-[1.1]"
          style={{ fontSize: "clamp(36px,5vw,60px)" }}
        >
          Cuide da saúde do seu filho <em className="text-gold-light italic font-light">com quem entende</em>
        </h2>
        <p className="font-sans font-light text-white/65 mt-6 max-w-lg mx-auto">
          Atendimento particular, com horário marcado e tempo dedicado para a sua família.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={client.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-sans font-medium px-7 py-3.5 rounded-full hover:brightness-110 transition-all"
            style={{ boxShadow: "0 10px 30px -8px rgba(37,211,102,0.55)" }}
          >
            💬 WhatsApp
          </a>
          <a
            href={client.phoneHref}
            className="bg-white/[0.08] text-white font-sans font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-gold transition-colors"
          >
            📞 Ligar agora
          </a>
        </div>
      </div>
    </section>
  );
}
