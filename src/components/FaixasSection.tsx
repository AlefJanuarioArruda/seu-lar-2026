const faixas = [
  {
    label: "Faixa 1",
    color: "bg-faixa1",
    renda: "Até R$ 2.640",
    items: ["Maior subsídio do governo", "Parcelas reduzidas", "Taxas de juros mínimas"],
  },
  {
    label: "Faixa 2",
    color: "bg-faixa2",
    renda: "R$ 2.640 a R$ 4.400",
    items: ["Subsídio parcial", "Juros menores que financiamento comum", "Condições facilitadas"],
  },
  {
    label: "Faixa 3",
    color: "bg-faixa3",
    renda: "R$ 4.400 a R$ 8.000",
    items: ["Menos subsídio", "Financiamento facilitado", "Taxas melhores que mercado"],
  },
];

const FaixasSection = () => {
  return (
    <section className="py-20 md:py-28 section-alt">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Faixas</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            Faixas do Minha Casa Minha Vida
          </h2>
          <p className="text-muted-foreground font-body mt-3">Conheça cada faixa e descubra onde você se encaixa</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {faixas.map((f, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className={`${f.color} text-primary-foreground p-6 text-center`}>
                <span className="text-sm font-semibold uppercase tracking-wider opacity-80">{f.label}</span>
                <p className="text-2xl font-extrabold mt-1">Renda familiar</p>
                <p className="text-xl font-bold mt-1">{f.renda}</p>
              </div>
              <div className="p-6 space-y-3">
                {f.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="text-secondary mt-0.5 text-lg">✓</span>
                    <span className="text-foreground font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs font-body mt-8">
          * Valores podem variar conforme região e atualização do programa.
        </p>
      </div>
    </section>
  );
};

export default FaixasSection;
