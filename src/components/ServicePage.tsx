import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export interface ServicePageProps {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  features: string[];
  applications: string[];
  process: { n: string; title: string; desc: string }[];
}

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const ServicePage = ({
  slug,
  title,
  tagline,
  intro,
  seoTitle,
  seoDescription,
  heroImage,
  features,
  applications,
  process,
}: ServicePageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title={seoTitle} description={seoDescription} path={`/servicos/${slug}`} />
      <SiteHeader />

      <section className="container pt-16 lg:pt-24 pb-16">
        <div className="editorial-num text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground link-underline">Início</Link> · <Link to="/#servicos" className="hover:text-foreground link-underline">Serviços</Link> · {title}
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-8xl tracking-tight text-balance"
        >
          {title}
        </motion.h1>
        <p className="mt-8 max-w-2xl text-foreground/70 text-xl leading-relaxed">{tagline}</p>
      </section>

      <section className="container pb-24">
        <div className="aspect-[16/8] overflow-hidden bg-muted">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="container pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="editorial-num text-muted-foreground mb-6">(01) — Sobre o serviço</div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-balance">
              O que fazemos <span className="italic-serif text-accent">e como</span>.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="lg:col-span-7 text-lg text-foreground/70 leading-relaxed">
            <p>{intro}</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border py-24 lg:py-32">
        <div className="container grid lg:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="editorial-num text-muted-foreground mb-6">(02) — Características</div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-balance">
              Vantagens <span className="italic-serif text-accent">técnicas</span>.
            </h2>
          </motion.div>
          <motion.ul {...fadeUp} className="lg:col-span-7 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-4 py-4 rule-b text-lg">
                <Check className="w-5 h-5 mt-1 shrink-0 text-accent" />
                <span className="text-foreground/80">{f}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="container py-24 lg:py-32">
        <motion.div {...fadeUp} className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-3 editorial-num text-muted-foreground">(03) — Processo</div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">
              Do projecto <span className="italic-serif text-accent">à execução</span>.
            </h2>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((p, i) => (
            <motion.div key={p.n} {...fadeUp} transition={{ duration: 0.7, delay: i * 0.08 }} className="rule-t pt-6">
              <div className="editorial-num text-accent mb-3">{p.n}</div>
              <h3 className="font-display text-2xl mb-3 tracking-tight">{p.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border py-24">
        <div className="container">
          <motion.div {...fadeUp} className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-3 editorial-num text-muted-foreground">(04) — Aplicações</div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-4xl md:text-5xl tracking-tight text-balance">
                Onde <span className="italic-serif text-accent">aplicamos</span>.
              </h2>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((a) => (
              <div key={a} className="bg-background p-6 border border-border">
                <div className="font-display text-xl">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background py-24 lg:py-32">
        <div className="container text-center max-w-3xl">
          <h2 className="font-display text-5xl md:text-7xl tracking-tight text-balance">
            Falamos sobre <span className="italic-serif text-accent">o seu projecto?</span>
          </h2>
          <p className="mt-8 text-background/70 text-lg max-w-xl mx-auto">
            Visita técnica gratuita e orçamento sem compromisso. No distrito de Viseu e região centro.
          </p>
          <Button asChild size="lg" className="mt-12 rounded-none h-14 px-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/#contacto" className="flex items-center gap-3 editorial-num">
              Pedir orçamento <ArrowUpRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ServicePage;
