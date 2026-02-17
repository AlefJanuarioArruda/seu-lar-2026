const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container text-center">
        <p className="text-background/90 font-bold text-lg mb-1">Guia MCMV</p>
        <p className="text-background/50 font-body text-xs mb-6">
          Seu guia completo para o programa Minha Casa Minha Vida.
        </p>
        <div className="flex justify-center gap-6 text-background/40 font-body text-xs mb-6">
          <a href="#" className="hover:text-background/70 transition-colors">Contato</a>
          <a href="#" className="hover:text-background/70 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-background/70 transition-colors">Política de Privacidade</a>
        </div>
        <p className="text-background/30 font-body text-[11px]">
          © 2026 Guia MCMV. Todos os direitos reservados. Este produto não possui vínculo com o Governo Federal.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
