// src/app/skills-education/page.tsx

import Link from "next/link";
import { projects } from "@/lib/projectData";
import { dataTools } from "@/lib/dataToolData";

export default function SkillsPage() {
  const transformerDashboard = projects.find(
    (p) => p.slug === "transformer-dashboard"
  );
  const transformerOilExpansion = projects.find(
    (p) => p.slug === "transformer_tool_tailwind"
  );
  const yardInspectionReport = projects.find(
    (p) => p.slug === "yard-inspection-report"
  );
  const transformerDataPipeline = dataTools.find(
    (d) => d.slug === "transformer-data-pipeline"
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">
        Skills & Education
      </h1>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Formal Education
        </h2>
        <p className="text-slate-700 text-lg mb-6">
          University of Canterbury - Bachelor of Engineering with Honours in
          Mechatronics Engineering.
          <br />
          University of Canterbury - Emerging Leaders&apos; Scholarship. <br />
          University of Canterbury - Engineering High Achievers Award.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Programming & Software Development
        </h2>
        <p className="text-slate-700 text-lg mb-6">
          Gained a strong programming foundation using Python, C and C++
          focusing on problem solving, software design, and optimization.
          Developed experience in embedded systems programming, real-time
          computing, and low-level hardware interfacing, which are valuable for
          backend systems and sensor data collection. Explored algorithms for
          computer vision and image processing, strengthening skills in data
          manipulation and advanced computation.
        </p>
        <p className="font-semibold mb-2">Relevant projects:</p>
        <ul className="list-disc list-inside text-slate-700 mb-6">
          {transformerDashboard && (
            <li>
              <Link
                href={`/projects/${transformerDashboard.slug}`}
                className="text-blue-600 underline"
              >
                {transformerDashboard.title}
              </Link>{" "}
              — Real-time monitoring using full-stack development with React,
              TypeScript, and Supabase backend.
            </li>
          )}
          {yardInspectionReport && (
            <li>
              <Link
                href={`/projects/${yardInspectionReport.slug}`}
                className="text-blue-600 underline"
              >
                {yardInspectionReport.title}
              </Link>{" "}
              — Batch data collection tool with PostgreSQL, Prisma, and GraphQL
              integration.
            </li>
          )}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Mathematics & Statistical Modeling
        </h2>
        <p className="text-slate-700 text-lg mb-6">
          Built a strong mathematical background with depth in linear algebra,
          calculus, and statistics. Gained practical skills in mathematical
          modeling and computational techniques used in system analysis,
          statistical inference, and machine learning.
        </p>
        <p className="font-semibold mb-2">Relevant projects:</p>
        <ul className="list-disc list-inside text-slate-700 mb-6">
          {transformerOilExpansion && (
            <li>
              <Link
                href={`/projects/${transformerOilExpansion.slug}`}
                className="text-blue-600 underline"
              >
                {transformerOilExpansion.title}
              </Link>{" "}
              — Modeling thermal expansion effects in transformer oils using
              frontend technologies.
            </li>
          )}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Systems & Control Engineering
        </h2>
        <p className="text-slate-700 text-lg mb-4">
          Studied integrated system design encompassing sensor networks, signal
          processing, and control theory. Applied feedback control and system
          identification principles, invaluable for developing robust data
          pipelines and operational machine learning workflows.
        </p>
        <p className="font-semibold mb-2">Relevant projects:</p>
        <ul className="list-disc list-inside text-slate-700 mb-6">
          {transformerDataPipeline && (
            <li>
              <Link
                href={`/ai-data-tools/transformer-data-pipeline`}
                className="text-blue-600 underline"
              >
                {transformerDataPipeline.title}
              </Link>{" "}
              — Data pipeline project featured on the AI & Data page.
            </li>
          )}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Systems & Control Engineering
        </h2>
        <p className="text-slate-700 text-lg mb-6">
          Studied integrated system design including sensor networks, signal
          processing, and control theory, enabling understanding of how to
          design and optimize automated systems. Applied principles of feedback
          control and system identification, valuable in developing robust data
          pipelines and operational machine learning systems.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Electrical & Mechanical Fundamentals
        </h2>
        <p className="text-slate-700 text-lg mb-6">
          Learned key principles in electromagnetism, circuit design, and
          mechanical stress analysis. This multidisciplinary knowledge supports
          practical understanding of physical data sources, instrumentation, and
          hardware constraints in engineering contexts.
        </p>
      </section>
    </main>
  );
}
