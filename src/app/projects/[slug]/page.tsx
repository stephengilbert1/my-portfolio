// src/app/projects/[slug]/page.tsx
import { projects } from "@/lib/projectData";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href={`/projects/${project.slug}`}>
        <h2 className="text-xl font-semibold text-slate-800 hover:underline">
          {project.title}
        </h2>
      </Link>

      <p className="text-slate-600 text-lg mb-6">
        {project.longDescription ?? project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        <a
          href={project.githubUrl}
          target="_blank"
          className="text-sky-600 hover:underline"
        >
          GitHub
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            className="text-sky-600 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </main>
  );
}
