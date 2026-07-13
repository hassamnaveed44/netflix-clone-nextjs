"use client";
import { useState } from "react";
import Image from "next/image";
import { Movie } from "@/app/types";
import MovieModal from "./MovieModal";

export default function TopTenRow({ title, movies }: { title: string; movies: Movie[] }) {
  const [selected, setSelected] = useState<Movie | null>(null);
  const top10 = movies.slice(0, 10);

  return (
    <section className="px-4 md:px-12 mb-8">
      <h2 className="text-lg md:text-xl font-semibold mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
        {top10.map((m, i) => (
          <div
            key={m.id}
            onClick={() => setSelected(m)}
            className="flex items-end shrink-0 cursor-pointer"
          >
            {/* Large rank number, half-overlapping the poster */}
            <span
              className="text-[80px] md:text-[110px] font-black leading-none text-transparent
                         -mr-4 md:-mr-6 select-none"
              style={{ WebkitTextStroke: "2px #808080" }}
            >
              {i + 1}
            </span>
            <div className="relative w-[110px] md:w-[150px] aspect-[2/3] rounded overflow-hidden
                            transition-transform duration-300 hover:scale-105 shadow-lg">
              <Image src={m.posterUrl} alt={m.title} fill sizes="150px" className="object-cover" />
            </div>
          </div>
        ))}
      </div>
      {selected && <MovieModal movie={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}