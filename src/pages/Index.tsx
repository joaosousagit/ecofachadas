import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, MapPin, Check, Sparkles } from "lucide-react";
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
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const PHONE = "+351917069477";
const PHONE_DISPLAY = "+351 917 069 477";
const EMAIL = "geral@caixiserra.pt";
const ADDRESS = "Santa Catarina da Serra, Leiria";

const services = [
  { title: "Janelas em Alumínio", desc: "Sistemas de corte térmico, batente, oscilo-batente e correr." },
  { title: "Portas e Portões", desc: "Entrada principal, garagem, basculantes e seccionadas." },
  { title: "PVC Premium", desc: "Soluções com isolamento térmico e acústico superior." },
  { title: "Claraboias e Coberturas", desc: "Iluminação natural com vidros estruturais." },
  { title: "Fachadas e Muros Cortina", desc: "Engenharia de envolvente para edifícios." },
  { title: "Obras Técnicas", desc: "Soluções à medida para projetos exigentes." },
];

const projects = [
  { title: "Moradia V4", location: "Leiria", img: projectHouse, year: "2024", category: "Residencial" },
  { title: "Escola Pública", location: "Marinha Grande", img: projectSchool, year: "2023", category: "Institucional" },
  { title: "Claraboia Industrial", location: "Batalha", img: projectSkylight, year: "2024", category: "Indústria" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60">
        <div className="container flex items-center justify-between h-20">
          <a href="#top" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center text-primary-foreground font-display font-bold text-lg">C</div>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold tracking-tight">CaixiSerra</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Caixilharia · Leiria</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#servicos" className="text-foreground/70 hover:text-foreground transition">Serviços</a>
            <a href="#projetos" className="text-foreground/70 hover:text-foreground transition">Projetos</a>
            <a href="#sobre" className="text-foreground/70 hover:text-foreground transition">Sobre</a>
            <a href="#contactos" className="text-foreground/70 hover:text-foreground transition">Contactos</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE}`} className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition">
              <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
            <Button asChild className="rounded-full h-11 px-5 bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
              <a href="#contactos">Pedir Orçamento</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-mesh">
        <div className="container py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div {...fadeUp} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider mb-8">
              <Sparkles className="w-3 h-3" /> Desde 2010 · Leiria
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance">
              Caixilharia que <span className="bg-gradient-hero bg-clip-text text-transparent">eleva</span> cada espaço.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Especialistas em alumínio e PVC. Janelas, portas, claraboias e fachadas — projetadas, fabricadas e instaladas com rigor técnico em Santa Catarina da Serra.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full h-14 px-8 bg-primary hover:bg-primary/90 shadow-elegant text-base">
                <a href="#contactos" className="flex items-center gap-2">Pedir Orçamento <ArrowUpRight className="w-5 h-5" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 border-2 text-base">
                <a href="#projetos">Ver Projetos</a>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 text-sm">
              {[
                { k: "15+", v: "anos de experiência" },
                { k: "500+", v: "obras concluídas" },
                { k: "100%", v: "garantia de qualidade" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-display text-3xl font-bold text-primary">{s.k}</div>
                  <div className="text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.9, delay: 0.15 }} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img src={heroFacade} alt="Fachada de alumínio CaixiSerra" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-card max-w-[240px]">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Projeto em destaque</div>
              <div className="font-display font-semibold">Fachada Residencial · Leiria</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS — bento grid */}
      <section id="servicos" className="container py-24 lg:py-32">
        <motion.div {...fadeUp} className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">02 · Serviços</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Soluções completas em <span className="text-primary">caixilharia</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="group relative bg-card border border-border rounded-3xl p-8 hover:border-primary/40 hover:shadow-elegant transition-all duration-500"
            >
              <div className="text-xs font-mono text-muted-foreground mb-6">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="bg-surface text-primary-foreground py-24 lg:py-32">
        <div className="container">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-primary-glow mb-4">03 · Projetos</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-2xl">
                Trabalho que <span className="text-primary-glow">fala</span> por nós.
              </h2>
            </div>
            <p className="text-white/60 max-w-sm">Uma seleção de obras recentes em Leiria e região centro.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href="#contactos"
                {...fadeUp}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="group block"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-4">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 text-foreground text-xs font-mono uppercase tracking-wider">
                    {p.category}
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                    <div className="text-white/60 text-sm">{p.location} · {p.year}</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-primary-glow group-hover:rotate-45 transition-all duration-500" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="container py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div {...fadeUp} className="lg:col-span-5">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-elegant">
            <img src={serviceWindows} alt="Oficina CaixiSerra" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.15 }} className="lg:col-span-7">
          <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">04 · Sobre</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Uma equipa que entende cada detalhe.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A CaixiSerra nasceu em Santa Catarina da Serra com o objetivo de oferecer soluções de caixilharia de excelência. Combinamos experiência técnica, materiais premium e atenção ao detalhe em cada obra — do projeto residencial à grande envolvente arquitectónica.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 mt-10">
            {[
              "Fabrico próprio em Leiria",
              "Materiais certificados",
              "Instalação por equipa interna",
              "Garantia em todos os trabalhos",
              "Orçamento sem compromisso",
              "Acompanhamento pós-obra",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* CONTACTOS */}
      <section id="contactos" className="container pb-24">
        <motion.div {...fadeUp} className="relative bg-gradient-hero rounded-[2.5rem] p-10 md:p-16 overflow-hidden text-primary-foreground">
          <div className="absolute inset-0 bg-mesh opacity-40" />
          <div className="relative grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-white/70 mb-4">05 · Contacto</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Vamos dar forma ao seu projeto.
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-md">
                Fale connosco para um orçamento gratuito e personalizado. Respondemos em 24 horas.
              </p>
              <div className="space-y-5">
                <a href={`tel:${PHONE}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur"><Phone className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-white/60">Telefone</div>
                    <div className="font-display text-lg group-hover:underline">{PHONE_DISPLAY}</div>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur"><Mail className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-white/60">Email</div>
                    <div className="font-display text-lg group-hover:underline">{EMAIL}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-white/60">Localização</div>
                    <div className="font-display text-lg">{ADDRESS}</div>
                  </div>
                </div>
              </div>
            </div>

            <form
              className="bg-background/95 backdrop-blur rounded-3xl p-8 text-foreground space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const body = `Nome: ${fd.get("nome")}%0DTelefone: ${fd.get("telefone")}%0DMensagem: ${fd.get("mensagem")}`;
                window.location.href = `mailto:${EMAIL}?subject=Pedido de Orçamento&body=${body}`;
              }}
            >
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Nome</label>
                <input name="nome" required className="w-full mt-1 h-12 px-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</label>
                  <input name="email" type="email" required className="w-full mt-1 h-12 px-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition" />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Telefone</label>
                  <input name="telefone" className="w-full mt-1 h-12 px-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition" />
                </div>
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Mensagem</label>
                <textarea name="mensagem" required rows={4} className="w-full mt-1 px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition resize-none" />
              </div>
              <Button type="submit" className="w-full h-13 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                Enviar Pedido <ArrowUpRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center text-primary-foreground font-display font-bold text-sm">C</div>
            <span>© {new Date().getFullYear()} CaixiSerra · Caixilharia de Alumínio</span>
          </div>
          <div className="font-mono text-xs uppercase tracking-wider">{ADDRESS}</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
