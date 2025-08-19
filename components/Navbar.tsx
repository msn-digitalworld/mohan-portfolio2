"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-blue-700">Portfolio</Link>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-blue-700 ${pathname === l.href ? "text-blue-700 font-semibold" : "text-gray-700"}`}
            >
              {l.label}
            </Link>
          ))}
      
        </div>
      </div>
    </nav>
  );
}
