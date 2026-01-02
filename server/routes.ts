import type { Express } from "express";
import type { Server } from "http";
import { projects } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/projects", (_req, res) => {
    res.json(projects);
  });

  return httpServer;
}
