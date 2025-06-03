// src/app/layout.tsx
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Stephen Gilbert Portfolio",
  description: "The pivot into Software Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <nav className="flex justify-between items-center px-6 py-4 bg-white border-b shadow-sm">
          <div className="font-bold text-xl">Stephen Gilbert</div>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </div>
        </nav>
        <main className="flex-grow">{children}</main>
        <footer className="px-6 py-4 border-t text-sm text-center text-slate-500">
          © {new Date().getFullYear()} Stephen Gilbert. GitHub | LinkedIn |
          Email
        </footer>
      </body>
    </html>
  );
}
