// src/app/projects/page.tsx
import { projects } from "@/lib/projectData";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-10">Projects</h1>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white"
          >
            <Link href={`/projects/${project.slug}`}>
              <h2 className="text-xl font-semibold text-slate-800 hover:underline">
                {project.title}
              </h2>
            </Link>

            <p className="mt-2 text-sm text-slate-600">{project.description}</p>

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

            <div className="mt-4 flex gap-4 text-sm">
              <Link
                href={project.githubUrl}
                target="_blank"
                className="text-sky-600 hover:underline"
              >
                GitHub
              </Link>
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  className="text-sky-600 hover:underline"
                >
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
