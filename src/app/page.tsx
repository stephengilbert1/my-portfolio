import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-center">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-slate-900">Stephen Gilbert</h1>
        <p className="mt-4 text-lg text-slate-600">
          Mechatronics Engineer pivoting into software development. Building
          applications to solve real-world problems.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/projects"
            className="px-5 py-2 text-white bg-slate-900 rounded-lg hover:bg-slate-700 transition"
          >
            View Projects
          </Link>
          <a
            href="mailto:your.email@example.com"
            className="px-5 py-2 border border-slate-900 rounded-lg hover:bg-slate-100 transition"
          >
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
