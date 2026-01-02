import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ResearchCard } from "@/components/ResearchCard";
import { SimulationCard } from "@/components/SimulationCard";
import { useProjects } from "@/hooks/use-projects";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { data: projects, isLoading, error } = useProjects();

  const researchProjects = projects?.filter(p => p.category === 'research') || [];
  const simulationProjects = projects?.filter(p => p.category === 'simulation') || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <p className="font-mono text-sm text-muted-foreground">Initializing...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-destructive font-mono">Failed to load content. Please refresh.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Header />
      
      <main>
        <Hero />

        {/* Research Section */}
        <section id="research" className="py-24 border-t border-white/5 relative bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4 font-mono flex items-center gap-3">
                <span className="text-primary">01.</span> RESEARCH
              </h2>
              <div className="h-px w-24 bg-primary" />
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Our published papers on Concentrated Liquidity, Superelliptical curves, and N-dimensional market making structures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchProjects.map((project, idx) => (
                <ResearchCard key={project.id} project={project} index={idx} />
              ))}
              {researchProjects.length === 0 && (
                <div className="col-span-full py-12 text-center border border-dashed border-white/10 rounded-lg">
                  <p className="font-mono text-muted-foreground">Research entries loading...</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Simulations Section */}
        <section id="simulations" className="py-24 border-t border-white/5 bg-gradient-to-b from-background to-black/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4 font-mono flex items-center gap-3">
                <span className="text-primary">02.</span> SIMULATIONS
              </h2>
              <div className="h-px w-24 bg-primary" />
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Interactive Desmos models demonstrating our geometric invariants in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {simulationProjects.map((project, idx) => (
                <SimulationCard key={project.id} project={project} index={idx} />
              ))}
              {simulationProjects.length === 0 && (
                <div className="col-span-full py-12 text-center border border-dashed border-white/10 rounded-lg">
                  <p className="font-mono text-muted-foreground">Simulations loading...</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-mono font-bold text-lg mb-1">80 DAYZ INC.</h4>
            <p className="text-xs text-muted-foreground font-mono">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
          
          <div className="flex gap-8 text-xs font-mono text-muted-foreground">
            <span>SAN FRANCISCO</span>
            <span>NEW YORK</span>
            <span>TOKYO</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
