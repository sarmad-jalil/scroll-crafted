import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, Play, ArrowRight } from "lucide-react";
import LoadingScreen from "@/components/animations/LoadingScreen";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import ParallaxSection from "@/components/animations/ParallaxSection";
import MagneticButton from "@/components/animations/MagneticButton";
import heroBg from "@/assets/hero-bg.jpg";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const selectedWorks = [
    { title: "Luminance", category: "Short Film", image: project1, slug: "luminance" },
    { title: "Echoes", category: "Brand Film", image: project2, slug: "echoes" },
    { title: "Nocturne", category: "Music Video", image: project3, slug: "nocturne" },
    { title: "Solstice", category: "Documentary", image: project4, slug: "solstice" },
  ];

  const processSteps = [
    { number: "01", title: "Discover", description: "Understanding the story, the vision, and the emotion behind every frame." },
    { number: "02", title: "Envision", description: "Crafting visual narratives that resonate — storyboards, mood boards, and motion tests." },
    { number: "03", title: "Create", description: "Bringing concepts to life through meticulous cinematography, editing, and sound design." },
    { number: "04", title: "Refine", description: "Polish every detail until the final piece moves audiences exactly as intended." },
  ];

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      {/* ═══════════════════════════════════════════
          Section 1: Cinematic Hero
          Full-screen hero with parallax image, title reveal, and scroll indicator
      ═══════════════════════════════════════════ */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img
            src={heroBg}
            alt="Cinematic landscape"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 cinematic-overlay" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p
            className="text-sm tracking-[0.4em] uppercase text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={!isLoading ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Creative Developer & Filmmaker
          </motion.p>

          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-text-hero mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Stories told<br />
            through <span className="text-gradient italic">motion</span>
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={!isLoading ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Crafting immersive digital experiences at the intersection of film and code.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={!isLoading ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ═══════════════════════════════════════════
          Section 2: Identity Statement
          Intro section with large text reveal and supporting copy
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-8">About</p>
          </ScrollReveal>
          <TextReveal
            text="I believe in the power of visual storytelling — where every frame, every interaction, every transition carries meaning."
            as="h2"
            className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-foreground"
          />
          <ScrollReveal delay={0.4}>
            <p className="mt-10 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              With over a decade of experience bridging creative direction and technical execution,
              I transform ideas into experiences that move people — literally and emotionally.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 3: Visual Showcase
          Cinematic image pair with parallax depth and play button overlay
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-section-alt overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-12">Visual Reel</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <ScrollReveal direction="left">
              <ParallaxSection speed={0.2}>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img
                    src={showcase1}
                    alt="Filmmaker in dramatic lighting"
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                  <div className="absolute inset-0 bg-background/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full border border-foreground/40 flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-6 h-6 text-foreground ml-1" />
                    </div>
                  </div>
                </div>
              </ParallaxSection>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <ParallaxSection speed={-0.15}>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg mt-12 md:mt-24">
                  <img
                    src={showcase2}
                    alt="Abstract light and geometry"
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                  <div className="absolute inset-0 bg-background/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full border border-foreground/40 flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-6 h-6 text-foreground ml-1" />
                    </div>
                  </div>
                </div>
              </ParallaxSection>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 4: Selected Works
          Project grid with hover effects and staggered reveals
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <ScrollReveal>
                <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Selected Works</p>
              </ScrollReveal>
              <TextReveal
                text="Featured Projects"
                as="h2"
                className="font-serif text-4xl md:text-6xl tracking-tight text-foreground"
              />
            </div>
            <ScrollReveal delay={0.3}>
              <Link
                to="/projects"
                className="hidden md:flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors line-reveal pb-1"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {selectedWorks.map((work, i) => (
              <ScrollReveal key={work.slug} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <Link to={`/case-study/${work.slug}`} className="group block">
                  <div className="overflow-hidden rounded-lg mb-5">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={800}
                      height={1000}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {work.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{work.category}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 5: Process / Philosophy
          Numbered steps with staggered reveals and a horizontal rule separator
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-section-alt">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Process</p>
          </ScrollReveal>
          <TextReveal
            text="How stories come to life"
            as="h2"
            className="font-serif text-4xl md:text-6xl tracking-tight text-foreground mb-16"
          />

          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="border-t border-border py-10 md:py-14 grid md:grid-cols-12 gap-6 items-start">
                  <span className="text-sm text-primary font-mono md:col-span-1">{step.number}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground md:col-span-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed md:col-span-8">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 6: Call to Action
          Minimal CTA with large text and magnetic button
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal
            text="Let's create something extraordinary together."
            as="h2"
            className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-10"
          />
          <ScrollReveal delay={0.4}>
            <MagneticButton>
              <a
                href="mailto:hello@reelstudio.com"
                className="inline-flex items-center gap-3 px-10 py-5 border border-primary text-primary text-sm tracking-[0.2em] uppercase rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="mt-20 flex items-center justify-center gap-10 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors line-reveal pb-1">Instagram</a>
              <a href="#" className="hover:text-foreground transition-colors line-reveal pb-1">Vimeo</a>
              <a href="#" className="hover:text-foreground transition-colors line-reveal pb-1">Behance</a>
              <a href="#" className="hover:text-foreground transition-colors line-reveal pb-1">LinkedIn</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 REEL Studio. All rights reserved.</p>
          <p>Crafted with care</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
