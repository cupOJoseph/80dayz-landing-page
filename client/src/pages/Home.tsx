import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ResearchCard } from "@/components/ResearchCard";
import { SimulationCard } from "@/components/SimulationCard";
import { useProjects } from "@/hooks/use-projects";
import { Loader2, BookOpen, FlaskConical } from "lucide-react";

export default function Home() {
  const { data: projects, isLoading, error } = useProjects();

  const researchProjects = projects?.filter(p => p.category === 'research') || [];
  const simulationProjects = projects?.filter(p => p.category === 'simulation') || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <p className="font-mono text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-destructive">Failed to load content. Please refresh.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Header />
      
      <main>
        <Hero />

        {/* Research Section */}
        <section id="research" className="py-20 border-t border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  Research Papers
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Our published work on concentrated liquidity, superelliptical curves, 
                and N-dimensional market making structures. All papers are available on arXiv.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchProjects.map((project, idx) => (
                <ResearchCard key={project.id} project={project} index={idx} />
              ))}
              {researchProjects.length === 0 && (
                <div className="col-span-full py-12 text-center border border-dashed border-border rounded-md">
                  <p className="text-muted-foreground">Research papers loading...</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Simulations Section */}
        <section id="simulations" className="py-20 border-t border-border bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <FlaskConical className="w-6 h-6 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  Interactive Simulations
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Play with our mathematical models in real-time. These Desmos calculators 
                demonstrate the geometric invariants behind our research.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {simulationProjects.map((project, idx) => (
                <SimulationCard key={project.id} project={project} index={idx} />
              ))}
              {simulationProjects.length === 0 && (
                <div className="col-span-full py-12 text-center border border-dashed border-border rounded-md">
                  <p className="text-muted-foreground">Simulations loading...</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h4 className="font-serif font-bold text-lg mb-0.5">80 Dayz Inc.</h4>
              <p className="text-xs text-muted-foreground">
                Applied Mathematics & Geometry Research
              </p>
            </div>
            
            <p className="text-xs text-muted-foreground font-mono">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
