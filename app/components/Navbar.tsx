"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

// Nav links shown on desktop (inline) and mobile (dropdown) — browse pages only
const links = [
  { href: "/browse", label: "Home" },
  { href: "/browse/tv-shows", label: "TV Shows" },
  { href: "/browse/movies", label: "Movies" },
  { href: "/browse/new", label: "New & Popular" },
  { href: "/browse/my-list", label: "My List" },
];

export default function Navbar() {
  // Tracks whether the user has scrolled down, so the navbar can switch
  // from a transparent gradient to a solid black background
  const [scrolled, setScrolled] = useState(false);

  // Tracks whether the mobile hamburger menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const isLanding = pathname === "/";

  // Listen for scroll position to toggle the navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // NOTE: we intentionally do NOT use a useEffect keyed on `pathname` to
  // close the mobile menu. Calling setState synchronously inside an effect
  // triggers an extra re-render pass and trips the
  // react-hooks/set-state-in-effect lint rule. Since the menu should only
  // close as a direct result of the user tapping a link, we close it right
  // inside that link's onClick handler instead (see the mobile <Link> below).

  // --- Landing page variant: logo + language selector + Sign In button ---
  if (isLanding) {
    return (
      <nav
        className={`fixed top-0 w-full z-50 flex items-center justify-between
                    px-4 md:px-12 py-4 transition-colors duration-300 overflow-hidden
                    ${scrolled ? "bg-netflixBlack" : "bg-gradient-to-b from-black/80 to-transparent"}`}
      >
        <Link href="/" className="flex-shrink-0">
          <span className="text-red-600 text-2xl md:text-3xl font-black tracking-tight italic">
            NETFLIX
          </span>
        </Link>

        <div className="flex items-center gap-1.5 md:gap-4 flex-shrink-0">
          {/* Language selector — compact on mobile so it never pushes Sign In offscreen */}
          <button className="flex items-center gap-0.5 md:gap-1 text-xs md:text-sm text-white border border-gray-500 rounded px-1.5 md:px-2 py-1 whitespace-nowrap flex-shrink-0">
            English
            <ChevronDown size={14} className="flex-shrink-0" />
          </button>

          <Link
            href="/signin"
            className="bg-red-600 hover:bg-red-700 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded transition-colors whitespace-nowrap flex-shrink-0"
          >
            Sign In
          </Link>
        </div>
      </nav>
    );
  }

  // --- Browse pages variant: full nav links + profile + mobile menu ---
  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between
                  px-4 md:px-12 py-4 transition-colors duration-300
                  ${scrolled || menuOpen ? "bg-netflixBlack" : "bg-gradient-to-b from-black/80 to-transparent"}`}
    >
      <div className="flex items-center gap-8">
        {/* Logo — always links back to the home/browse page */}
        <Link href="/browse">
          <Image src="/images/movies/Netflix-Brand-Logo.png" alt="Netflix" width={110} height={30} priority />
        </Link>

        {/* Desktop links — hidden below md, shown inline from md upward */}
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
        {/* Search and notification icons only show from sm upward to save space on very small screens */}

        <Link href="/profiles" className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500" />

        {/* Mobile menu toggle button — only visible below md breakpoint.
            Swaps between the Menu (hamburger) and X (close) icon based on state. */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown menu — only rendered when menuOpen is true.
          Positioned directly below the navbar, full width, links stacked vertically. */}
      {menuOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-netflixBlack border-t border-gray-800 flex flex-col py-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-3 text-sm ${pathname === l.href ? "text-white font-semibold bg-white/5" : "text-gray-300"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}