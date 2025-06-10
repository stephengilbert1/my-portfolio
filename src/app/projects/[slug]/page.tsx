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
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        {project.title}
      </h1>

      <p className="text-slate-600 italic mb-6">{project.tags.join(" · ")}</p>
      <p className="text-lg text-slate-700 mb-6">{project.description}</p>

      <h2 className="text-2xl font-semibold text-slate-800 mb-2">
        Why I Built It
      </h2>
      <p className="text-slate-700 mb-6">{project.why}</p>

      <h2 className="text-2xl font-semibold text-slate-800 mb-2">
        Key Features
      </h2>
      <ul className="list-disc pl-6 text-slate-700 mb-6">
        {project.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Live Demo
        </a>
      )}
    </main>
  );
}
