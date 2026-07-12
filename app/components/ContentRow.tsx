"use client";
import { useState } from "react";
import { Movie } from "@/app/types";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

export default function ContentRow({ title, movies }: { title: string; movies: Movie[] }) {
  const [selected, setSelected] = useState<Movie | null>(null);

  return (
    <section className="px-4 md:px-12 mb-8">
      <h2 className="text-lg md:text-xl font-semibold mb-3">{title}</h2>
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} onClick={() => setSelected(m)} />
        ))}
      </div>
      {selected && <MovieModal movie={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}