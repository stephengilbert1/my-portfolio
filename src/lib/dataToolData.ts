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
    title: "Transformer Data Pipeline",
    slug: "transformer-data-pipeline",
    description:
      "I’m exploring Python data tools, in this case Pandas, while pulling from the same Supabase database my full-stack dashboard uses. This turns raw transformer temperature readings into something you can explore and talk about.",
    why: "The goal is to build a real world data-science toolkit tested on real data and see what value this could bring to industry—data cleaning, summary statistics, rolling averages, thresholds, and identifying trends.",
    features: [
      "Pulls the last 30 days from my Supabase Postgres (same DB as my dashboard), with paging.",
      "Cleans timestamps and temps in pandas; builds simple summaries.",
      "Exports a small series.json file that the web page reads.",
      "Interactive chart (Chart.js): legend pills to toggle transformers, 24h/7d/30d window, optional threshold line.",
      "Better UX: fewer x-axis labels, auto-fit y-axis, wider layout, no layout shift.",
      "Easy to refresh: re-run the notebook/script and replace series.json.",
      "In progress: rolling-avg toggle, outlier flags, and download buttons.",
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
