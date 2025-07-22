import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white border-b shadow-sm">
        <div className="font-bold text-xl">[YourName]</div>
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
        © {new Date().getFullYear()} [Your Name]. GitHub | LinkedIn | Email
      </footer>
    </div>
  );
}
