import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-20 section-alt">
      <div className="container">
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6 bg-card rounded-2xl p-8 shadow-card border border-border">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="text-secondary" size={32} />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-foreground mb-2">Garantia de 7 dias</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Se por qualquer motivo você não gostar do conteúdo, devolvemos 100% do seu dinheiro em até 7 dias após a compra. Sem burocracia, sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
