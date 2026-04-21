import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, MapPin, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { COMPANY } from "@/lib/company";
import heroImg from "@/assets/eco-hero.jpg";
import residentialImg from "@/assets/eco-residential.jpg";
import commercialImg from "@/assets/eco-commercial.jpg";
import sustainableImg from "@/assets/eco-sustainable.jpg";
import teamImg from "@/assets/eco-team.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const faqs = [
  { q: "Em que zonas geográficas trabalham?", a: "Atuamos sobretudo no distrito de Viseu e em toda a região centro de Portugal. Para obras de maior dimensão deslocamo-nos a outros distritos." },
  { q: "Quanto tempo demora a receber um orçamento?", a: "Após visita ao local ou recepção do projecto, enviamos uma proposta detalhada num prazo médio de 5 a 10 dias úteis." },
  { q: "Trabalham com particulares e empresas?", a: "Sim. Executamos obras para particulares (moradias, reabilitações), promotores e clientes institucionais." },
  { q: "Que sistemas de fachada executam?", a: "ETICS (capoto), fachadas ventiladas, painéis compósitos, revestimentos cerâmicos e soluções de isolamento térmico pelo exterior." },
  { q: "Dão garantia nas obras?", a: "Sim. Cumprimos os prazos legais de garantia previstos no Código Civil e respeitamos as garantias dos sistemas e materiais aplicados." },
  { q: "Fazem visita técnica antes do orçamento?", a: "Sempre que possível. A visita é gratuita e sem compromisso, e permite-nos apresentar uma proposta rigorosa." },
];

const services = [
  {
    n: "01",
    title: "Construção residencial",
    desc: "Moradias unifamiliares e edifícios multifamiliares, do projecto à chave-na-mão.",
    img: residentialImg,
  },
  {
    n: "02",
    title: "Edifícios não residenciais",
    desc: "Comércio, serviços e indústria. Soluções construtivas adaptadas ao programa.",
    img: commercialImg,
  },
  {
    n: "03",
    title: "Fachadas & revestimentos",
    desc: "ETICS, fachadas ventiladas, painéis compósitos e sistemas sustentáveis.",
    img: sustainableImg,
  },
];

const projects = [
  { n: "01", title: "Habitação Coletiva", location: "Oliveira de Frades", year: "2024", category: "Residencial" },
  { n: "02", title: "Edifício de Serviços", location: "Viseu", year: "2023", category: "Não Residencial" },
  { n: "03", title: "Reabilitação de Fachada", location: "Lamego", year: "2024", category: "Fachada Ventilada" },
  { n: "04", title: "Moradia Unifamiliar V4", location: "Vouzela", year: "2023", category: "Residencial" },
];

const stats = [
  { k: "2016", v: "Fundada" },
  { k: "6—10", v: "Colaboradores" },
  { k: "Micro", v: "Dimensão" },
  { k: "↑", v: "Volume crescente" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <SEO
        title="Ecofachadas — Construção e Fachadas em Oliveira de Frades, Viseu"
        description="Construção de edifícios residenciais e não residenciais e fachadas sustentáveis (ETICS, ventiladas) no distrito de Viseu desde 2016."
        path="/"
      />
      <SiteHeader />

      {/* HERO — editorial split */}
      <section id="top" className="relative">
        <div className="container pt-16 lg:pt-24 pb-20">
          <div className="flex items-center gap-3 mb-12 editorial-num text-muted-foreground">
            <span className="text-accent">●</span>
            <span>Construção · Fachadas · Sustentabilidade</span>
            <span className="hidden md:inline">— Oliveira de Frades, Viseu</span>
          </div>

          <motion.h1
            {...fadeUp}
            className="font-display text-[14vw] md:text-[10vw] lg:text-[8.5rem] leading-[0.9] tracking-tight text-balance"
          >
            Construímos
            <br />
            edifícios que <span className="italic-serif text-accent">respiram</span>.
          </motion.h1>

          <div className="mt-16 grid lg:grid-cols-12 gap-10 items-end">
            <motion.div {...fadeUp} transition={{ duration: 0.9, delay: 0.15 }} className="lg:col-span-5">
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-md">
                Construção de edifícios residenciais e não residenciais, com especialização em fachadas sustentáveis. Desde 2016 em Oliveira de Frades.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="rounded-none h-14 px-8 bg-foreground text-background hover:bg-foreground/90 text-base">
                  <a href="#contacto" className="flex items-center gap-3 editorial-num">
                    Pedir orçamento <ArrowUpRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg" className="rounded-none h-14 px-8 text-base hover:bg-transparent">
                  <a href="#trabalho" className="flex items-center gap-3 editorial-num border-b border-foreground/40 hover:border-foreground rounded-none">
                    Ver trabalho
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 1.1, delay: 0.25 }} className="lg:col-span-7">
              <div className="relative aspect-[4/5] md:aspect-[16/11] overflow-hidden">
                <img
                  src={heroImg}
                  alt="Fachada arquitectónica Ecofachadas"
                  width={1280}
                  height={1600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-background editorial-num">
                  <span className="bg-foreground/80 backdrop-blur px-3 py-1.5">Projecto · Fachada ventilada</span>
                  <span className="bg-foreground/80 backdrop-blur px-3 py-1.5">↑ 2024</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="border-y border-border py-6 overflow-hidden bg-foreground text-background">
          <div className="marquee whitespace-nowrap flex gap-12 font-display text-3xl md:text-5xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                <span>Construção</span><span className="text-accent">●</span>
                <span className="italic-serif">Fachadas</span><span className="text-accent">●</span>
                <span>ETICS</span><span className="text-accent">●</span>
                <span className="italic-serif">Reabilitação</span><span className="text-accent">●</span>
                <span>Sustentabilidade</span><span className="text-accent">●</span>
                <span className="italic-serif">Engenharia</span><span className="text-accent">●</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRABALHO — editorial list */}
      <section id="trabalho" className="container py-24 lg:py-32">
        <motion.div {...fadeUp} className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-3 editorial-num text-muted-foreground">
            (01) — Trabalho seleccionado
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance">
              Obras recentes <span className="italic-serif text-accent">no centro</span> de Portugal.
            </h2>
          </div>
        </motion.div>

        <div className="rule-t">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contacto"
              {...fadeUp}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="group grid grid-cols-12 gap-4 items-center py-8 rule-b hover:bg-muted/40 transition-colors duration-500 px-2 -mx-2"
            >
              <div className="col-span-2 md:col-span-1 editorial-num text-muted-foreground">{p.n}</div>
              <div className="col-span-10 md:col-span-5 font-display text-2xl md:text-4xl tracking-tight">{p.title}</div>
              <div className="hidden md:block md:col-span-3 text-foreground/70">{p.location}</div>
              <div className="hidden md:block md:col-span-2 editorial-num text-muted-foreground">{p.category}</div>
              <div className="col-span-12 md:col-span-1 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-foreground/40 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* SERVIÇOS — image+text editorial blocks */}
      <section id="servicos" className="bg-secondary/40 py-24 lg:py-32 border-y border-border">
        <div className="container">
          <motion.div {...fadeUp} className="grid lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-3 editorial-num text-muted-foreground">
              (02) — Serviços
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance">
                Construção integral <span className="italic-serif text-accent">e</span> envelope arquitectónico.
              </h2>
            </div>
          </motion.div>

          <div className="space-y-2">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className={`grid lg:grid-cols-12 gap-8 items-center bg-background p-6 lg:p-10 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="lg:col-span-6">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6 lg:px-8">
                  <div className="editorial-num text-accent mb-6">{s.n} / 03</div>
                  <h3 className="font-display text-4xl md:text-5xl tracking-tight mb-6">{s.title}</h3>
                  <p className="text-lg text-foreground/70 leading-relaxed max-w-md">{s.desc}</p>
                  <a href="#contacto" className="mt-8 inline-flex items-center gap-2 editorial-num link-underline">
                    Falar sobre este serviço <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTÚDIO / SOBRE */}
      <section id="estudio" className="container py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={teamImg} alt="Equipa Ecofachadas em obra" width={1400} height={1400} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.9, delay: 0.15 }} className="lg:col-span-7 lg:pl-8">
            <div className="editorial-num text-muted-foreground mb-6">(03) — O estúdio</div>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight text-balance mb-10">
              Uma empresa de Oliveira de Frades, com <span className="italic-serif text-accent">raízes</span> na construção e o olhar na sustentabilidade.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-foreground/70 text-lg leading-relaxed">
              <p>
                A {COMPANY.legal} foi constituída em 2016 e dedica-se à construção de edifícios residenciais e não residenciais (CAE 41000), com especial atenção ao envelope construtivo: fachadas, isolamento e revestimentos.
              </p>
              <p>
                Estamos sediados no Edifício 4 Estações, em Oliveira de Frades, e operamos sobretudo no distrito de Viseu e região centro. Combinamos métodos tradicionais com soluções técnicas contemporâneas.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 rule-t pt-10">
              {stats.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-4xl md:text-5xl tracking-tight text-accent">{s.k}</div>
                  <div className="editorial-num text-muted-foreground mt-2">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="editorial-num">NIF {COMPANY.nif} · {COMPANY.cae}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACTO — inverted dark editorial */}
      <section id="contacto" className="bg-foreground text-background">
        <div className="container py-24 lg:py-32">
          <motion.div {...fadeUp} className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3 editorial-num text-background/60">
              (04) — Contacto
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-5xl md:text-8xl tracking-tight text-balance">
                Conte-nos sobre <span className="italic-serif text-accent">o seu projecto</span>.
              </h2>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            <motion.div {...fadeUp} className="lg:col-span-5 space-y-10">
              <a href={`tel:${COMPANY.phoneHref}`} className="block group">
                <div className="editorial-num text-background/50 mb-2">Telefone</div>
                <div className="font-display text-3xl md:text-4xl group-hover:text-accent transition-colors flex items-center gap-3">
                  <Phone className="w-6 h-6" /> {COMPANY.phone}
                </div>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="block group">
                <div className="editorial-num text-background/50 mb-2">Email</div>
                <div className="font-display text-3xl md:text-4xl group-hover:text-accent transition-colors flex items-center gap-3 break-all">
                  <Mail className="w-6 h-6 shrink-0" /> {COMPANY.email}
                </div>
              </a>
              <div>
                <div className="editorial-num text-background/50 mb-2">Sede</div>
                <div className="font-display text-2xl md:text-3xl flex items-start gap-3 text-background/90">
                  <MapPin className="w-6 h-6 mt-2 shrink-0 text-accent" />
                  <span>
                    {COMPANY.address}<br />
                    {COMPANY.postal}<br />
                    <span className="text-background/60">Distrito de {COMPANY.district}</span>
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.form
              {...fadeUp}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="lg:col-span-7 space-y-1"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const body = `Nome: ${fd.get("nome")}%0D%0ATelefone: ${fd.get("telefone")}%0D%0AMensagem: ${fd.get("mensagem")}`;
                window.location.href = `mailto:${COMPANY.email}?subject=Pedido de Orçamento — Site&body=${body}`;
              }}
            >
              {[
                { name: "nome", label: "Nome", type: "text", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "telefone", label: "Telefone", type: "tel", required: false },
              ].map((f) => (
                <div key={f.name} className="grid md:grid-cols-12 gap-4 items-center py-5 border-b border-background/20">
                  <label className="md:col-span-3 editorial-num text-background/60">{f.label}{f.required && <span className="text-accent"> *</span>}</label>
                  <input
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    className="md:col-span-9 bg-transparent text-2xl font-display text-background placeholder:text-background/30 focus:outline-none border-0"
                    placeholder={f.label.toLowerCase()}
                  />
                </div>
              ))}
              <div className="grid md:grid-cols-12 gap-4 items-start py-5 border-b border-background/20">
                <label className="md:col-span-3 editorial-num text-background/60">Mensagem<span className="text-accent"> *</span></label>
                <textarea
                  name="mensagem"
                  required
                  rows={4}
                  className="md:col-span-9 bg-transparent text-2xl font-display text-background placeholder:text-background/30 focus:outline-none border-0 resize-none"
                  placeholder="conte-nos sobre o seu projecto…"
                />
              </div>
              <Button
                type="submit"
                className="mt-10 rounded-none h-16 px-10 bg-accent text-accent-foreground hover:bg-accent/90 text-base"
              >
                <span className="editorial-num flex items-center gap-3">Enviar pedido <ArrowUpRight className="w-5 h-5" /></span>
              </Button>
            </motion.form>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="border-t border-background/15">
          <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <div className="flex items-center gap-3 editorial-num">
              <Leaf className="w-4 h-4 text-accent" />
              © {new Date().getFullYear()} {COMPANY.legal} · NIF {COMPANY.nif}
            </div>
            <div className="editorial-num">{COMPANY.postal} · {COMPANY.district}</div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Index;
