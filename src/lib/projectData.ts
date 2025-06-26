// src/lib/projectData.ts
export type Project = {
  title: string;
  slug: string;
  description: string;
  why: string;
  features: string[];
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  image1?: {
    src: string;
    caption: string;
  };
  image2?: {
    src: string;
    caption: string;
  };
  category: string;
  longDescription?: string; // optional
};

export const projects: Project[] = [
  {
    title: "Transformer Temperature Dashboard",
    slug: "transformer-dashboard",
    description:
      "This dashboard monitors top oil temperatures in distribution transformers in real-time using a live Supabase backend. Helps visualize transformer performance and identify overheating risks.",
    why: "This tool is aimed at the electrical utility industry which I am currently working on developing temperature sensors for. The dashboard allows utilities and asset managers to use temperature sensor data to monitor transformers and proactively size up an overloaded transformer before it leads to an outage.",
    features: [
      "Real-time temperature updates via a scheduled cron job.",
      "Filter, search, and sort transformer by Serial Number or attribute",
      "Store key transformer metadata",
      "Visualise real-time temperature history",
      "Interactive chart with selectable time ranges (1d, 1w, 1m)",
    ],
    tags: [
      "Fullstack",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Cron Jobs",
    ],
    githubUrl:
      "https://github.com/stephengilbert1/Transformer-Dashboard-Fullstack",
    demoUrl: "https://transformer-dashboard-fullstack.vercel.app/",
    image1: {
      src: "/images/transformer-dashboard-table.png",
      caption:
        "Table view showing the all monitored transformers with the current temperature and overheating status",
    },
    image2: {
      src: "/images/transformer-dashboard-chart.png",
      caption:
        "Chart view showing the selected transformer top oil temperature over the chosen period",
    },
    category: "Transformers",
  },
  {
    title: "Transformer Oil Expansion Calculator",
    slug: "transformer_tool_tailwind",
    description:
      "Estimates oil rise due to temperature in distribution transformers. Used by field techs and planners.",
    why: "This tool helps designers, refurbishers, and field techs visualize how oil levels change from ambient to high operating temperatures—ensuring proper clearances around critical components.",
    features: [
      "Supports round (pole-top) and rectangular (pad-mount) tanks geometries",
      "Metric and imperial unit options",
      "Visual display of oil levels at ambient and elevated temperatures",
    ],
    tags: ["Frontend", "Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/stephengilbert1/transformer_tool_tailwind",
    demoUrl: "https://transformer-tool-tailwind.vercel.app/",
    category: "Transformers",
  },
  {
    title: "Yard Inspection Report",
    slug: "yard-inspection-report",
    description:
      "Records transformer inspections in batches and stores data in a table.",
    why: "This tool helps engineers collect meaningful data when in the field",
    features: [
      "Batch entry form for transformers with shared attributes",
      "GraphQL API connected to a PostgreSQL database",
      "Deployed to Vercel with Prisma schema synced to Neon DB",
    ],
    tags: [
      "Fullstack",
      "Next.js",
      "React",
      "Tailwind CSS",
      "GraphQL",
      "PostgreSQL",
      "Prisma",
    ],
    githubUrl: "https://github.com/stephengilbert1/yard-inspection-report",
    demoUrl: "https://yard-inspection-report.vercel.app/",
    category: "Data Collection",
  },
  {
    title: "Sensor Coniguration Guide",
    slug: "sensor-config-flow",
    description:
      "Helps transformer manufacturers determine the correct sensor configuration based on their production process.",
    why: "This tool makes it simple for transformer manufacturers to determine the right sensor configuration and submit an inquiry to the sales team.",
    features: [
      "Clear flowchart-style guidance",
      "Contact form submits configuration choice with customer info directly to sales team",
    ],
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
    why: "This tool makes it simple to calculate the correct front and rear DIN settings for your ski bindings, based on ISO 11088 safety standards.",
    features: [
      "Accounts for skier size, age, and skill level",
      "Metric and imperial unit options",
      "Clean, responsive layout",
    ],
    tags: ["Next.js", "React"],
    githubUrl: "https://github.com/stephengilbert1/ski-din-calculator",
    demoUrl: "https://ski-din-calculator-iota.vercel.app/",
    category: "Sports",
  },
  {
    title: "Mountain Bike Tire Pressure Calculator",
    slug: "mtb-tire-pressure-calculator",
    description:
      "Recommends front and rear tire pressure based on rider weight, tire size, and terrain.",
    why: "This tool helps mountain bikers find suitable tire pressures for better grip, comfort, and flat protection. Customized for rider weight, tire size, and riding style.",
    features: [
      "Supports multiple tire widths and wheel sizes",
      "Adjusts for terrain and riding style",
    ],
    tags: ["Vue", "Vite", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/stephengilbert1/mtb-tire-pressure",
    demoUrl: "https://mtb-tire-pressure.vercel.app/",
    category: "Sports",
  },

  // Add more projects here as needed
];
