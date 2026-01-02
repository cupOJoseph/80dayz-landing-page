import { Project } from "@shared/schema";
import { ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface ResearchCardProps {
  project: Project;
  index: number;
}

export function ResearchCard({ project, index }: ResearchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 p-6 flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
      </div>

      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-primary/10 rounded-sm">
          <FileText className="w-6 h-6 text-primary" />
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          RES-{String(project.id).padStart(3, '0')}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-muted-foreground mb-6 flex-grow font-mono text-sm leading-relaxed">
        {project.description || "Research paper exploring advanced mathematical concepts in decentralized finance."}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto group/link"
      >
        READ PAPER 
        <ExternalLink className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
      </a>
      
      {/* Corner decorations */}
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/30 group-hover:border-primary transition-colors" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/30 group-hover:border-primary transition-colors" />
    </motion.div>
  );
}
