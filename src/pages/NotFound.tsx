import { Link } from "react-router-dom";
import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: rota inexistente:", window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO title="Página não encontrada — Ecofachadas" description="A página que procurava não existe ou foi movida." path="/404" />
      <SiteHeader />
      <main className="flex-1 container py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="editorial-num text-muted-foreground mb-4">Erro 404</div>
          <h1 className="font-display text-7xl md:text-9xl tracking-tight leading-[0.9]">
            Esta página <span className="italic-serif text-accent">não existe</span>.
          </h1>
          <p className="mt-8 text-foreground/70 text-lg max-w-md">
            Pode ter sido removida, renomeada ou nunca existiu. Vamos levá-lo de volta para terreno seguro.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild className="rounded-none h-14 px-8 bg-foreground text-background hover:bg-foreground/90">
              <Link to="/" className="editorial-num">Voltar ao início</Link>
            </Button>
            <Button asChild variant="ghost" className="rounded-none h-14 px-8">
              <Link to="/projetos" className="editorial-num border-b border-foreground/40 hover:border-foreground">Ver projetos</Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="font-display text-[14rem] md:text-[18rem] leading-none text-accent/20 select-none text-center">404</div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default NotFound;
