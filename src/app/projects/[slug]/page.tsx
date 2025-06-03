// src/app/projects/[slug]/page.tsx
import { projects } from "@/lib/projectData";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-2">
        {project.title}
      </h1>
      <p className="text-slate-700 mb-6">{project.description}</p>
      {/* Add more project details here if needed */}
    </main>
  );
}

// ✅ Static params for prerendering
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
