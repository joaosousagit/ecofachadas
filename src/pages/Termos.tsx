import SEO from "@/components/SEO";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { COMPANY } from "@/lib/company";

const Termos = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEO title="Termos & Condições — Ecofachadas" description="Termos e condições de utilização do website da Ecofachadas, Lda." path="/termos" />
    <SiteHeader />
    <article className="container max-w-3xl py-20">
      <div className="editorial-num text-muted-foreground mb-6">Documento legal</div>
      <h1 className="font-display text-5xl md:text-6xl tracking-tight">Termos & <span className="italic-serif text-accent">Condições</span></h1>
      <div className="mt-10 space-y-6 text-foreground/80 leading-relaxed text-lg">
        <h2 className="font-display text-2xl mt-10">1. Identificação</h2>
        <p>Este website é propriedade da {COMPANY.legal}, NIF {COMPANY.nif}, com sede em {COMPANY.address}, {COMPANY.postal}.</p>
        <h2 className="font-display text-2xl mt-10">2. Objecto</h2>
        <p>O website tem como finalidade apresentar a empresa, os seus serviços de construção e fachadas, e permitir o contacto comercial.</p>
        <h2 className="font-display text-2xl mt-10">3. Propriedade intelectual</h2>
        <p>Todos os conteúdos (textos, imagens, logótipo) são propriedade da Ecofachadas, Lda ou utilizados com autorização. É proibida a sua reprodução sem consentimento expresso.</p>
        <h2 className="font-display text-2xl mt-10">4. Limitação de responsabilidade</h2>
        <p>A informação prestada tem carácter meramente informativo e não dispensa a celebração de contrato escrito para qualquer adjudicação.</p>
        <h2 className="font-display text-2xl mt-10">5. Lei aplicável</h2>
        <p>Estes termos regem-se pela lei portuguesa. O foro competente é o da comarca de Viseu.</p>
      </div>
    </article>
    <SiteFooter />
  </div>
);

export default Termos;
