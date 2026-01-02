import { Project } from "@shared/schema";
import { ExternalLink, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SimulationCardProps {
  project: Project;
  index: number;
}

export function SimulationCard({ project, index }: SimulationCardProps) {
  const isDesmos = project.link.includes("desmos.com/calculator");
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group" data-testid={`card-simulation-${project.id}`}>
        <CardHeader className="p-4 flex flex-row items-center justify-between gap-4 border-b border-border bg-muted/30">
          <h3 className="font-serif text-lg font-semibold text-foreground truncate">
            {project.title}
          </h3>
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-primary/10 rounded-md transition-colors text-primary shrink-0"
            title="Open in new tab"
            data-testid={`link-open-simulation-${project.id}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </CardHeader>

        <div className="relative aspect-video bg-muted/20 w-full">
          {isDesmos ? (
            <iframe 
              src={project.link + "?embed"} 
              className="w-full h-full border-0"
              title={project.title}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-4 p-4 rounded-full bg-primary/10">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Interactive simulation
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:bg-primary/90 transition-colors"
                data-testid={`button-launch-simulation-${project.id}`}
              >
                Launch Simulation
              </a>
            </div>
          )}
        </div>
        
        <CardContent className="p-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            {project.description || "Interactive geometric simulation of market maker mechanics."}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
