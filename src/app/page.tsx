"use client";

import { projects } from "@/lib/projectData";
import Link from "next/link";
import RidgelineBackground from "@/components/RidgelineBackground";

export default function Home() {
  const featured = projects.slice(0, 3);

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
            className="px-5 py-2 border border-slate-900 rounded-lg bg-patagonia-white rounded-lg hover:bg-patagonia-blue transition"
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
              <Link href={`/projects/${project.slug}`}>
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
