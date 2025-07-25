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
  imageThumb?: string;
  category: string;
  longDescription?: string; // optional
};

export const projects: Project[] = [
  {
    title: "Transformer Dashboard",
    slug: "transformer-dashboard",
    description:
      "This dashboard monitors top oil temperatures in distribution transformers in real-time using a live Supabase backend. Helps visualize transformer performance and identify overheating risks.",
    why: "This tool is aimed at the electrical utility industry which I am currently developing temperature sensors for. The dashboard allows utilities and asset managers to use temperature sensor data to monitor transformers and proactively size up an overloaded transformer before it leads to an outage.",
    features: [
      "Real-time temperature monitoring with scheduled updates via cron job.",
      "Visual temperature dials and interactive chart with selectable time ranges (1d, 1w, 1m).",
      "Filter, search, and sort transformer by Serial Number or attribute.",
      "Transformer inspection form to record and store transformer condition data.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Next.js (App Router)",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "Full-Stack",
      "Cron Jobs",
    ],
    githubUrl:
      "https://github.com/stephengilbert1/Transformer-Dashboard-Fullstack",
    demoUrl: "https://transformer-dashboard-fullstack.vercel.app/",
    image1: {
      src: "/images/transformer-dashboard-table-inspections.png",
      caption:
        "Table view showing all monitored transformers with the current temperature and overheating status. Maintenence teams can log inspections to a database directly from the dashboard.",
    },
    image2: {
      src: "/images/transformer-detail-panel.png",
      caption:
        "Summary dials and chart view showing the selected transformer top oil temperature over the chosen period.",
    },
    imageThumb: "/images/transformer-dashboard-symbol.png",
    category: "Transformers",
  },
  {
    title: "Transformer Oil Expansion",
    slug: "transformer_tool_tailwind",
    description:
      "Estimates oil rise due to thermal expansion in distribution transformers. Used by transformer designers, transformer refurbishers and component manufacturers.",
    why: "The current method for determining the oil rise for a transformer design is to either use an excel document with formula or a table that is less accurate due to the lack of granularity. This tool, being web based, convieniently helps designers, refurbishers, and field techs visualize how oil levels change from ambient to high operating temperatures—ensuring proper clearances around critical components.",
    features: [
      "Supports round (pole-top) and rectangular (pad-mount) tanks geometries.",
      "Metric and imperial unit options",
      "Visual display of oil levels at ambient and elevated temperatures.",
      "Web based - convienient to use even on mobile or tablet such as in the manufacturing plant.",
    ],
    tags: ["React", "TypeScript", "Next.js (App Router)", "Tailwind CSS"],
    githubUrl: "https://github.com/stephengilbert1/transformer_tool_tailwind",
    demoUrl: "https://oil-rise-tool.vercel.app/",
    image1: {
      src: "/images/transformer-oil-rise-form.png",
      caption: "Form to enter geometric inputs for a given transformer design.",
    },
    image2: {
      src: "/images/transformer-oil-rise-results.png",
      caption:
        "Results showing the oil expansion and rise as well as a visualisation of the oil levels at ambient and hot temperatures relative to the size of the transformer.",
    },
    imageThumb: "/images/oil-rise-symbol.png",
    category: "Transformers",
  },
  {
    title: "Yard Inspection Report",
    slug: "yard-inspection-report",
    description:
      "This Yard Inspection Report tool allows engineers in the field to record transformer inspections in batches and store the data in a table stored on Neon.",
    why: "The current method for collecting data during utility yard inspections is with pen and paper and then entering the data manually once back at the office. When inspecting a large yard there are often large quantities of transformers with common attributes. This tool helps engineers efficiently collect meaningful data when in the field.",
    features: [
      "Batch entry form for transformers with shared attributes",
      "GraphQL API connected to a PostgreSQL database",
      "Deployed to Vercel with Prisma schema synced to Neon DB",
      "Export to CSV",
    ],
    tags: [
      "React",
      "Typescript",
      "Next.js",
      "Tailwind CSS",
      "GraphQL",
      "PostgreSQL",
      "Prisma",
    ],
    githubUrl: "https://github.com/stephengilbert1/yard-inspection-report",
    demoUrl: "https://yard-inspection-report.vercel.app/",
    image1: {
      src: "/images/yard-inspection-report-form.png",
      caption:
        "Form to batch enter transformers with common attributes during a utility yard inspection. Entries are submitted to a Neon database.",
    },
    image2: {
      src: "/images/yard-inspection-report-table.png",
      caption:
        "Table view showing all the transformers added during a given yard inspection. Export to CSV option allows the backend to be disconnected and keep all data client side to simplify the security of managing customer data.",
    },
    imageThumb: "/images/yard-inspection-symbol.png",
    category: "Data Collection",
  },
  {
    title: "Sensor Configuration Guide",
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
