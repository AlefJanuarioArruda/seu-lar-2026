import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppCapture = () => {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-20 hero-gradient">
      <div className="container">
        <div className="max-w-lg mx-auto text-center text-primary-foreground">
          <MessageCircle className="mx-auto mb-4" size={36} />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
            Receba uma prévia gratuita
          </h2>
          <p className="text-primary-foreground/80 font-body text-sm mb-8">
            Digite seu WhatsApp e receba um trecho do ebook gratuitamente.
          </p>

          {submitted ? (
            <div className="bg-primary-foreground/15 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <p className="text-primary-foreground font-bold text-lg">🎉 Enviado com sucesso!</p>
              <p className="text-primary-foreground/80 text-sm font-body mt-1">
                Em breve você receberá a prévia no seu WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-xl bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <button
                type="submit"
                className="cta-gradient text-accent-foreground font-bold px-6 py-3.5 rounded-xl shadow-cta hover:scale-105 transition-all duration-300 text-sm whitespace-nowrap"
              >
                Enviar Prévia
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCapture;
