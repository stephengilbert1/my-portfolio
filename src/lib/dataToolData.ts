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
      "Pandas-based pipeline that analyzes transformer top-oil temperatures, flags threshold exceedances, and exports a clean risk table and styled trend charts.",
    why: "Provides a data analysis layer for the Transformer Dashboard, allowing field engineers and asset managers to generate actionable insights from temperature readings without manual data wrangling.",
    features: [
      "CSV export from Supabase with joined transformer metadata.",
      "Pandas-based cleaning, grouping, and KPI calculation.",
      "Matplotlib charts with threshold shading and rolling averages.",
      "Exports HTML analysis report for sharing via portfolio.",
    ],
    tags: ["Python", "Pandas", "Matplotlib", "Supabase", "Data Analysis"],
    githubUrl: "https://github.com/stephengilbert1/transformer-data-pipeline",
    analysisUrl: "/analysis/transformer_analysis.html",
    demoUrl: undefined,
    image1: {
      src: "/images/transformer-data-pipeline-chart.png",
      caption:
        "Temperature trend chart with threshold line, shaded exceedances, and rolling average overlay.",
    },
    image2: {
      src: "/images/transformer-data-pipeline-table.png",
      caption:
        "Risk table showing average temperature, max temperature, and hours over threshold for each transformer.",
    },
    imageThumb: "/images/data-pipeline-symbol.png",
    category: "Transformers",
  },
];
