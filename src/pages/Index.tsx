import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Award, Wrench, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFacade from "@/assets/hero-facade.jpg";
import serviceWindows from "@/assets/service-windows.jpg";
import projectSkylight from "@/assets/project-skylight.jpg";
import projectSchool from "@/assets/project-school.jpg";
import projectHouse from "@/assets/project-house.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const PHONE = "+351917069477";
const EMAIL = "geral@caixiserra.pt";
const ADDRESS = "Rua da Pedreira, Pedrome — 2945-183 Santa Catarina da Serra";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top utility bar */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-2 opacity-90">
            <MapPin className="h-3.5 w-3.5" /> {ADDRESS}
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${PHONE}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" /> (+351) 917 069 477
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="h-3.5 w-3.5" /> {EMAIL}
            </a>
            <a href="https://facebook.com/caixiserra" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-accent">
              <Facebook className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-tight text-primary">CAIXI</span>
            <span className="font-display text-2xl tracking-tight text-accent">SERRA</span>
          </a>
          <nav className="hidden lg:flex items-center gap-9 text-sm font-medium">
            <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#valores" className="hover:text-accent transition-colors">Valores</a>
            <a href="#projetos" className="hover:text-accent transition-colors">Projetos</a>
            <a href="#contactos" className="hover:text-accent transition-colors">Contactos</a>
          </nav>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none px-6">
            <a href="#contactos">Pedir orçamento <ArrowRight className="ml-1" /></a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img
          src={heroFacade}
          alt="Fachada moderna em alumínio com janelas refletindo a luz dourada"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="container relative pb-20 lg:pb-28 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 bg-background/10 backdrop-blur border border-primary-foreground/20 text-primary-foreground/90 text-xs uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Caixilharia de Alumínio · Leiria
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl text-primary-foreground text-balance leading-[0.9]">
              Cada perfil.
              <br />
              <span className="text-accent">Cada milímetro.</span>
              <br />
              Excelência.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
              Equipa especialista em caixilharia de alumínio e PVC. Portas, janelas, claraboias e obras técnicas
              executadas com rigor — em moradias, empresas e projetos arquitetónicos.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none h-14 px-8 text-base">
                <a href="#contactos">Pedir orçamento gratuito <ArrowRight className="ml-1" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none h-14 px-8 text-base bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="#projetos">Ver projetos</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="bg-primary text-primary-foreground py-5 overflow-hidden border-y border-primary-glow/20">
        <div className="flex marquee whitespace-nowrap font-display text-2xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 pr-12">
              {["PORTAS", "JANELAS", "CLARABOIAS", "OBRAS TÉCNICAS", "PVC", "ALUMÍNIO", "POR MEDIDA"].map((w) => (
                <span key={w} className="flex items-center gap-12">
                  {w}
                  <span className="w-2 h-2 bg-accent rotate-45" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 lg:py-32 bg-background">
        <div className="container">
          <motion.div {...fadeUp} className="grid lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">/ Serviços</div>
              <h2 className="font-display text-4xl lg:text-6xl text-primary text-balance">
                Soluções completas em alumínio e PVC.
              </h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground text-lg">
              Da medição inicial à instalação final — produzimos e montamos por medida, em qualquer tipologia
              de obra.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { title: "Portas e Janelas", desc: "Sistemas batente, oscilo-batente e correr em alumínio e PVC com corte térmico.", icon: Wrench },
              { title: "Claraboias", desc: "Iluminação natural por medida — fixas ou abertas, redondas ou retangulares.", icon: Award },
              { title: "Obras Técnicas", desc: "Montagem de fachadas, divisórias e estruturas para projetos exigentes.", icon: ShieldCheck },
              { title: "Por Medida", desc: "Produtos em alumínio e PVC desenhados ao milímetro do seu projeto.", icon: CheckCircle2 },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="group bg-background p-8 lg:p-10 hover:bg-primary transition-colors duration-500 cursor-default"
              >
                <s.icon className="h-8 w-8 text-accent mb-8 group-hover:text-accent transition-colors" />
                <h3 className="font-display text-2xl text-primary group-hover:text-primary-foreground transition-colors mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors text-sm leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-8 flex items-center text-xs uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-colors">
                  Saber mais <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE — split */}
      <section id="sobre" className="bg-surface">
        <div className="grid lg:grid-cols-2">
          <motion.div {...fadeUp} className="relative min-h-[500px] lg:min-h-full">
            <img
              src={serviceWindows}
              alt="Especialista a medir um caixilho de alumínio durante uma instalação"
              loading="lazy"
              width={1280}
              height={1280}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          <motion.div {...fadeUp} className="p-10 lg:p-20 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">/ Sobre Nós</div>
            <h2 className="font-display text-4xl lg:text-5xl text-primary mb-8 text-balance">
              Uma equipa jovem, multidisciplinar e obcecada pelo detalhe.
            </h2>
            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              A <strong className="text-primary">CaixiSerra</strong> é uma empresa jovem e multidisciplinar,
              dedicada a realizar todos os seus trabalhos com a excelência que estes assim exigem.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com sede em Santa Catarina da Serra (Leiria), integramos uma equipa de especialistas na área da
              caixilharia de alumínios — de pequenos arranjos a obras técnicas de grande envergadura.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t border-border">
              {[
                { n: "100%", l: "Por medida" },
                { n: "10+", l: "Anos de obra" },
                { n: "200+", l: "Projetos entregues" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl lg:text-4xl text-accent">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALORES */}
      <section id="valores" className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="container relative">
          <motion.div {...fadeUp} className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">/ Os Nossos Valores</div>
            <h2 className="font-display text-4xl lg:text-6xl text-balance">
              Três princípios que sustentam cada projeto.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                n: "01",
                title: "Exigência",
                desc: "Garantimos um trabalho detalhado e feito ao pormenor, satisfazendo as necessidades do cliente para atingir um trabalho de excelência. Através de parceiros e colaboradores especialistas, a excelência é o nosso patamar.",
              },
              {
                n: "02",
                title: "Responsabilidade",
                desc: "Asseguramos serviços e produtos de qualidade, que satisfaçam as exigências dos nossos clientes. Comprometemo-nos a cumprir todos os requisitos legais necessários para uma maior eficácia no trabalho.",
              },
              {
                n: "03",
                title: "Qualidade",
                desc: "Através de um trabalho realizado por especialistas na área do alumínio, concretizamos projetos com elevada qualidade, cumprindo todas as normas regulamentares e normativas.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.12 }}
                className="border-t border-primary-foreground/20 pt-8"
              >
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-display text-accent text-lg">{v.n}</span>
                  <h3 className="font-display text-3xl">{v.title}</h3>
                </div>
                <p className="text-primary-foreground/75 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-24 lg:py-32 bg-background">
        <div className="container">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">/ Trabalhos de Excelência</div>
              <h2 className="font-display text-4xl lg:text-6xl text-primary text-balance max-w-2xl">
                Projetos recentes.
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="#contactos">Iniciar o seu projeto <ArrowRight className="ml-1" /></a>
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-6">
            {[
              { img: projectSchool, title: "Escola Maria Rosa Araújo", tag: "Obra Técnica", span: "lg:col-span-7 lg:row-span-2" },
              { img: projectSkylight, title: "Claraboia Redonda", tag: "Claraboias", span: "lg:col-span-5" },
              { img: projectHouse, title: "Casa Habitacional", tag: "Moradia", span: "lg:col-span-5" },
            ].map((p, i) => (
              <motion.a
                key={p.title}
                href="#contactos"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className={`group relative overflow-hidden bg-primary ${p.span} aspect-[4/3] lg:aspect-auto`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
                  <div className="text-xs uppercase tracking-[0.2em] text-accent mb-3">{p.tag}</div>
                  <h3 className="font-display text-2xl lg:text-3xl flex items-center justify-between gap-4">
                    {p.title}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACTOS */}
      <section id="contactos" className="py-24 lg:py-32 bg-surface">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp}>
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">/ Podemos Ajudar?</div>
              <h2 className="font-display text-4xl lg:text-6xl text-primary text-balance mb-8">
                Vamos falar do seu próximo projeto.
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-lg">
                Diga-nos o que precisa. Respondemos rapidamente com aconselhamento técnico e um orçamento sem
                compromisso.
              </p>

              <div className="space-y-6">
                <a href={`tel:${PHONE}`} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Telefone</div>
                    <div className="font-display text-2xl text-primary group-hover:text-accent transition-colors">
                      (+351) 917 069 477
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Chamada para rede móvel nacional</div>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                    <div className="font-display text-2xl text-primary group-hover:text-accent transition-colors">
                      {EMAIL}
                    </div>
                  </div>
                </a>
                <a href="https://goo.gl/maps/WNTVgYktzyZTzRQr8" target="_blank" rel="noreferrer" className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-accent transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Sede</div>
                    <div className="font-display text-xl text-primary group-hover:text-accent transition-colors leading-tight">
                      Rua da Pedreira, Pedrome
                      <br />2945-183 Santa Catarina da Serra
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.form
              {...fadeUp}
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = `Nome: ${data.get("name")}%0A%0AContacto: ${data.get("phone")}%0A%0AMensagem: ${data.get("message")}`;
                window.location.href = `mailto:${EMAIL}?subject=Pedido de orçamento — CaixiSerra&body=${body}`;
              }}
              className="bg-primary p-10 lg:p-12 text-primary-foreground shadow-elegant"
            >
              <h3 className="font-display text-3xl mb-2">Pedido de orçamento</h3>
              <p className="text-primary-foreground/70 mb-8 text-sm">Resposta em 24h úteis.</p>
              <div className="space-y-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-primary-foreground/70 mb-2 block">Nome</label>
                  <input
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-primary-foreground/30 py-3 focus:outline-none focus:border-accent transition-colors text-primary-foreground placeholder:text-primary-foreground/40"
                    placeholder="O seu nome"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-primary-foreground/70 mb-2 block">Email ou Telefone</label>
                  <input
                    name="phone"
                    required
                    className="w-full bg-transparent border-b border-primary-foreground/30 py-3 focus:outline-none focus:border-accent transition-colors text-primary-foreground placeholder:text-primary-foreground/40"
                    placeholder="Como o contactamos"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-primary-foreground/70 mb-2 block">Mensagem</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-primary-foreground/30 py-3 focus:outline-none focus:border-accent transition-colors text-primary-foreground placeholder:text-primary-foreground/40 resize-none"
                    placeholder="Conte-nos sobre o seu projeto"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-10 w-full rounded-none h-14 bg-accent hover:bg-accent/90 text-accent-foreground text-base">
                Enviar pedido <ArrowRight className="ml-1" />
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-primary-foreground py-12">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-primary-foreground/10">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl text-primary-foreground">CAIXI</span>
              <span className="font-display text-2xl text-accent">SERRA</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
              <a href="#servicos" className="hover:text-accent">Serviços</a>
              <a href="#projetos" className="hover:text-accent">Projetos</a>
              <a href="#contactos" className="hover:text-accent">Contactos</a>
              <a href="https://facebook.com/caixiserra" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-accent">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="pt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-primary-foreground/50">
            <div>© {new Date().getFullYear()} CaixiSerra — Caixilharia de Alumínio. Todos os direitos reservados.</div>
            <div>Santa Catarina da Serra · Leiria · Portugal</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
