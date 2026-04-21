import ServicePage from "@/components/ServicePage";
import sustainableImg from "@/assets/eco-sustainable.jpg";

const Etics = () => (
  <ServicePage
    slug="etics"
    title="Sistema ETICS (Capoto)"
    tagline="Isolamento térmico pelo exterior — eficiência energética, conforto e durabilidade para o seu edifício."
    seoTitle="ETICS / Capoto em Viseu — Isolamento Térmico Exterior | Ecofachadas"
    seoDescription="Aplicação de sistema ETICS (capoto) no distrito de Viseu e região centro. Eficiência energética, durabilidade e acabamentos premium. Orçamento gratuito."
    heroImage={sustainableImg}
    intro="O ETICS (External Thermal Insulation Composite System), conhecido em Portugal como capoto, é um sistema de isolamento térmico aplicado pelo exterior das paredes. Reduz drasticamente as perdas térmicas, elimina pontes térmicas, melhora o conforto interior e valoriza o imóvel. Trabalhamos com sistemas certificados Weber, Cinca, Sto e marcas equivalentes, executando todas as camadas — isolante, rede, mastique e acabamento — segundo as normas do fabricante e ETAG 004."
    features={[
      "Redução até 40% nas necessidades energéticas de aquecimento e arrefecimento",
      "Eliminação de pontes térmicas e condensações",
      "Sistemas certificados ETAG 004 — Weber, Cinca, Sto e equivalentes",
      "Isolantes EPS, EPS grafitado, lã mineral ou cortiça (ICB)",
      "Acabamentos em barramento mineral, silicato ou silicone com vasta paleta de cores",
      "Garantia do sistema até 10 anos",
    ]}
    applications={[
      "Moradias unifamiliares novas",
      "Reabilitação de fachadas antigas",
      "Edifícios multifamiliares",
      "Edifícios de serviços e comércio",
      "Sobreposição em paredes existentes",
      "Programas de eficiência energética",
    ]}
    process={[
      { n: "01", title: "Visita técnica", desc: "Avaliação do suporte, medições e levantamento das condições da fachada." },
      { n: "02", title: "Proposta detalhada", desc: "Especificação do sistema, isolante e acabamento, com prazos e custos." },
      { n: "03", title: "Aplicação", desc: "Colocação de placas, fixação mecânica, rede de fibra de vidro e barramento." },
      { n: "04", title: "Acabamento e garantia", desc: "Acabamento final, limpeza e entrega com garantia do sistema." },
    ]}
  />
);

export default Etics;
