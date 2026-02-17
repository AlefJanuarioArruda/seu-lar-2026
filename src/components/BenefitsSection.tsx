import { BookOpen, Calculator, CheckCircle, TrendingUp, Users } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Regras Atualizadas",
    description: "Entenda como funciona o Minha Casa Minha Vida atualizado em 2026",
  },
  {
    icon: Users,
    title: "Faixas de Renda",
    description: "Veja qual faixa de renda você se encaixa e seus benefícios",
  },
  {
    icon: Calculator,
    title: "Simulação de Valores",
    description: "Saiba quanto pode financiar e quanto vai pagar por mês",
  },
  {
    icon: TrendingUp,
    title: "Aprovação Rápida",
    description: "Descubra como aumentar suas chances de aprovação no programa",
  },
  {
    icon: CheckCircle,
    title: "Para Todos",
    description: "Ideal para compradores e corretores imobiliários",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Benefícios</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            O que você vai aprender com esse Ebook
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-7 shadow-card hover:shadow-card-lg transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center mb-4">
                <b.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
