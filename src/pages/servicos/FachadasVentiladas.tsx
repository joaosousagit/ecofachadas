import ServicePage from "@/components/ServicePage";
import commercialImg from "@/assets/eco-commercial.jpg";

const FachadasVentiladas = () => (
  <ServicePage
    slug="fachadas-ventiladas"
    title="Fachadas Ventiladas"
    tagline="Sistemas de revestimento exterior com câmara de ar — desempenho técnico superior e expressão arquitectónica contemporânea."
    seoTitle="Fachadas Ventiladas em Viseu — Revestimento Exterior | Ecofachadas"
    seoDescription="Execução de fachadas ventiladas com cerâmica, compósito ou metal no distrito de Viseu. Desempenho térmico, durabilidade e estética arquitectónica."
    heroImage={commercialImg}
    intro="A fachada ventilada é um sistema construtivo composto por três camadas: isolamento térmico fixado à parede de suporte, uma câmara de ar contínua, e um revestimento exterior fixado em estrutura metálica. A ventilação natural da câmara dissipa humidade e calor, prolongando a vida útil do edifício e reduzindo cargas térmicas. Executamos fachadas ventiladas em cerâmica de grande formato, painéis compósitos de alumínio, painéis fenólicos HPL e cassetes metálicas."
    features={[
      "Câmara de ar ventilada que elimina humidades e melhora o desempenho térmico",
      "Estrutura de suporte em alumínio ou aço inox — durabilidade superior a 50 anos",
      "Revestimentos em grés porcelânico, ACM, HPL, ardósia ou cassetes metálicas",
      "Isolamento contínuo sem pontes térmicas",
      "Manutenção mínima e substituição parcial de peças",
      "Design contemporâneo com infinitas combinações de formato e cor",
    ]}
    applications={[
      "Edifícios de serviços e escritórios",
      "Habitação multifamiliar de gama alta",
      "Equipamentos públicos e culturais",
      "Comércio e showrooms",
      "Reabilitação de edifícios industriais",
      "Edifícios institucionais",
    ]}
    process={[
      { n: "01", title: "Estudo do projecto", desc: "Análise do projecto de arquitectura e definição do sistema mais adequado." },
      { n: "02", title: "Cálculo da subestrutura", desc: "Dimensionamento da estrutura, ancoragens e despacho dos materiais." },
      { n: "03", title: "Montagem", desc: "Aplicação do isolamento, fixação da subestrutura e colocação do revestimento." },
      { n: "04", title: "Entrega chave-na-mão", desc: "Inspecção final, remates e entrega com garantia do sistema." },
    ]}
  />
);

export default FachadasVentiladas;
