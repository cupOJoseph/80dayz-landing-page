import { motion } from "framer-motion";
import { ArrowDown, Sigma, Pi } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle graph paper background */}
      <div className="absolute inset-0 graph-paper opacity-60" />

      {/* Decorative math symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sigma className="absolute top-1/4 left-[10%] w-32 h-32 text-primary/5 rotate-12" />
        <Pi className="absolute bottom-1/4 right-[15%] w-24 h-24 text-accent/10 -rotate-6" />
        <div className="absolute top-1/3 right-[20%] font-serif text-8xl text-primary/5 rotate-3">
          f(x)
        </div>
        <div className="absolute bottom-1/3 left-[15%] font-mono text-6xl text-muted-foreground/10 -rotate-6">
          dx/dt
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1.5 mb-6 text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-md">
            Consulting & Research
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 text-foreground leading-tight">
            Applied Math for{" "}
            <span className="underline-sketch">Complex Markets.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We specialize in designing
            geometric systems and using applied mathematics
            to solve complex real world problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#research"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              data-testid="link-explore-research"
            >
              Explore Research
            </a>
            <a
              href="#simulations"
              className="px-6 py-3 border border-border bg-card hover:border-primary/50 font-medium rounded-md hover:text-primary transition-all"
              data-testid="link-view-simulations"
            >
              View Simulations
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-muted-foreground w-5 h-5" />
      </motion.div>
    </section>
  );
}
