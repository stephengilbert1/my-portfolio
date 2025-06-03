// src/lib/projectData.ts
export type Project = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  category: string;
  longDescription?: string; // optional
};

export const projects: Project[] = [
  {
    title: "Transformer Temperature Dashboard",
    slug: "transformer-dashboard",
    description: "Monitors top oil temperature of transformers.",
    tags: ["Next.js", "Tailwind CSS", "Recharts", "Data Viz", "Field Tools"],
    githubUrl: "https://github.com/stephengilbert1/transformer_dashboard",
    demoUrl: "https://transformer-dashboard.vercel.app/",
    category: "Transformers",
  },
  {
    title: "Transformer Oil Expansion Calculator",
    slug: "transformer_tool_tailwind",
    description:
      "Estimates oil expansion due to temperature in distribution transformers. Used by field techs and planners.",
    tags: ["Next.js", "Tailwind", "Forms"],
    githubUrl: "https://github.com/stephengilbert1/transformer_tool_tailwind",
    demoUrl: "https://transformer-tool-tailwind.vercel.app/",
    category: "Transformers",
  },
  {
    title: "Sensor Coniguration Guide",
    slug: "sensor-config-flow",
    description:
      "Determines which sensor configuration to order depending on manufacturers process.",
    tags: ["Next.js", "Tailwind CSS", "Form Logic", "UI Flow"],
    githubUrl: "https://github.com/stephengilbert1/sensor-config-flow",
    demoUrl: "https://sensor-config-flow.vercel.app/",
    category: "Transformers",
  },
  {
    title: "Ski DIN Calculator",
    slug: "ski-din-calculator",
    description:
      "Calculates ski binding DIN settings using ISO 11088 standard. Designed for skiers and techs.",
    tags: ["Next.js", "React", "Form Logic"],
    githubUrl: "https://github.com/stephengilbert1/ski-din-calculator",
    demoUrl: "https://ski-din-calculator-iota.vercel.app/",
    category: "Sports",
  },
  // Add more projects here as needed
];
