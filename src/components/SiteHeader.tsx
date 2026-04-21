import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ecofachadas-logo.png";
import { COMPANY } from "@/lib/company";

const SiteHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const scrollTo = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    if (location.pathname !== "/") {
      navigate("/");
      // wait for the home page to mount before scrolling
      setTimeout(scrollTo, 120);
    } else {
      scrollTo();
    }
  };

  const navItems = [
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
          <a
            href="/#trabalho"
            onClick={(e) => handleAnchor(e, "trabalho")}
            className="text-foreground/70 hover:text-foreground transition link-underline cursor-pointer"
          >
            Trabalho
          </a>
          <Link to="/projetos" className="text-foreground/70 hover:text-foreground transition link-underline">
            Projetos
          </Link>
          {navItems
            .filter((i) => i.hash !== "trabalho")
            .map((item) => (
              <a
                key={item.hash}
                href={`/#${item.hash}`}
                onClick={(e) => handleAnchor(e, item.hash)}
                className="text-foreground/70 hover:text-foreground transition link-underline cursor-pointer"
              >
                {item.label}
              </a>
            ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href={`tel:${COMPANY.phoneHref}`} className="hidden md:block editorial-num text-foreground/70 hover:text-primary transition">
            {COMPANY.phone}
          </a>
          <Button asChild className="rounded-none h-11 px-5 bg-primary hover:bg-primary/90 text-primary-foreground">
            <a
              href="/#contacto"
              onClick={(e) => handleAnchor(e, "contacto")}
              className="flex items-center gap-2 editorial-num cursor-pointer"
            >
              Orçamento <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
