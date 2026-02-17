import { Home, Users, Briefcase, HelpCircle } from "lucide-react";

const audiences = [
  { icon: Home, text: "Pessoas que querem sair do aluguel" },
  { icon: Users, text: "Famílias buscando primeiro imóvel" },
  { icon: Briefcase, text: "Corretores que querem vender mais" },
  { icon: HelpCircle, text: "Quem quer entender subsídios e regras" },
];

const AudienceSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Para quem é</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            Para quem é esse Ebook?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {audiences.map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card border border-border"
            >
              <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <a.icon className="text-secondary" size={22} />
              </div>
              <p className="text-foreground font-semibold text-sm">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
