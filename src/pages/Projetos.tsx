import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import residentialImg from "@/assets/eco-residential.jpg";
import commercialImg from "@/assets/eco-commercial.jpg";
import sustainableImg from "@/assets/eco-sustainable.jpg";
import heroImg from "@/assets/eco-hero.jpg";

const projects = [
  { n: "01", title: "Habitação Coletiva", location: "Oliveira de Frades", year: "2024", category: "Residencial", img: residentialImg },
  { n: "02", title: "Edifício de Serviços", location: "Viseu", year: "2023", category: "Não Residencial", img: commercialImg },
  { n: "03", title: "Reabilitação de Fachada", location: "Lamego", year: "2024", category: "Fachada Ventilada", img: sustainableImg },
  { n: "04", title: "Moradia Unifamiliar V4", location: "Vouzela", year: "2023", category: "Residencial", img: heroImg },
  { n: "05", title: "ETICS — Edifício Multifamiliar", location: "Viseu", year: "2022", category: "Fachada", img: sustainableImg },
  { n: "06", title: "Reabilitação Integral", location: "São Pedro do Sul", year: "2022", category: "Reabilitação", img: residentialImg },
];

const categories = ["Todos", "Residencial", "Não Residencial", "Fachada Ventilada", "Fachada", "Reabilitação"];

const Projetos = () => {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Projetos — Ecofachadas | Construção e Fachadas no centro de Portugal"
        description="Portfolio de obras Ecofachadas: habitação, edifícios não residenciais, fachadas ventiladas, ETICS e reabilitação no distrito de Viseu."
        path="/projetos"
      />
      <SiteHeader />

      <section className="container pt-16 lg:pt-24 pb-12">
        <div className="editorial-num text-muted-foreground mb-6">(—) Portfolio</div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-8xl tracking-tight text-balance"
        >
          Projetos <span className="italic-serif text-accent">recentes</span>
        </motion.h1>
        <p className="mt-8 max-w-xl text-foreground/70 text-lg">
          Uma selecção de obras realizadas no distrito de Viseu e região centro entre 2022 e 2024.
        </p>

        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`editorial-num px-4 py-2 border transition-colors ${
                filter === c ? "bg-foreground text-background border-foreground" : "border-border text-foreground/70 hover:border-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <div className="editorial-num text-muted-foreground">{p.n} · {p.category}</div>
                  <h2 className="font-display text-3xl md:text-4xl tracking-tight mt-2">{p.title}</h2>
                  <div className="mt-2 text-foreground/60">{p.location} — {p.year}</div>
                </div>
                <ArrowUpRight className="w-6 h-6 text-foreground/40 group-hover:text-accent group-hover:rotate-45 transition-all duration-500" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Projetos;
