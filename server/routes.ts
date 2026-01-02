import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // Seed data
  const existing = await storage.getProjects();
  if (existing.length === 0) {
    console.log("Seeding database...");
    
    // Research
    await storage.createProject({
      title: "Research on Concentrated Superelliptical Market Maker",
      link: "https://arxiv.org/abs/2410.13265",
      category: "research",
      description: "Analysis of market making algorithms using superelliptical geometry."
    });
    
    await storage.createProject({
      title: "Concentrated N-dimensional AMM with Polar Coordinates in Rust",
      link: "https://arxiv.org/abs/2510.05428",
      category: "research",
      description: "Implementation and mathematical proofs for N-dimensional AMMs."
    });

    // Simulations
    await storage.createProject({
      title: "Orbital AMM swap function using superellipse geometry",
      link: "https://www.desmos.com/calculator/2t4evqjqjj",
      category: "simulation",
      previewUrl: "https://www.desmos.com/calculator/2t4evqjqjj?embed",
      description: "Interactive simulation of swap functions."
    });

    await storage.createProject({
      title: "CCMM and CSEMM Simulation",
      link: "https://www.desmos.com/calculator/mbohmvmytg",
      category: "simulation",
      previewUrl: "https://www.desmos.com/calculator/mbohmvmytg?embed",
      description: "Comparative simulation of CCMM and CSEMM models."
    });
  }

  return httpServer;
}
