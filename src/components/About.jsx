import client from "../data/client";
import useReveal from "../hooks/useReveal";

export default function About() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section id="sobre" className="bg-white py-24 px-[6%]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div ref={leftRef} className="reveal reveal-left relative">
          <div
            className="absolute -bottom-6 -right-6 w-full h-full border-2 border-navy/50 opacity-50"
            style={{ borderRadius: "4px 56px 4px 56px" }}
          />
          <div className="relative" style={{ aspectRatio: "4/5" }}>
            <img
              src={client.unsplashAbout}
              alt="Dra. Mariana dos Santos"
              className="w-full h-full object-cover shadow-2xl shadow-navy/40"
              style={{ borderRadius: "4px 56px 4px 56px" }}
            />
            <div className="absolute -top-5 -left-5 bg-navy border border-gold rounded-xl px-5 py-4 shadow-xl">
              <div className="font-display text-gold text-3xl font-light leading-none">5.0 ⭐</div>
              <div className="font-sans text-white/70 text-xs mt-1">Avaliação no Google</div>
            </div>
          </div>
        </div>

        <div ref={rightRef} className="reveal reveal-right">
          <span className="inline-block font-sans font-semibold text-gold text-xs uppercase tracking-[0.22em] mb-5">
            Sobre a médica
          </span>
          <h2 className="font-display font-light text-navy text-5xl leading-[1.1] mb-7">
            Dra. Mariana <em className="text-gold italic font-light">dos Santos</em>
          </h2>
          <div className="space-y-4 font-sans font-light text-ink-soft leading-relaxed">
            <p>
              Pediatra dedicada ao acompanhamento integral da saúde infantil em Ribeirão Preto. Atende crianças do recém-nascido à adolescência com uma abordagem humanizada que escuta as famílias.
            </p>
            <p>
              Sua prática une rigor técnico e atenção emocional — porque cuidar de uma criança é também cuidar de quem a ama. Cada consulta é tempo dedicado, sem pressa.
            </p>
            <p>
              Atendimento particular, com horário marcado e ambiente acolhedor para que pais e filhos se sintam à vontade desde o primeiro encontro.
            </p>
          </div>

          <ul className="mt-9 space-y-3">
            {client.credentials.map((c, i) => (
              <li
                key={i}
                className="bg-off-white border-l-[3px] border-gold rounded-xl p-4 flex items-start gap-4 transition-all hover:translate-x-1 hover:shadow-lg hover:shadow-gold/20"
              >
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <div className="font-sans font-semibold text-navy text-sm">{c.title}</div>
                  <div className="font-sans font-light text-ink-soft text-sm">{c.subtitle}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
