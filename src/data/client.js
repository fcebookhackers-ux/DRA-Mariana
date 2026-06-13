// Editable client data — change values here to update the entire site.
const client = {
  name: "Dra. Mariana dos Santos",
  specialty: "Pediatria",
  location: "Ribeirão Preto, SP",
  coordinates: { lat: -21.192145, lng: -47.8043446 },

  phone: "(16) 99156-2079",
  phoneHref: "tel:+5516991562079",
  // TODO: replace with real WhatsApp number (E.164, no symbols)
  whatsapp: "5516900000000",
  whatsappHref: "https://wa.link/bj1img",

  // TODO: replace with real address
  address: "Rua Exemplo, 123 — Jardim Sumaré, Ribeirão Preto/SP",
  hours: "Segunda a sexta · 09:00 às 17:00 · Sábado e domingo fechado",

  googleMapsRating: "5.0",

  services: [
    { icon: "🤱", title: "Consulta pré-natal", description: "Orientações para os pais antes da chegada do bebê, com foco em amamentação e preparo." },
    { icon: "👶", title: "Puericultura", description: "Acompanhamento do crescimento e desenvolvimento saudável do bebê, mês a mês." },
    { icon: "🤒", title: "Pediatria clínica", description: "Diagnóstico e tratamento das principais doenças da infância com cuidado individualizado." },
    { icon: "🍎", title: "Nutrição infantil", description: "Orientação alimentar adequada para cada fase, da introdução alimentar à adolescência." },
    { icon: "🧠", title: "Desenvolvimento infantil", description: "Avaliação de marcos motores, cognitivos e comportamentais ao longo da infância." },
    { icon: "🧑", title: "Pediatria do adolescente", description: "Acompanhamento das mudanças físicas e emocionais durante a adolescência." },
  ],

  credentials: [
    { icon: "🎓", title: "Formação médica", subtitle: "Graduação em Medicina com residência em Pediatria" },
    { icon: "🏥", title: "Experiência hospitalar", subtitle: "Atuação em unidades de referência em pediatria" },
    { icon: "📚", title: "Atualização constante", subtitle: "Participação em congressos e cursos de aperfeiçoamento" },
    { icon: "❤️", title: "Atendimento humanizado", subtitle: "Escuta atenta às famílias e cuidado com cada criança" },
  ],

  reviews: [
    { stars: 5, text: "Atendimento impecável, minha filha adorou a doutora. Explica tudo com paciência e carinho.", reviewer: "Ana P." },
    { stars: 5, text: "Profissional excelente, muito atenciosa e dedicada. Recomendo de olhos fechados.", reviewer: "Carla M." },
    { stars: 5, text: "Pediatra que realmente cuida. Meu filho se sente seguro e tranquilo nas consultas.", reviewer: "Juliana R." },
  ],

  locationCards: [
    { icon: "📍", label: "Endereço", value: "Ribeirão Preto, SP", sub: "Atendimento em consultório" },
    {
      icon: "🕐",
      label: "Horários",
      value: "Segunda a sexta · 09:00 às 17:00",
      sub: "Sábado e domingo fechado",
    },
    { icon: "💳", label: "Atendimento", value: "Particular", sub: "Consulta com horário marcado" },
    { icon: "📱", label: "Agendamento", value: "WhatsApp & telefone", sub: "Resposta rápida" },
  ],

  unsplashHero: "/images/hero-pediatra-consulta.jpg",
  unsplashAbout: "/images/dra-mariana-sobre.jpg",
  unsplashBanner: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80",
};

export default client;
