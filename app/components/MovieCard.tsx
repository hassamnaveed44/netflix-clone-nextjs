"use client";
import Image from "next/image";
import { Movie } from "@/app/types";

export default function MovieCard({ movie, onClick }: { movie: Movie; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative min-w-[160px] md:min-w-[220px] aspect-[2/3] rounded overflow-hidden
                 cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10 shadow-lg"
    >
      <Image
        src={movie.posterUrl}
        alt={movie.title}
        fill
        sizes="220px"
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent
                      opacity-0 hover:opacity-100 transition-opacity p-2">
        <p className="text-xs font-semibold truncate">{movie.title}</p>
      </div>
    </div>
  );
}