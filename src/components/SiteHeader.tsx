import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import logo from "@/assets/ecofachadas-logo.png";
import { COMPANY } from "@/lib/company";

const SiteHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setOpen(false);
    const scrollTo = () => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollTo, 120);
    } else {
      scrollTo();
    }
  };

  const anchors = [
    { label: "Trabalho", hash: "trabalho" },
    { label: "Serviços", hash: "servicos" },
    { label: "Estúdio", hash: "estudio" },
    { label: "FAQ", hash: "faq" },
    { label: "Contacto", hash: "contacto" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Ecofachadas Lda" className="h-14 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-sm">
          <a href="/#trabalho" onClick={(e) => handleAnchor(e, "trabalho")} className="text-foreground/70 hover:text-foreground transition link-underline cursor-pointer">Trabalho</a>
          <Link to="/projetos" className="text-foreground/70 hover:text-foreground transition link-underline">Projetos</Link>
          <a href="/#servicos" onClick={(e) => handleAnchor(e, "servicos")} className="text-foreground/70 hover:text-foreground transition link-underline cursor-pointer">Serviços</a>
          <a href="/#estudio" onClick={(e) => handleAnchor(e, "estudio")} className="text-foreground/70 hover:text-foreground transition link-underline cursor-pointer">Estúdio</a>
          <a href="/#faq" onClick={(e) => handleAnchor(e, "faq")} className="text-foreground/70 hover:text-foreground transition link-underline cursor-pointer">FAQ</a>
          <a href="/#contacto" onClick={(e) => handleAnchor(e, "contacto")} className="text-foreground/70 hover:text-foreground transition link-underline cursor-pointer">Contacto</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href={`tel:${COMPANY.phoneHref}`} className="hidden md:block editorial-num text-foreground/70 hover:text-primary transition">
            {COMPANY.phone}
          </a>
          <Button asChild className="hidden sm:inline-flex rounded-none h-11 px-5 bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="/#contacto" onClick={(e) => handleAnchor(e, "contacto")} className="flex items-center gap-2 editorial-num cursor-pointer">
              Orçamento <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir menu"
                className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-border hover:bg-muted transition"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md bg-background border-l border-border p-0 flex flex-col [&>button]:hidden">
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
              <SheetDescription className="sr-only">Navegue pelas secções do site Ecofachadas</SheetDescription>
              <div className="flex items-center justify-between h-20 px-6 border-b border-border shrink-0">
                <img src={logo} alt="Ecofachadas Lda" className="h-12 w-auto" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="inline-flex items-center justify-center w-11 h-11 hover:bg-muted transition border border-border"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <nav className="flex flex-col px-6 py-6">
                  {anchors.slice(0, 1).map((a) => (
                    <a key={a.hash} href={`/#${a.hash}`} onClick={(e) => handleAnchor(e, a.hash)} className="font-display text-3xl py-4 border-b border-border hover:text-accent transition cursor-pointer">
                      {a.label}
                    </a>
                  ))}
                  <Link to="/projetos" onClick={() => setOpen(false)} className="font-display text-3xl py-4 border-b border-border hover:text-accent transition">
                    Projetos
                  </Link>
                  {anchors.slice(1).map((a) => (
                    <a key={a.hash} href={`/#${a.hash}`} onClick={(e) => handleAnchor(e, a.hash)} className="font-display text-3xl py-4 border-b border-border hover:text-accent transition cursor-pointer">
                      {a.label}
                    </a>
                  ))}
                </nav>
                <div className="px-6 pb-8 pt-2 space-y-4">
                  <a href={`tel:${COMPANY.phoneHref}`} className="block editorial-num text-foreground/70 hover:text-accent transition">
                    {COMPANY.phone}
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="block editorial-num text-foreground/70 hover:text-accent transition break-all">
                    {COMPANY.email}
                  </a>
                  <Button asChild className="w-full rounded-none h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href="/#contacto" onClick={(e) => handleAnchor(e, "contacto")} className="flex items-center justify-center gap-2 editorial-num">
                      Pedir orçamento <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
