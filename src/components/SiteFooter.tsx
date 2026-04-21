import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { COMPANY } from "@/lib/company";

const SiteFooter = () => (
  <footer className="bg-foreground text-background border-t border-background/15">
    <div className="container py-12 grid md:grid-cols-3 gap-8 text-sm">
      <div className="space-y-2">
        <div className="flex items-center gap-2 editorial-num text-background/80">
          <Leaf className="w-4 h-4 text-accent" /> {COMPANY.legal}
        </div>
        <div className="text-background/60">NIF {COMPANY.nif}</div>
        <div className="text-background/60">{COMPANY.cae}</div>
      </div>
      <div className="space-y-2 text-background/70">
        <div className="editorial-num text-background/50 mb-1">Sede</div>
        <div>{COMPANY.address}</div>
        <div>{COMPANY.postal}</div>
        <div>{COMPANY.hours}</div>
      </div>
      <div className="space-y-2">
        <div className="editorial-num text-background/50 mb-1">Navegar</div>
        <Link to="/projetos" className="block text-background/70 hover:text-accent transition">Projetos</Link>
        <Link to="/privacidade" className="block text-background/70 hover:text-accent transition">Política de Privacidade</Link>
        <Link to="/termos" className="block text-background/70 hover:text-accent transition">Termos & Condições</Link>
      </div>
    </div>
    <div className="container py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/50 editorial-num">
      <div>© {new Date().getFullYear()} {COMPANY.legal}. Todos os direitos reservados.</div>
      <div>{COMPANY.postal} · {COMPANY.district}</div>
    </div>
  </footer>
);

export default SiteFooter;
