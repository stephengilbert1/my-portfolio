import { projects } from "@/lib/projectData";
import Link from "next/link";
import RidgelineBackground from "@/components/RidgelineBackground";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <main className="relative overflow-hidden">
      <div className="relative w-full h-[350px]">
        <RidgelineBackground />
        <div className="absolute left-0 right-0 bottom-[5%] translate-y-[-30%] flex justify-center">
          <h1
            className="text-white text-[clamp(2rem,15vw,6rem)] font-belwe leading-none"
            style={{ fontFamily: "Belwe-Bold" }}
          >
            Stephen Gilbert
          </h1>
        </div>
      </div>

      <section className="relative z-10 flex flex-col items-center justify-center py-8 text-black text-center">
        <p className="mt-4 text-lg text-slate-600">
          Building web applications and tools to solve real-world problems.
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
            <div
              key={project.title}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white"
            >
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-xl font-semibold text-slate-800 hover:underline min-h-[3.5rem]">
                  {project.title}
                </h3>
              </Link>
              {project.imageThumb && (
                <img
                  src={project.imageThumb}
                  alt={`${project.title} screenshot`}
                  className="w-full rounded-md mb-4 border"
                />
              )}
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
