import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Compradora",
    text: "Consegui financiar meu apartamento com subsídio e não sabia que tinha direito. O ebook me explicou tudo de forma simples!",
  },
  {
    name: "Carlos R.",
    role: "Corretor de Imóveis",
    text: "Sou corretor e esse ebook me ajudou a explicar tudo pros clientes. Minhas vendas aumentaram desde então.",
  },
  {
    name: "Fernanda L.",
    role: "Compradora",
    text: "Estava perdida com tanta informação na internet. O guia organizou tudo e em uma semana já dei entrada no meu imóvel.",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 md:py-28 section-alt">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            O que dizem nossos leitores
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl p-7 shadow-card border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground font-body text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div>
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
