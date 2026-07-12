"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/browse", label: "Home" },
  { href: "/browse/tv-shows", label: "TV Shows" },
  { href: "/browse/movies", label: "Movies" },
  { href: "/browse/new", label: "New & Popular" },
  { href: "/browse/my-list", label: "My List" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between
                  px-4 md:px-12 py-4 transition-colors duration-300
                  ${scrolled ? "bg-netflixBlack" : "bg-gradient-to-b from-black/80 to-transparent"}`}
    >
      <div className="flex items-center gap-8">
        <Link href="/browse" className="text-netflixRed text-2xl md:text-3xl font-bold tracking-tight">
          NETFLIX
        </Link>
        <ul className="hidden md:flex gap-5 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`hover:text-gray-300 ${pathname === l.href ? "text-white font-semibold" : "text-gray-200"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline text-sm cursor-pointer">🔍</span>
        <span className="hidden sm:inline text-sm cursor-pointer">🔔</span>
        <Link href="/profiles" className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500" />
      </div>
    </nav>
  );
}