// src/app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">About Me</h1>
      <p className="text-slate-700 text-lg mb-4">
        I&apos;m a 29 year old Mechatronics Engineer sharpening my software
        development skills in Vancouver, BC.
      </p>

      <p className="text-slate-700 text-lg mb-4">
        I bring over 7 years of experience as a multidisciplinary engineer
        working on new product development and automated manufacturing
        equipment. Across these roles I have developed a love for solving
        technical problems. My favourite thing about being an engineer is that
        our jobs constantly require us to learn new things. This curiosity is
        currently hyper-focused on developing practical and highly applied web
        applications.
      </p>

      <p className="text-slate-700 text-lg">
        This portfolio showcases the journey I have been on to sharpen up the
        coding skills I picked up during my engineering degree and build
        tangible projects that solve real world problems. In the Projects page
        you&apos;ll find tools and products that could be applied in the
        electrical utility industry that I work in. Beyond this you&apos;ll find
        some fun tech tools for the recreational activities I love such as
        skiing and mountain biking.
      </p>
      <div className="mt-10 space-y-8">
        <div>
          <Image
            src="/images/backcountry-skiing.jpg"
            alt="Stephen skiing in backcountry"
            width={3024}
            height={4032}
            className="w-full rounded-xl border shadow-sm"
          />
          <p className="mt-2 text-sm text-slate-500 text-center">
            Ski touring in the Coast Mountains (my favourite thing about living
            in BC)
          </p>
        </div>

        <div>
          <Image
            src="/images/running.jpg"
            alt="Stephen running"
            width={2048}
            height={1365}
            className="w-full rounded-xl border shadow-sm"
          />
          <p className="mt-2 text-sm text-slate-500 text-center">
            Running keeps me sane!
          </p>
        </div>

        <div>
          <Image
            src="/images/surfing2.jpg"
            alt="Stephen surfing"
            width={1080}
            height={1080}
            className="w-full rounded-xl border shadow-sm"
          />
          <p className="mt-2 text-sm text-slate-500 text-center">
            Surfing in New Zealand
          </p>
        </div>
      </div>
    </main>
  );
}
