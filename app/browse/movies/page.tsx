"use client";
import { useRef, useState } from "react";
import { movies } from "@/app/lib/data";
import ContentRow from "@/app/components/ContentRow";
import TopTenRow from "@/app/components/TopTenRow";
import Button from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";
import { Volume2, VolumeX } from "lucide-react";

export default function MoviesPage() {
  const featured = movies[0];

  // Same video-hero pattern as Home and TV Shows pages
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Drop a real clip at public/videos/vdeo4.mp4 to activate it here
  const showVideo = Boolean("/videos/vdeo2.mp4") && !videoFailed;

  return (
    <div>
      {/* ---------- Hero with background video ---------- */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {showVideo ? (
          <video
            ref={videoRef}
            src="/videos/vdeo2.mp4"
            poster={featured.posterUrl}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            onError={() => setVideoFailed(true)}
          />
        ) : (
          <Image
            src={featured.posterUrl}
            alt={featured.title}
            fill
            className="object-cover"
            priority
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-netflixBlack via-black/20 to-transparent" />

        <div className="absolute bottom-12 left-4 md:left-12 max-w-lg z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{featured.title}</h1>
          <p className="text-gray-200 mb-4 line-clamp-3">{featured.description}</p>
          <div className="flex gap-3">
            <Link href={`/watch/${featured.id}`}>
              <Button variant="secondary">▶ Play</Button>
            </Link>
            <Button variant="ghost">ⓘ More Info</Button>
          </div>
        </div>

        {showVideo && (
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
            className="absolute bottom-6 right-4 md:right-12 z-10 flex h-10 w-10 items-center justify-center
                       rounded-full border border-gray-400 bg-black/40 text-white transition hover:border-white"
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        )}
      </div>

      {/* ---------- Content rows, matching the Movies screenshot layout:
          New Releases, Trending Now, Top 10, genre-based rows ---------- */}
      <div className="-mt-10 relative z-10 space-y-6 pb-8">
        <ContentRow title="New Releases" movies={movies} />
        <ContentRow title="Trending Now" movies={[...movies].reverse()} />
        <TopTenRow title="Top 10 Movies Today" movies={movies} />
        <ContentRow title="Foreign Language Movies" movies={movies.slice(2)} />
        <ContentRow title="Action Movies" movies={movies.slice(0, 8)} />
        {/* Deterministic reorder instead of Math.random() — keeps the
            component pure for consistent server/client rendering */}
        <ContentRow
          title="Adventure Movies"
          movies={[...movies.slice(4), ...movies.slice(0, 4)]}
        />
      </div>
    </div>
  );
}