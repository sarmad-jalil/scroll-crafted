import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";

const categories = ["All", "Film", "Brand", "Music", "Documentary"];

const projects = [
  { title: "Luminance", category: "Film", image: project1, slug: "luminance", year: "2025" },
  { title: "Echoes", category: "Brand", image: project2, slug: "echoes", year: "2025" },
  { title: "Nocturne", category: "Music", image: project3, slug: "nocturne", year: "2024" },
  { title: "Solstice", category: "Documentary", image: project4, slug: "solstice", year: "2024" },
  { title: "Signal", category: "Brand", image: showcase1, slug: "signal", year: "2024" },
  { title: "Prism", category: "Film", image: showcase2, slug: "prism", year: "2023" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-32">
      <div className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Portfolio</p>
          </ScrollReveal>
          <TextReveal
            text="Selected Works"
            as="h1"
            className="font-serif text-5xl md:text-7xl tracking-tight text-foreground mb-12"
          />

          {/* Category filters */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-sm tracking-[0.15em] uppercase rounded-full border transition-all duration-300 ${
                    activeCategory === cat
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project grid with AnimatePresence for filter transitions */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link to={`/case-study/${project.slug}`} className="group block">
                    <div className="overflow-hidden rounded-lg mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        width={800}
                        height={1000}
                      />
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.category} · {project.year}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 mt-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
