// src/app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import { projects } from "@/lib/projectData";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <section className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">{project.title}</h1>
        <p className="text-slate-600 italic mt-2">{project.tags.join(" · ")}</p>
        <p className="text-lg text-slate-700 mb-6">{project.description}</p>
        {project.image1 && (
          <div className="mt-10">
            <img
              src={project.image1.src}
              alt="Screenshot 1"
              className="w-full rounded-xl border shadow-sm"
            />
            <p className="text-sm text-slate-500 mt-2">
              {project.image1.caption}
            </p>
          </div>
        )}

        {project.image2 && (
          <div className="mt-6">
            <img
              src={project.image2.src}
              alt="Screenshot 2"
              className="w-full rounded-xl border shadow-sm"
            />
            <p className="text-sm text-slate-500 mt-2">
              {project.image2.caption}
            </p>
          </div>
        )}
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">
            Why I Built It
          </h2>
          <p className="text-slate-700">{project.why}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">
            Key Features
          </h2>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-2">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-100 text-slate-700 text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="flex gap-4 mt-6">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-400 text-slate-700 px-4 py-2 rounded hover:bg-slate-100 transition"
          >
            View Code
          </a>
        )}
      </section>
    </main>
  );
}
