import { ShieldCheck, BookOpen, Gift } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="oferta" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-3xl overflow-hidden shadow-card-lg border border-border">
            {/* Header */}
            <div className="pricing-gradient text-primary-foreground p-8 text-center">
              <span className="inline-block px-3 py-1 bg-primary-foreground/15 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                Oferta Especial
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold">Ebook Completo + Bônus</h2>
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-secondary shrink-0" size={18} />
                  <span className="text-foreground font-body text-sm">Guia completo com todas as faixas e regras</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gift className="text-secondary shrink-0" size={18} />
                  <span className="text-foreground font-body text-sm">Bônus: Checklist de documentos</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-secondary shrink-0" size={18} />
                  <span className="text-foreground font-body text-sm">Garantia de 7 dias</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-muted-foreground line-through text-lg">De: R$ 97,00</p>
                <p className="text-4xl font-extrabold text-foreground mt-1">
                  R$ 19<span className="text-2xl">,90</span>
                </p>
                <p className="text-muted-foreground text-xs mt-1">Pagamento único • Acesso vitalício</p>
              </div>

              <a
                href="https://go.hotmart.com/W104579218X"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full cta-gradient text-accent-foreground font-bold text-lg py-4 rounded-xl shadow-cta hover:scale-[1.02] transition-all duration-300 text-center"
              >
                Comprar Agora com Desconto
              </a>

              <p className="text-muted-foreground text-xs mt-4 font-body">🔒 Pagamento 100% seguro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
