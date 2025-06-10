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
    tags: [
      "Fullstack",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    githubUrl:
      "https://github.com/stephengilbert1/Transformer-Dashboard-Fullstack",
    demoUrl: "https://transformer-dashboard-fullstack.vercel.app/",
    category: "Transformers",
  },
  {
    title: "Transformer Oil Expansion Calculator",
    slug: "transformer_tool_tailwind",
    description:
      "Estimates oil expansion due to temperature in distribution transformers. Used by field techs and planners.",
    tags: ["Frontend", "Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/stephengilbert1/transformer_tool_tailwind",
    demoUrl: "https://transformer-tool-tailwind.vercel.app/",
    category: "Transformers",
  },
  {
    title: "Sensor Coniguration Guide",
    slug: "sensor-config-flow",
    description:
      "Determines which sensor configuration to order depending on manufacturers process.",
    tags: ["Frontend", "Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/stephengilbert1/sensor-config-flow",
    demoUrl: "https://sensor-config-flow.vercel.app/",
    category: "Transformers",
  },
  {
    title: "Ski DIN Calculator",
    slug: "ski-din-calculator",
    description:
      "Calculates ski binding DIN settings using ISO 11088 standard. Designed for skiers and techs.",
    tags: ["Next.js", "React"],
    githubUrl: "https://github.com/stephengilbert1/ski-din-calculator",
    demoUrl: "https://ski-din-calculator-iota.vercel.app/",
    category: "Sports",
  },
  {
    title: "Mountain Bike Tire Pressure Calculator",
    slug: "mtb-tire-pressure-calculator",
    description:
      "Recommends front and rear tire pressure based on rider and bike",
    tags: ["Vue", "Vite", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/stephengilbert1/mtb-tire-pressure",
    demoUrl: "https://mtb-tire-pressure.vercel.app/",
    category: "Sports",
  },
  // Add more projects here as needed
];
