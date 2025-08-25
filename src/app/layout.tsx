// src/app/layout.tsx
import Link from "next/link";
import "./globals.css";
import { Github, Linkedin, Mail } from "lucide-react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans flex flex-col min-h-screen`}
      >
        <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-black text-white shadow-sm">
          <Link
            href="/"
            className="font-bold text-xl hover:opacity-80 transition"
            style={{ fontFamily: "Belwe-Bold" }}
          >
            Stephen Gilbert
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
            <Link href="/ai-data-tools" className="hover:underline">
              AI & Data Tools
            </Link>
            <Link href="/skills-education" className="hover:underline">
              Skills & Education
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </div>
        </nav>
        <main className="flex-grow">{children}</main>
        <footer className="py-6 text-center text-sm text-slate-500 border-t mt-12">
          <p>© {new Date().getFullYear()} Stephen Gilbert</p>
          <div className="mt-2 flex justify-center gap-4 text-slate-600">
            <a
              href="https://github.com/stephengilbert1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 hover:text-black" />
            </a>
            <a href="mailto:stephengilbert1@gmail.com">
              <Mail className="w-5 h-5 hover:text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/stephenjgilbert"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-black" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
