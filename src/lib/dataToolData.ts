// src/lib/dataToolData.ts
export type DataTool = {
  title: string;
  slug: string;
  description: string;
  why: string;
  features: string[];
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  analysisUrl?: string; // HTML export link
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
  longDescription?: string; // optional, like in projects
};

export const dataTools: DataTool[] = [
  {
    title: "Transformer Thermal Health Monitoring",
    slug: "transformer-data-pipeline",
    description:
      "I’m exploring Python data tools like Pandas while pulling temperature data from my Supabase database—the same one used by my full-stack monitoring dashboard. This project transforms raw transformer temperature readings into actionable insights, enabling early detection of overheating risks.",
    why: "Transformers often suffer from thermal overloads leading to premature failures and unplanned outages, posing safety risks and increasing operating costs. Currently, many systems wait for failures before acting (“run-to-failure”). My goal is to build a real-world data science toolkit tested on actual transformer temperature data to provide early warnings through data cleaning, analysis, and visualization.",
    features: [
      "Pulls the last 30 days of temperature data from Supabase Postgres with paging support.",
      "Cleans and prepares timestamps and temperatures using Pandas; computes summary statistics and rolling averages.",
      "Exports a JSON data file consumed by an interactive Chart.js web chart.",
      "Chart includes toggles for transformers, time windows (24h, 7d, 30d), and optional threshold lines.",
      "Improved UX with fewer x-axis labels, auto y-axis fitting, and a widescreen layout.",
      "Easy refresh workflow: rerun notebook/script to update data and visuals seamlessly.",
      "In progress: rolling average toggle, outlier flags, and data download functionality.",
    ],
    tags: ["Python", "Pandas", "Matplotlib", "Supabase", "Data Analysis"],
    githubUrl: "https://github.com/stephengilbert1/transformer-data-pipeline",
    analysisUrl: "/tools/transformers/index.html",
    demoUrl: undefined,
    // image1: {
    //   src: "/images/transformer-data-pipeline-chart.png",
    //   caption:
    //     "Temperature trend chart with threshold line, shaded exceedances, and rolling average overlay.",
    // },
    // image2: {
    //   src: "/images/transformer-data-pipeline-table.png",
    //   caption:
    //     "Risk table showing average temperature, max temperature, and hours over threshold for each transformer.",
    // },
    // imageThumb: "/images/data-pipeline-symbol.png",
    category: "Transformers",
  },
];
