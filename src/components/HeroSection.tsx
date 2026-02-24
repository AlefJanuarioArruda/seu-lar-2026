import ebookMockup from "@/assets/Minha_casa_minha_vida.png";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 text-sm font-medium backdrop-blur-sm border border-primary-foreground/20">
              📘 Ebook Atualizado 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-tight">
              Descubra Como Financiar Seu Imóvel pelo{" "}
              <span className="underline decoration-secondary decoration-4 underline-offset-4">
                Minha Casa Minha Vida
              </span>{" "}
              Mesmo com Renda Baixa
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 font-body leading-relaxed max-w-lg">
              Aprenda todas as regras atualizadas, faixas de renda e como conseguir aprovação mais rápida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://go.hotmart.com/W104579218X"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-gradient text-accent-foreground font-bold text-lg px-8 py-4 rounded-xl shadow-cta hover:scale-105 transition-all duration-300 text-center"
              >
                Quero Baixar o Ebook Agora
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-primary-foreground/70 text-sm font-body">
              <span className="flex items-center gap-1.5">✅ Acesso imediato</span>
              <span className="flex items-center gap-1.5">✅ Garantia 7 dias</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={ebookMockup}
              alt="Ebook Guia Completo do Minha Casa Minha Vida 2026"
              className="w-72 md:w-96 drop-shadow-2xl animate-float"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce hidden md:block">
          <ArrowDown size={28} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
