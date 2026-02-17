import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Esse ebook é atualizado?",
    a: "Sim! O ebook está totalmente atualizado com as regras vigentes do programa Minha Casa Minha Vida em 2026.",
  },
  {
    q: "Serve para qualquer cidade?",
    a: "Sim, as regras gerais se aplicam a todo o Brasil. Porém, valores de subsídio e limites podem variar por região.",
  },
  {
    q: "Posso usar sendo corretor?",
    a: "Com certeza! O ebook é ideal para corretores que querem dominar o programa e oferecer um atendimento mais qualificado.",
  },
  {
    q: "Como recebo o material?",
    a: "Após a confirmação do pagamento, você recebe o ebook em PDF diretamente no seu e-mail com acesso imediato.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6 shadow-card"
              >
                <AccordionTrigger className="text-foreground font-semibold text-sm hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
