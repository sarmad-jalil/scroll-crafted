import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import ParallaxSection from "@/components/animations/ParallaxSection";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";

const caseStudies: Record<string, {
  title: string;
  category: string;
  year: string;
  heroImage: string;
  description: string;
  challenge: string;
  approach: string;
  result: string;
  images: string[];
  details: { label: string; value: string }[];
  nextProject: { title: string; slug: string };
}> = {
  luminance: {
    title: "Luminance",
    category: "Short Film",
    year: "2025",
    heroImage: project1,
    description: "A meditative exploration of light and architecture — how spaces shape our emotions and the invisible forces that guide our perception.",
    challenge: "Capturing the essence of sacred geometry in modern architecture while maintaining an intimate, human perspective throughout the narrative.",
    approach: "We spent three months studying light patterns in brutalist structures, mapping the sun's journey through concrete corridors to find those rare, fleeting moments of transcendence.",
    result: "Luminance premiered at Sundance 2025, earning a Special Jury Prize for cinematography. The film has since been acquired for global distribution.",
    images: [showcase1, showcase2],
    details: [
      { label: "Director", value: "REEL Studio" },
      { label: "Duration", value: "18 minutes" },
      { label: "Format", value: "4K Digital" },
      { label: "Sound", value: "Spatial Audio" },
    ],
    nextProject: { title: "Echoes", slug: "echoes" },
  },
  echoes: {
    title: "Echoes",
    category: "Brand Film",
    year: "2025",
    heroImage: project2,
    description: "A brand narrative for a sustainable ocean technology company, visualizing the connection between innovation and nature's resilience.",
    challenge: "Translating complex deep-sea technology into an emotionally compelling visual story that resonates with both investors and the public.",
    approach: "Underwater cinematography combined with macro photography and CGI-enhanced sequences, blending the real with the imagined.",
    result: "The campaign drove a 340% increase in brand awareness and helped secure $12M in Series B funding within three months of launch.",
    images: [project1, showcase2],
    details: [
      { label: "Client", value: "OceanTech" },
      { label: "Duration", value: "3 minutes" },
      { label: "Format", value: "8K HDR" },
      { label: "Reach", value: "12M views" },
    ],
    nextProject: { title: "Nocturne", slug: "nocturne" },
  },
};

// Fallback for unknown slugs
const defaultStudy = caseStudies.luminance;

const CaseStudy = () => {
  const { slug } = useParams();
  const study = caseStudies[slug || ""] || defaultStudy;
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[80vh] md:h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover"
            width={800}
            height={1000}
          />
          <div className="absolute inset-0 bg-background/50" />
          <div className="absolute inset-0 cinematic-overlay" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-end section-padding pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          <motion.p
            className="text-sm tracking-[0.3em] uppercase text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {study.category} · {study.year}
          </motion.p>

          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-text-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {study.title}
          </motion.h1>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <ScrollReveal>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6">Overview</p>
            </ScrollReveal>
            <TextReveal
              text={study.description}
              as="p"
              className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground"
            />
          </div>
          <div className="md:col-span-4 space-y-6">
            {study.details.map((d, i) => (
              <ScrollReveal key={d.label} delay={i * 0.1}>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">{d.label}</p>
                  <p className="text-foreground">{d.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visual break */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {study.images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
              <ParallaxSection speed={i === 0 ? 0.1 : -0.1}>
                <img
                  src={img}
                  alt={`${study.title} visual ${i + 1}`}
                  className="w-full aspect-video object-cover rounded-lg"
                  loading="lazy"
                  width={1280}
                  height={720}
                />
              </ParallaxSection>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Story breakdown */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto space-y-20">
          {[
            { label: "The Challenge", text: study.challenge },
            { label: "The Approach", text: study.approach },
            { label: "The Result", text: study.result },
          ].map((block, i) => (
            <ScrollReveal key={block.label} delay={0.1}>
              <div className="border-t border-border pt-10">
                <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6">{block.label}</p>
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground">{block.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-border">
        <Link
          to={`/case-study/${study.nextProject.slug}`}
          className="group section-padding block"
        >
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Next Project</p>
              <h3 className="font-serif text-4xl md:text-6xl text-foreground group-hover:text-primary transition-colors duration-300">
                {study.nextProject.title}
              </h3>
            </div>
            <ArrowRight className="w-8 h-8 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default CaseStudy;
