"use client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Movie } from "@/app/types";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

export default function ContentRow({ title, movies }: { title: string; movies: Movie[] }) {
  const [selected, setSelected] = useState<Movie | null>(null);

  // Ref to the scrollable row, so the arrow buttons can scroll it directly
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track whether we're at the very start/end, to hide the arrow that
  // wouldn't do anything (matches Netflix's real behavior)
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateArrowVisibility = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll by roughly one viewport's worth of cards at a time
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    // Re-check arrow visibility shortly after the smooth scroll settles
    setTimeout(updateArrowVisibility, 400);
  };

  return (
    <section className="px-4 md:px-12 mb-8 group/row relative">
      <h2 className="text-lg md:text-xl font-semibold mb-3">{title}</h2>

      {/* Left arrow — hidden at the start of the row and on small screens (touch swipe is enough there) */}
      {!atStart && (
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="hidden md:flex absolute left-0 top-0 bottom-0 z-20 w-10 items-center justify-center
                     bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover/row:opacity-100
                     transition-opacity"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={updateArrowVisibility}
        className="flex gap-3 overflow-x-auto pb-4 scroll-smooth"
        style={{ scrollbarWidth: "none" }} // Firefox: hide scrollbar, arrows drive navigation instead
      >
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} onClick={() => setSelected(m)} />
        ))}
      </div>

      {/* Right arrow — hidden once scrolled to the end */}
      {!atEnd && (
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="hidden md:flex absolute right-0 top-0 bottom-0 z-20 w-10 items-center justify-center
                     bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover/row:opacity-100
                     transition-opacity"
        >
          <ChevronRight size={32} />
        </button>
      )}

      {selected && <MovieModal movie={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}