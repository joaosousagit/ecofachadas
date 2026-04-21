import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ecofachadas-logo.png";
import { COMPANY } from "@/lib/company";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Ecofachadas Lda" className="h-10 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-10 text-sm">
          <Link to="/#trabalho" className="text-foreground/70 hover:text-foreground transition link-underline">Trabalho</Link>
          <Link to="/projetos" className="text-foreground/70 hover:text-foreground transition link-underline">Projetos</Link>
          <Link to="/#servicos" className="text-foreground/70 hover:text-foreground transition link-underline">Serviços</Link>
          <Link to="/#estudio" className="text-foreground/70 hover:text-foreground transition link-underline">Estúdio</Link>
          <Link to="/#faq" className="text-foreground/70 hover:text-foreground transition link-underline">FAQ</Link>
          <Link to="/#contacto" className="text-foreground/70 hover:text-foreground transition link-underline">Contacto</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href={`tel:${COMPANY.phoneHref}`} className="hidden md:block editorial-num text-foreground/70 hover:text-primary transition">
            {COMPANY.phone}
          </a>
          <Button asChild className="rounded-none h-11 px-5 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/#contacto" className="flex items-center gap-2 editorial-num">
              Orçamento <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
