import { Project } from "@shared/schema";
import { ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ResearchCardProps {
  project: Project;
  index: number;
}

export function ResearchCard({ project, index }: ResearchCardProps) {
  // Extract arxiv ID if present
  const arxivMatch = project.link.match(/arxiv\.org\/abs\/(\d+\.\d+)/);
  const arxivId = arxivMatch ? arxivMatch[1] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:border-primary/40 transition-colors group" data-testid={`card-research-${project.id}`}>
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="p-2.5 bg-primary/10 rounded-md">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            {arxivId && (
              <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                arXiv:{arxivId}
              </span>
            )}
          </div>

          <h3 className="text-lg font-serif font-semibold mb-3 group-hover:text-primary transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
            {project.description || "Research paper exploring advanced mathematical concepts in decentralized finance."}
          </p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline transition-colors mt-auto group/link"
            data-testid={`link-read-paper-${project.id}`}
          >
            Read Paper 
            <ExternalLink className="ml-1.5 w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
