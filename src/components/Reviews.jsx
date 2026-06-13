import client from "../data/client";
import useReveal from "../hooks/useReveal";

export default function Reviews() {
  const topRef = useReveal();
  return (
    <section id="avaliacoes" className="bg-off-white py-24 px-[6%]">
      <div className="max-w-6xl mx-auto">
        <div ref={topRef} className="reveal flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="text-center md:text-left">
            <div className="font-display font-light text-navy leading-none" style={{ fontSize: "84px" }}>
              5.0
            </div>
            <div className="text-gold text-xl mt-1">★★★★★</div>
            <div className="font-sans text-ink-soft text-sm mt-2">Google Maps</div>
          </div>
          <div className="hidden md:block w-px h-20 bg-gold-light" />
          <p className="font-display italic font-light text-navy text-2xl leading-snug max-w-xl">
            Profissional que cuida com técnica e com o coração — as famílias confiam, as crianças adoram.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {client.reviews.map((r, i) => (
            <ReviewCard key={i} review={r} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, delay }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal relative bg-white border border-navy/[0.08] rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/15"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span
        className="absolute top-2 right-6 font-display italic font-light text-gold-pale leading-none select-none"
        style={{ fontSize: "90px" }}
      >
        “
      </span>
      <div className="text-gold mb-4 relative">{"★".repeat(review.stars)}</div>
      <p className="font-sans font-light italic text-ink-soft leading-relaxed relative">{review.text}</p>
      <div className="flex items-center gap-3 mt-6">
        <span className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy font-sans font-semibold text-sm">
          {review.reviewer.charAt(0)}
        </span>
        <span className="font-sans font-medium text-navy text-sm">{review.reviewer}</span>
      </div>
    </div>
  );
}
