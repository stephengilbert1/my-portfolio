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
  interactiveRawDataUrl?: string; // HTML export link
  plot1Url?: string; // HTML export link
  plot2Url?: string; // HTML export link
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
  longDescription?: string;
  sections?: {
    id: string;
    label: string;
    content: string;
    contents: {
      id: string;
      label: string;
      urlKey: keyof DataTool;
      description: string;
    }[];
  }[];
};

export const dataTools: DataTool[] = [
  {
    title: "Transformer Thermal Health Monitoring",
    slug: "transformer-data-pipeline",
    description:
      "This project processes transformer temperature data from a Supabase database using Python tools like Pandas, NumPy, and Scikit-learn. Its purpose is to clean, analyze, and turn raw temperature readings into actionable insights for early detection of overheating risks. These tools were chosen for their reliability and flexibility in data handling and machine learning. Future work will expand on this with additional models to improve predictive capabilities.",
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
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Supabase",
      "Data Analysis",
    ],
    githubUrl: "https://github.com/stephengilbert1/transformer-data-pipeline",
    interactiveRawDataUrl: "/tools/transformers/index.html",
    plot1Url: "/tools/transformers/linear_regression_actual_vs_predicted.html",
    plot2Url: "/tools/transformers/linear_regression_residuals.html",
    category: "Transformers",
    sections: [
      {
        id: "interactive-raw-data",
        label: "Interactive Raw Data Visualization",
        content:
          "Initially we can plot the raw data for all transformers over the last 30 days. The purpose of this is to gain an initial understanding into the transformer temperature behaviour.",
        contents: [
          {
            id: "raw-data-plot",
            label: "Transformer Temperature and Thresholds",
            urlKey: "interactiveRawDataUrl",
            description:
              "Use the interactivate chart to toggle the transformers, threshold, ambient temperatures and alter the time window.",
          },
        ],
      },
      {
        id: "linear-regression",
        label: "Linear Regression Model",
        content: `The approach taken here is to use a simple linear regression model to predict transformer internal temperature (\'tempC\') based on ambient temperature. This model helps us understand the relationship between ambient and internal temperatures and evaluates how well ambient temperature alone explains variations in internal temperature.

This initial model serves as a baseline for assessing whether ambient temperature can reasonably predict internal temperature changes. The performance metrics and visualizations generated will guide future improvements, such as adding more features or using advanced time series models.

The tool prepares the predictor and response variables, fits the linear regression model, generates predictions, and evaluates the model’s fit to the data.

To ensure the model generalizes well to new data, the dataset is split into training and test sets. The training set is used to fit the linear regression model, while the test set evaluates its predictive performance. This approach helps prevent overfitting and provides a realistic estimate of how well ambient temperature alone predicts the internal transformer temperature.`,
        contents: [
          {
            id: "lr-plot1",
            label: "Actual vs Predicted Plot",
            urlKey: "plot1Url",
            description:
              "This scatter plot shows true internal temperatures (points) against their corresponding model predictions (red line). Points clustered closely around the red regression line indicate good predictive accuracy.",
          },
          {
            id: "lr-plot2",
            label: "Residual Plot",
            urlKey: "plot2Url",
            description:
              "This plot displays the difference between actual and predicted temperatures (residuals) versus ambient temperature. Ideally, residuals should be randomly scattered around zero without patterns, indicating unbiased predictions. Systematic trends or large residuals suggest areas where the model may be improved.",
          },
        ],
      },
      // Add future model sections here...
    ],
  },
];
