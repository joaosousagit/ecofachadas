import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFacade from "@/assets/hero-facade.jpg";
import serviceWindows from "@/assets/service-windows.jpg";
import projectSkylight from "@/assets/project-skylight.jpg";
import projectSchool from "@/assets/project-school.jpg";
import projectHouse from "@/assets/project-house.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const PHONE = "+351917069477";
const PHONE_DISPLAY = "+351 917 069 477";
const EMAIL = "geral@caixiserra.pt";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* HEADER — fixed Swiss bar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur rule-b">
        <div className="container grid grid-cols-12 items-center h-16 gap-4">
          <a href="#top" className="col-span-3 flex items-center gap-2">
            <span className="font-display text-xl tracking-tight">Caixi/Serra</span>
            <span className="swiss-index text-muted-foreground hidden sm:inline">— Est. Leiria</span>
          </a>
          <nav className="col-span-6 hidden lg:flex items-center justify-center gap-10 swiss-index">
            <a href="#trabalho" className="link-underline">01 Trabalho</a>
            <a href="#servicos" className="link-underline">02 Serviços</a>
            <a href="#estudio" className="link-underline">03 Estúdio</a>
            <a href="#contacto" className="link-underline">04 Contacto</a>
          </nav>
          <div className="col-span-9 lg:col-span-3 flex items-center justify-end gap-4">
            <a href={`tel:${PHONE}`} className="hidden md:inline swiss-index link-underline">{PHONE_DISPLAY}</a>
            <Button asChild className="rounded-none h-10 px-4 bg-foreground text-background hover:bg-accent">
              <a href="#contacto" className="swiss-index">Orçamento ↗</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO — editorial */}
      <section id="top" className="relative rule-b">
        <div className="container grid grid-cols-12 gap-4 pt-16 lg:pt-24 pb-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-3 mb-10 swiss-index text-muted-foreground">
              <span className="w-8 h-px bg-foreground" />
              <span>00 / Caixilharia de Alumínio &amp; PVC</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[15vw] lg:text-[10vw] leading-[0.85] tracking-[-0.045em] text-balance"
            >
              Precisão<br />
              em cada<br />
              <span className="italic font-light">milímetro.</span>
            </motion.h1>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-end gap-8 mt-10 lg:mt-0">
            <p className="text-base leading-relaxed text-muted-foreground max-w-sm">
              Estúdio especialista em portas, janelas, claraboias e obras técnicas — desde 2014, sediado em
              Santa Catarina da Serra.
            </p>
            <div className="flex flex-col gap-3">
              <a href="#trabalho" className="swiss-index flex items-center justify-between rule-t pt-3 link-underline">
                Ver projetos recentes <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contacto" className="swiss-index flex items-center justify-between rule-t pt-3 link-underline">
                Pedir orçamento <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero image — full bleed within container */}
        <div className="container">
          <div className="relative aspect-[16/8] overflow-hidden rule-t rule-b">
            <img
              src={heroFacade}
              alt="Fachada de alumínio executada pela CaixiSerra"
              width={1920}
              height={960}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end text-background">
              <div className="swiss-index bg-foreground/80 backdrop-blur px-3 py-1.5">
                Obra · Fachada técnica · Leiria 2024
              </div>
              <div className="swiss-index bg-foreground/80 backdrop-blur px-3 py-1.5 hidden md:block">
                01 / 04
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-4 py-8 rule-b">
          {[
            { k: "10+", v: "Anos em obra" },
            { k: "200+", v: "Projetos entregues" },
            { k: "100%", v: "Por medida" },
            { k: "24h", v: "Resposta a pedidos" },
          ].map((s) => (
            <div key={s.v} className="flex items-baseline gap-3">
              <div className="font-display text-4xl lg:text-5xl tracking-tighter">{s.k}</div>
              <div className="swiss-index text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden py-5 rule-b">
        <div className="flex marquee whitespace-nowrap font-display text-3xl lg:text-5xl tracking-tighter">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 pr-10">
              {["Portas", "Janelas", "Claraboias", "Fachadas", "PVC", "Alumínio", "Por medida"].map((w) => (
                <span key={w} className="flex items-center gap-10">
                  <span>{w}</span>
                  <span className="text-accent">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* TRABALHO — projetos */}
      <section id="trabalho" className="py-20 lg:py-28 rule-b">
        <div className="container">
          <motion.div {...fadeUp} className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-12 lg:col-span-3 swiss-index text-muted-foreground">
              <span className="text-accent">●</span> 01 — Trabalho selecionado
            </div>
            <h2 className="col-span-12 lg:col-span-9 font-display text-5xl lg:text-7xl tracking-tighter text-balance">
              Obras recentes em moradia, indústria<br className="hidden lg:block" /> e equipamento público.
            </h2>
          </motion.div>

          {/* Project list — editorial table style */}
          <div className="rule-t">
            {[
              { n: "01", img: projectSchool, title: "Escola Maria Rosa Araújo", category: "Equipamento público", year: "2024", location: "Leiria" },
              { n: "02", img: projectSkylight, title: "Claraboia Redonda", category: "Iluminação natural", year: "2023", location: "Coimbra" },
              { n: "03", img: projectHouse, title: "Casa Habitacional", category: "Moradia", year: "2024", location: "Marinha Grande" },
              { n: "04", img: serviceWindows, title: "Janelas Oscilo-batente", category: "Por medida", year: "2024", location: "Leiria" },
            ].map((p, i) => (
              <motion.a
                key={p.title}
                href="#contacto"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="group block rule-b"
              >
                <div className="grid grid-cols-12 gap-4 py-6 items-center hover:bg-muted/40 transition-colors duration-500 px-2">
                  <div className="col-span-1 swiss-index text-muted-foreground">{p.n}</div>
                  <div className="col-span-11 lg:col-span-5 font-display text-2xl lg:text-3xl tracking-tight">
                    {p.title}
                  </div>
                  <div className="hidden lg:block col-span-2 swiss-index text-muted-foreground">{p.category}</div>
                  <div className="hidden lg:block col-span-1 swiss-index text-muted-foreground">{p.location}</div>
                  <div className="hidden lg:block col-span-1 swiss-index text-muted-foreground">{p.year}</div>
                  <div className="col-span-12 lg:col-span-2 flex items-center justify-end gap-2 swiss-index">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">Ver projeto</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:text-accent transition-colors" />
                  </div>
                </div>
                {/* Reveal image on hover */}
                <div className="grid grid-cols-12 gap-4 px-2">
                  <div className="col-start-2 col-span-10 max-h-0 group-hover:max-h-[400px] overflow-hidden transition-all duration-700">
                    <div className="aspect-[21/9] overflow-hidden mb-6">
                      <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 lg:py-28 rule-b bg-surface">
        <div className="container">
          <motion.div {...fadeUp} className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-12 lg:col-span-3 swiss-index text-muted-foreground">
              <span className="text-accent">●</span> 02 — O que fazemos
            </div>
            <h2 className="col-span-12 lg:col-span-9 font-display text-5xl lg:text-7xl tracking-tighter text-balance">
              Quatro disciplinas. Uma equipa.
            </h2>
          </motion.div>

          <div className="grid grid-cols-12 gap-x-4 gap-y-12">
            {[
              { n: "/01", title: "Portas & Janelas", desc: "Sistemas batente, oscilo-batente e correr em alumínio e PVC com corte térmico. Vidros duplos, isolamento acústico e soluções de segurança." },
              { n: "/02", title: "Claraboias", desc: "Iluminação natural por medida — fixas ou abertas, redondas ou retangulares. Estanquidade certificada e integração arquitetónica." },
              { n: "/03", title: "Obras Técnicas", desc: "Montagem de fachadas, divisórias e estruturas para projetos de grande envergadura — equipamento público, indústria e arquitetura." },
              { n: "/04", title: "Por Medida", desc: "Produção de produtos em alumínio e PVC desenhados ao milímetro. Da medição ao acabamento final, controlado pela nossa equipa." },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="col-span-12 md:col-span-6 lg:col-span-3 rule-t pt-6"
              >
                <div className="flex items-center justify-between mb-8 swiss-index text-muted-foreground">
                  <span>{s.n}</span>
                  <Plus className="h-4 w-4" />
                </div>
                <h3 className="font-display text-2xl lg:text-3xl tracking-tight mb-4 text-balance">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTÚDIO / SOBRE */}
      <section id="estudio" className="py-20 lg:py-28 rule-b">
        <div className="container grid grid-cols-12 gap-4">
          <motion.div {...fadeUp} className="col-span-12 lg:col-span-3">
            <div className="swiss-index text-muted-foreground sticky top-24">
              <span className="text-accent">●</span> 03 — Estúdio
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="col-span-12 lg:col-span-9">
            <p className="font-display text-3xl lg:text-5xl tracking-tighter text-balance leading-[1.05] mb-16">
              A CaixiSerra é uma equipa jovem e multidisciplinar, dedicada a executar
              cada trabalho com a <span className="text-accent">excelência</span> que ele exige —
              de pequenos arranjos a obras técnicas de grande envergadura.
            </p>

            <div className="grid grid-cols-12 gap-4 rule-t pt-10">
              {[
                { n: "01", title: "Exigência", desc: "Trabalho detalhado, feito ao pormenor. Parceiros e colaboradores especialistas garantem que a excelência é o nosso patamar — não o teto." },
                { n: "02", title: "Responsabilidade", desc: "Asseguramos serviços e produtos que satisfazem as exigências dos clientes e cumprem todos os requisitos legais e normativos aplicáveis." },
                { n: "03", title: "Qualidade", desc: "Especialistas na área do alumínio executam projetos com qualidade elevada, dentro do prazo, cumprindo todas as normas regulamentares." },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                  className="col-span-12 md:col-span-4 flex flex-col"
                >
                  <div className="swiss-index text-accent mb-6">{v.n}</div>
                  <h3 className="font-display text-2xl tracking-tight mb-4">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-7 aspect-[4/3] overflow-hidden">
                <img src={serviceWindows} alt="Equipa CaixiSerra a executar instalação" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-12 lg:col-span-5 flex flex-col justify-end gap-6">
                <div className="swiss-index text-muted-foreground">— Sede</div>
                <p className="font-display text-2xl lg:text-3xl tracking-tight leading-tight">
                  Rua da Pedreira, Pedrome<br />
                  2945-183 Santa Catarina da Serra<br />
                  <span className="text-muted-foreground">Leiria, Portugal</span>
                </p>
                <a
                  href="https://goo.gl/maps/WNTVgYktzyZTzRQr8"
                  target="_blank"
                  rel="noreferrer"
                  className="swiss-index flex items-center gap-2 link-underline w-fit"
                >
                  Abrir no mapa <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container grid grid-cols-12 gap-4">
          <motion.div {...fadeUp} className="col-span-12 lg:col-span-3 swiss-index text-background/60">
            <span className="text-accent">●</span> 04 — Contacto
          </motion.div>

          <motion.div {...fadeUp} className="col-span-12 lg:col-span-9">
            <h2 className="font-display text-5xl lg:text-8xl tracking-tighter mb-16 text-balance">
              Vamos construir algo<br />
              <span className="italic font-light">à medida.</span>
            </h2>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-10">
                <div>
                  <div className="swiss-index text-background/50 mb-3">Telefone</div>
                  <a href={`tel:${PHONE}`} className="font-display text-3xl lg:text-4xl tracking-tight link-underline">
                    {PHONE_DISPLAY}
                  </a>
                  <div className="swiss-index text-background/50 mt-2">Chamada para rede móvel nacional</div>
                </div>
                <div>
                  <div className="swiss-index text-background/50 mb-3">Email</div>
                  <a href={`mailto:${EMAIL}`} className="font-display text-2xl lg:text-3xl tracking-tight link-underline break-all">
                    {EMAIL}
                  </a>
                </div>
                <div>
                  <div className="swiss-index text-background/50 mb-3">Horário</div>
                  <p className="text-base text-background/80">
                    Seg–Sex · 09:00 — 18:00<br />
                    <span className="text-background/50">Visitas a obra com marcação prévia</span>
                  </p>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const body = `Nome: ${data.get("name")}%0A%0AContacto: ${data.get("phone")}%0A%0AMensagem: ${data.get("message")}`;
                  window.location.href = `mailto:${EMAIL}?subject=Pedido de orçamento — CaixiSerra&body=${body}`;
                }}
                className="col-span-12 lg:col-span-7 lg:pl-10 lg:border-l border-background/20"
              >
                <div className="swiss-index text-background/50 mb-8">— Pedido de orçamento</div>
                <div className="space-y-8">
                  <div>
                    <label className="swiss-index text-background/50 block mb-2">01 Nome *</label>
                    <input
                      name="name"
                      required
                      className="w-full bg-transparent border-0 border-b border-background/30 py-3 focus:outline-none focus:border-accent transition-colors text-background placeholder:text-background/30 text-lg"
                      placeholder="O seu nome"
                    />
                  </div>
                  <div>
                    <label className="swiss-index text-background/50 block mb-2">02 Email ou telefone *</label>
                    <input
                      name="phone"
                      required
                      className="w-full bg-transparent border-0 border-b border-background/30 py-3 focus:outline-none focus:border-accent transition-colors text-background placeholder:text-background/30 text-lg"
                      placeholder="Como o contactamos"
                    />
                  </div>
                  <div>
                    <label className="swiss-index text-background/50 block mb-2">03 Descrição do projeto *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-transparent border-0 border-b border-background/30 py-3 focus:outline-none focus:border-accent transition-colors text-background placeholder:text-background/30 resize-none text-lg"
                      placeholder="Tipologia, localização, prazo desejado…"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-10 group flex items-center justify-between w-full rule-t pt-6 swiss-index hover:text-accent transition-colors"
                >
                  <span>Enviar pedido</span>
                  <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background pt-16 pb-6 border-t border-background/15">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 pb-16">
            <div className="col-span-12 lg:col-span-6">
              <div className="font-display text-7xl lg:text-9xl tracking-tighter leading-none">
                Caixi/<br />Serra<span className="text-accent">.</span>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-2 flex flex-col gap-3 swiss-index text-background/60">
              <div className="text-background/40">Site</div>
              <a href="#trabalho" className="link-underline w-fit">Trabalho</a>
              <a href="#servicos" className="link-underline w-fit">Serviços</a>
              <a href="#estudio" className="link-underline w-fit">Estúdio</a>
              <a href="#contacto" className="link-underline w-fit">Contacto</a>
            </div>
            <div className="col-span-6 lg:col-span-2 flex flex-col gap-3 swiss-index text-background/60">
              <div className="text-background/40">Social</div>
              <a href="https://facebook.com/caixiserra" target="_blank" rel="noreferrer" className="link-underline w-fit">Facebook ↗</a>
              <a href={`mailto:${EMAIL}`} className="link-underline w-fit">Email ↗</a>
              <a href={`tel:${PHONE}`} className="link-underline w-fit">Telefone ↗</a>
            </div>
            <div className="col-span-12 lg:col-span-2 flex flex-col gap-3 swiss-index text-background/60">
              <div className="text-background/40">Sede</div>
              <p>Rua da Pedreira, Pedrome<br />2945-183 Santa Catarina<br />da Serra · Leiria</p>
            </div>
          </div>
          <div className="rule-t border-background/20 pt-6 flex flex-wrap items-center justify-between gap-3 swiss-index text-background/40">
            <div>© {new Date().getFullYear()} CaixiSerra · Caixilharia de Alumínio</div>
            <div>Santa Catarina da Serra · Leiria · PT</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
