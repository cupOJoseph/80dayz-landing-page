import { Project } from "@shared/schema";
import { ExternalLink, Play, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";

interface SimulationCardProps {
  project: Project;
  index: number;
}

export function SimulationCard({ project, index }: SimulationCardProps) {
  // Check if it's a desmos link to embed
  const isDesmos = project.link.includes("desmos.com/calculator");
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border border-border bg-card/30 overflow-hidden group"
    >
      <div className="border-b border-border p-4 flex items-center justify-between bg-card/80 backdrop-blur-sm">
        <h3 className="font-mono text-lg font-bold text-foreground truncate pr-4">
          {project.title}
        </h3>
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-primary/20 rounded transition-colors text-primary"
          title="Open in new tab"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="relative aspect-video bg-black/50 w-full">
        {isDesmos ? (
          <iframe 
            src={project.link.replace("/calculator/", "/calculator/") + "?embed"} 
            className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            title={project.title}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-card to-background">
            <div className="mb-4 p-4 rounded-full bg-primary/10 border border-primary/20">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <p className="font-mono text-sm text-muted-foreground mb-4">
              Interactive simulation available externally
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              LAUNCH SIMULATION
            </a>
          </div>
        )}
        
        {/* Overlay for interaction hint on iframe hover if needed */}
        {isDesmos && (
          <div className="absolute inset-0 pointer-events-none bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity border-2 border-primary/20" />
        )}
      </div>
      
      <div className="p-4 bg-card/50 border-t border-border">
         <p className="text-sm text-muted-foreground font-mono">
           {project.description || "Interactive geometric simulation of market maker mechanics."}
         </p>
      </div>
    </motion.div>
  );
}
