import client from "../data/client";

export default function PhotoBanner() {
  return (
    <section className="relative h-[420px] overflow-hidden flex items-center justify-center">
      <img src={client.unsplashBanner} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(13,31,60,0.88), rgba(22,43,82,0.75))" }}
      />
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h2
          className="font-display font-light text-white leading-[1.15]"
          style={{ fontSize: "clamp(30px,4.5vw,54px)" }}
        >
          Cada criança é <em className="text-gold-light italic font-light">única</em> — e merece atenção única
        </h2>
        <p className="mt-5 font-sans font-light text-white/80 max-w-lg mx-auto">
          Consultas com tempo dedicado, escuta atenta e um plano de cuidado pensado para a sua família.
        </p>
        <a
          href={client.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-gold text-navy font-sans font-medium px-7 py-3.5 rounded-full hover:bg-gold-light transition-colors"
        >
          Agendar agora →
        </a>
      </div>
    </section>
  );
}
