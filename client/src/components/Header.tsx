import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 p-2 rounded-sm border border-primary/20">
            <Terminal className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="font-mono text-xl font-bold tracking-tighter text-white">
              80 DAYZ INC.
            </h1>
            <p className="text-[10px] text-primary font-mono tracking-widest uppercase opacity-80">
              Applied Math & Geometry
            </p>
          </div>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#research" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
            ./RESEARCH
          </a>
          <a href="#simulations" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
            ./SIMULATIONS
          </a>
        </nav>
      </div>
    </header>
  );
}
