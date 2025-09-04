// src/app/ai-data-tools/page.tsx
import Link from "next/link";
import { dataTools } from "@/lib/dataToolData";

export const metadata = {
  title: "AI & Data Tools",
};

export default function AiDataToolsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-10">
        AI &amp; Data Tools
      </h1>

      <div className="grid gap-8 sm:grid-cols-2">
        {dataTools.map((tool) => (
          <div
            key={tool.title}
            className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white"
          >
            <div className="space-y-2">
              <Link href={`/ai-data-tools/${tool.slug}`}>
                <h2 className="text-xl font-semibold text-slate-800 hover:underline">
                  {tool.title}
                </h2>
              </Link>
              <p className="text-sm text-slate-600">{tool.description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4 text-sm">
              {tool.githubUrl && (
                <Link
                  href={tool.githubUrl}
                  target="_blank"
                  className="text-sky-600 hover:underline"
                >
                  GitHub
                </Link>
              )}
              {tool.interactiveRawDataUrl && (
                <Link
                  href={tool.interactiveRawDataUrl}
                  target="_blank"
                  className="text-sky-600 hover:underline"
                >
                  Analysis (HTML)
                </Link>
              )}
              {tool.demoUrl && (
                <Link
                  href={tool.demoUrl}
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
