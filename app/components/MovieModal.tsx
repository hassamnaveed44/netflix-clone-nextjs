"use client";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/app/types";
import Button from "./Button";

export default function MovieModal({ movie, onClose }: { movie: Movie; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-netflixDark w-full max-w-2xl rounded-lg overflow-hidden"
      >
        <div className="relative h-80 w-full">
          <Image src={movie.posterUrl} alt={movie.title} fill className="object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/70 rounded-full w-9 h-9 flex items-center justify-center"
          >
            ✕
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3">{movie.title}</h2>
          <div className="flex gap-3 items-center mb-3">
            <Link href={`/watch/${movie.id}`}>
              <Button variant="secondary">▶ Play</Button>
            </Link>
            <Button variant="ghost">+ My List</Button>
          </div>
          <div className="flex gap-3 text-sm text-gray-400 mb-3">
            <span>{movie.year}</span>
            <span className="border px-1">{movie.rating}</span>
            <span>{movie.duration}</span>
          </div>
          <p className="text-gray-300">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}