export interface Project {
  id: number;
  title: string;
  description: string | null;
  link: string;
  category: string;
  previewUrl: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Research on Concentrated Superelliptical Market Maker",
    description: "Analysis of market making algorithms using superelliptical geometry.",
    link: "https://arxiv.org/abs/2410.13265",
    category: "research",
    previewUrl: null,
  },
  {
    id: 2,
    title: "Concentrated N-dimensional AMM with Polar Coordinates in Rust",
    description: "Implementation and mathematical proofs for N-dimensional AMMs.",
    link: "https://arxiv.org/abs/2510.05428",
    category: "research",
    previewUrl: null,
  },
  {
    id: 3,
    title: "Orbital AMM swap function using superellipse geometry",
    description: "Interactive simulation of swap functions.",
    link: "https://www.desmos.com/calculator/2t4evqjqjj",
    category: "simulation",
    previewUrl: "https://www.desmos.com/calculator/2t4evqjqjj?embed",
  },
  {
    id: 4,
    title: "CCMM and CSEMM Simulation",
    description: "Comparative simulation of CCMM and CSEMM models.",
    link: "https://www.desmos.com/calculator/mbohmvmytg",
    category: "simulation",
    previewUrl: "https://www.desmos.com/calculator/mbohmvmytg?embed",
  },
];
