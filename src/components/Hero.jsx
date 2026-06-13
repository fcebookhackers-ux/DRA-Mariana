import { useEffect, useRef } from "react";
import client from "../data/client";
import useReveal from "../hooks/useReveal";

export default function Hero() {
  const canvasRef = useRef(null);
  const headingRef = useReveal();
  const subRef = useReveal();
  const ctaRef = useReveal();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.6,
      s: Math.random() * 0.4 + 0.15,
      a: Math.random() * 0.5 + 0.2,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,169,110,${p.a})`;
        ctx.fill();
        p.y -= p.s;
        if (p.y < -5) {
          p.y = canvas.height + 5;
          p.x = Math.random() * canvas.width;
        }
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={client.unsplashHero}
        alt="Pediatra cuidando de criança"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(13,31,60,0.93), rgba(22,43,82,0.60))",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 max-w-xl pt-32 pb-20 px-[6%] md:mx-auto md:px-8">
        <div ref={headingRef} className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-7 h-px bg-gold" />
            <span className="text-gold font-sans font-semibold text-xs uppercase tracking-[0.2em]">
              Pediatra — Ribeirão Preto, SP
            </span>
          </div>
          <h1
            className="font-display font-light text-white leading-[1.05]"
            style={{ fontSize: "clamp(44px,6vw,78px)" }}
          >
            Cuidado <em className="text-gold-light italic font-light">dedicado</em> para cada fase da infância
          </h1>
        </div>

        <p
          ref={subRef}
          className="reveal mt-8 font-sans font-light text-white/90 max-w-md leading-relaxed"
          style={{ transitionDelay: "150ms" }}
        >
          Atendimento pediátrico humanizado, do recém-nascido à adolescência. Consultas particulares com horário marcado.
        </p>

        <div ref={ctaRef} className="reveal mt-10 flex flex-wrap gap-4" style={{ transitionDelay: "300ms" }}>
          <a
            href="#contato"
            className="bg-gold text-navy font-sans font-medium px-7 py-3.5 rounded-full hover:bg-gold-light transition-colors"
          >
            Agendar consulta →
          </a>
          <a
            href="#sobre"
            className="border border-white/60 text-white font-sans font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
          >
            Conhecer a médica
          </a>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-10 right-[6%] flex-col gap-3 z-10">
        {[
          { t: "⭐ 5.0", s: "Google Maps" },
          { t: "👶 Pediatria", s: "0 a 18 anos" },
          { t: "📍 Ribeirão Preto", s: "São Paulo SP" },
        ].map((b, i) => (
          <div
            key={i}
            className="float-anim bg-white/[0.07] backdrop-blur-md border border-gold/40 rounded-2xl p-4 min-w-[200px]"
            style={{ animationDelay: `${i * 0.6}s` }}
          >
            <div className="font-display text-white text-xl font-light">{b.t}</div>
            <div className="font-sans text-white/65 text-xs mt-1">{b.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
