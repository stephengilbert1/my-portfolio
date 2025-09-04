// src/app/ai-data-tools/[slug]/page.tsx

import { notFound } from "next/navigation";
import { dataTools } from "@/lib/dataToolData";
import IframeAuto from "@/components/IframeAuto";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = dataTools.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Project Title */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {project.title}
        </h1>

        {/* Links */}
        <section className="mb-4">
          <section className="flex gap-4 mt-6 py-2">
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

        {/* Description */}
        <p className="text-lg text-slate-700 mb-6">{project.description}</p>
      </section>

      {/* Table of Contents */}
      {project.sections && (
        <nav className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Contents</h1>
          <ul className="list-disc list-inside space-y-1">
            {project.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Sections and Plots */}
      {project.sections &&
        project.sections.map((section) => (
          <section id={section.id} key={section.id} className="mb-16">
            <h2 className="text-3xl font-bold mb-4">{section.label}</h2>

            {section.content && (
              <p className="mb-6 text-slate-700 whitespace-pre-line">
                {section.content}
              </p>
            )}

            {section.contents.map((sub) => {
              const url = project[sub.urlKey];
              if (typeof url !== "string") return null;

              return (
                <section id={sub.id} key={sub.id} className="mb-12">
                  <h3 className="text-xl font-semibold mb-2">{sub.label}</h3>

                  {sub.description && (
                    <p className="mb-4 text-slate-600 whitespace-pre-line">
                      {sub.description}
                    </p>
                  )}

                  <div
                    className="rounded-xl border border-slate-200 shadow-sm overflow-hidden"
                    style={{ overflow: "hidden" }}
                  >
                    <IframeAuto
                      src={url}
                      title={`${project.title} - ${sub.label}`}
                      className="w-full"
                      style={{ overflow: "hidden", display: "block" }}
                    />
                  </div>

                  <p className="text-center text-slate-500 mt-3">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-slate-700"
                    >
                      Open full screen
                    </a>
                  </p>
                </section>
              );
            })}
          </section>
        ))}

      {/* Why I Built It and Key Features */}
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
    </main>
  );
}
