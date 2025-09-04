"use client";

import { projects, Project } from "@/lib/projectData";
import { dataTools, DataTool } from "@/lib/dataToolData";
import Link from "next/link";
import RidgelineBackground from "@/components/RidgelineBackground";

// Type guard to check if an object is DataTool
function isDataTool(p: Project | DataTool): p is DataTool {
  return (p as DataTool).interactiveRawDataUrl !== undefined;
}

type FeaturedItem = (Project | DataTool) & { type: "project" | "dataTool" };

export default function Home() {
  // Build featured list with type info
  const featured: FeaturedItem[] = [
    projects.find((p) => p.slug === "transformer-dashboard"),
    dataTools.find((p) => p.slug === "transformer-time-series-analysis"),
    projects.find((p) => p.slug === "transformer_tool_tailwind"),
  ]
    .filter((p): p is Project | DataTool => p !== undefined)
    .map((p) => ({
      ...p,
      type: isDataTool(p) ? "dataTool" : "project",
    }));

  return (
    <main className="relative overflow-hidden">
      <div className="relative group w-full h-[350px] overflow-hidden">
        <RidgelineBackground />
      </div>
      <section className="relative z-10 flex flex-col items-center justify-center py-8 text-black text-center">
        <p className="mt-4 text-lg text-slate-600">
          Building practical tools to turn data into technical insights and
          solutions.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/projects"
            className="px-5 py-2 text-white bg-patagonia-black rounded-lg hover:bg-patagonia-purple transition"
          >
            View Projects
          </Link>
          <a
            href="mailto:stephengilbert1@gmail.com"
            className="px-5 py-2 border border-slate-900 rounded-lg bg-patagonia-white hover:bg-patagonia-blue transition"
          >
            Contact
          </a>
        </div>
      </section>
      {/* Featured Projects Section */}
      <section className="max-w-screen-xl mx-auto px-6 py-2 text-center">
        <h2 className="text-3xl font-bold mb-10 text-slate-800">
          Featured Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-3">
          {featured.map((project) => (
            <div key={project.title}>
              <Link
                href={
                  project.type === "dataTool"
                    ? `/ai-data-tools/${project.slug}`
                    : `/projects/${project.slug}`
                }
                aria-label={`Go to ${project.title} project page`}
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden ">
                  {project.imageThumb && (
                    <img
                      src={project.imageThumb}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </Link>
              <div className="mt-4 flex gap-4 text-sm">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline"
                    aria-label={`View GitHub for ${project.title}`}
                  >
                    GitHub
                  </Link>
                )}

                {project.type === "dataTool" ? (
                  <Link
                    href={`/ai-data-tools/${project.slug}`}
                    className="text-sky-600 hover:underline"
                    aria-label={`See more details for ${project.title}`}
                  >
                    Explore Project
                  </Link>
                ) : project.demoUrl ? (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    Live Demo
                  </Link>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-slate-600 text-left">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
