import SEO from "@/components/SEO";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { COMPANY } from "@/lib/company";

const Privacidade = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEO title="Política de Privacidade — Ecofachadas" description="Política de Privacidade e tratamento de dados pessoais da Ecofachadas, Lda." path="/privacidade" />
    <SiteHeader />
    <article className="container max-w-3xl py-20 prose-editorial">
      <div className="editorial-num text-muted-foreground mb-6">Documento legal</div>
      <h1 className="font-display text-5xl md:text-6xl tracking-tight">Política de <span className="italic-serif text-accent">Privacidade</span></h1>
      <div className="mt-10 space-y-6 text-foreground/80 leading-relaxed text-lg">
        <p><strong>Responsável pelo tratamento:</strong> {COMPANY.legal}, NIF {COMPANY.nif}, com sede em {COMPANY.address}, {COMPANY.postal}.</p>
        <h2 className="font-display text-2xl mt-10">1. Dados recolhidos</h2>
        <p>Recolhemos apenas os dados que nos fornece voluntariamente através do formulário de contacto: nome, email, telefone e mensagem. Estes dados são utilizados exclusivamente para responder ao seu pedido.</p>
        <h2 className="font-display text-2xl mt-10">2. Base legal</h2>
        <p>O tratamento dos seus dados baseia-se no seu consentimento (art. 6.º, n.º 1, al. a) do RGPD) e na execução de diligências pré-contratuais (al. b)).</p>
        <h2 className="font-display text-2xl mt-10">3. Conservação</h2>
        <p>Os dados são conservados pelo tempo necessário ao cumprimento da finalidade que motivou a sua recolha, salvo obrigação legal em contrário.</p>
        <h2 className="font-display text-2xl mt-10">4. Direitos do titular</h2>
        <p>Tem direito a aceder, rectificar, apagar, limitar, opor-se ou portar os seus dados. Para exercer estes direitos contacte-nos por email: <a className="text-primary underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
        <h2 className="font-display text-2xl mt-10">5. Cookies</h2>
        <p>Este site usa apenas cookies essenciais ao seu funcionamento e, mediante consentimento, cookies de análise. Pode revogar o consentimento a qualquer momento limpando os dados do navegador.</p>
        <h2 className="font-display text-2xl mt-10">6. Reclamações</h2>
        <p>Pode apresentar reclamação à Comissão Nacional de Protecção de Dados (CNPD).</p>
      </div>
    </article>
    <SiteFooter />
  </div>
);

export default Privacidade;
