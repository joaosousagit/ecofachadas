import ServicePage from "@/components/ServicePage";
import residentialImg from "@/assets/eco-residential.jpg";

const Construcao = () => (
  <ServicePage
    slug="construcao"
    title="Construção de Edifícios"
    tagline="Construção de edifícios residenciais e não residenciais — do projecto à chave-na-mão, no distrito de Viseu."
    seoTitle="Construção de Edifícios em Viseu — Moradias e Comércio | Ecofachadas"
    seoDescription="Construção civil e obras públicas no distrito de Viseu. Moradias, edifícios multifamiliares, comércio e serviços. Desde 2016 em Oliveira de Frades."
    heroImage={residentialImg}
    intro="Executamos construção de edifícios residenciais (moradias unifamiliares e multifamiliares) e não residenciais (comércio, serviços, indústria), na modalidade chave-na-mão ou parcial. Desde 2016, a Ecofachadas concretiza obras no distrito de Viseu e região centro, combinando rigor de prazos, qualidade construtiva e atenção ao envelope sustentável. CAE 41000 — Construção de Edifícios."
    features={[
      "Construção integral chave-na-mão ou execução parcial por especialidade",
      "Equipa própria de pedreiros, carpinteiros e oficiais de fachada",
      "Coordenação técnica com projectistas, engenheiros e fiscalização",
      "Cumprimento rigoroso de prazos e custos contratualizados",
      "Materiais e fornecedores locais — economia circular regional",
      "Garantia legal de obra e responsabilidade civil",
    ]}
    applications={[
      "Moradias unifamiliares",
      "Edifícios multifamiliares",
      "Edifícios comerciais e showrooms",
      "Edifícios de serviços e escritórios",
      "Reabilitação integral",
      "Ampliações e remodelações",
    ]}
    process={[
      { n: "01", title: "Visita e briefing", desc: "Reunião no terreno, análise do projecto ou levantamento das necessidades." },
      { n: "02", title: "Orçamento detalhado", desc: "Mapa de quantidades, prazos, condições de pagamento e cronograma." },
      { n: "03", title: "Execução em obra", desc: "Implementação com equipa própria, coordenação de subempreitadas e controlo de qualidade." },
      { n: "04", title: "Vistoria e entrega", desc: "Inspecção final, correcção de pontos e entrega com garantia legal." },
    ]}
  />
);

export default Construcao;
