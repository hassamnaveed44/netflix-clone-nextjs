"use client";
import { useRef, useState } from "react";
import { trending, originals, action, comedies } from "@/app/lib/data";
import ContentRow from "@/app/components/ContentRow";
import Image from "next/image";
import Link from "next/link";
import { Volume2, VolumeX, Play, ChevronDown } from "lucide-react";

export default function BrowsePage() {
  const featured = trending[0];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const showVideo = Boolean("/videos/vdeo2.mp4") && !videoFailed;

  return (
    // Wrap the hero + content rows in one parent div so both render on the page
    <div>
      {/* ---------- HERO SECTION (unchanged) ---------- */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Background Media */}
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
          <Image src={featured.posterUrl} alt={featured.title} fill className="object-cover" priority />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="absolute bottom-24 left-4 md:left-12 max-w-lg text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{featured.title}</h1>

          {/* Horizontal line and Genre stack */}
          <div className="w-full border-t border-white/30 my-4" />
          <div className="flex flex-col text-sm md:text-base font-medium mb-4 text-gray-200">
            <span>Thriller</span>
            <span>Drama</span>
            <span>Crime</span>
          </div>

          {/* Circular Action Buttons */}
          <div className="flex gap-4">
            <Link href={`/watch/${featured.id}`}>
              <button className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-black hover:bg-gray-200 transition">
                <Play fill="black" className="ml-1" />
              </button>
            </Link>
            <button className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-500/50 text-white hover:bg-gray-500/70 transition">
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mute Button */}
        {showVideo && (
          <button
            onClick={toggleMute}
            className="absolute bottom-28 right-4 md:right-12 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-black/40 text-white hover:border-white"
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        )}
      </div>

      {/* ---------- CONTENT ROWS (new, matches your screenshot) ---------- */}
      <div className="-mt-20 relative z-10">
        <ContentRow title="Trending Now" movies={trending} />
        <ContentRow title="Netflix Originals" movies={originals} />
        <ContentRow title="Action & Adventure" movies={action} />
        <ContentRow title="Comedies" movies={comedies} />
      </div>
    </div>
  );
}