import { projects } from "@/lib/projectData";
import Link from "next/link";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-center">
      <section className="relative isolate overflow-hidden py-20 px-6 text-center">
        {/* Background SVG */}
        <div className="absolute inset-0 -z-10 bg-white">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <h1 className="text-5xl font-bold text-slate-900">Stephen Gilbert</h1>
        <p className="mt-4 text-lg text-slate-600">
          Building applications to solve real-world problems.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/projects"
            className="px-5 py-2 text-white bg-slate-900 rounded-lg hover:bg-slate-700 transition"
          >
            View Projects
          </Link>
          <a
            href="mailto:stephengilbert1@gmail.com"
            className="px-5 py-2 border border-slate-900 rounded-lg hover:bg-slate-100 transition"
          >
            Contact
          </a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Featured Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {featured.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white"
            >
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-xl font-semibold text-slate-800 hover:underline">
                  {project.title}
                </h3>
              </Link>

              <p className="mt-2 text-sm text-slate-600">
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
      </section>
    </main>
  );
}
