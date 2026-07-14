"use client";
import { useState, useRef } from "react";
import { 
  ArrowLeft, Play, Pause, Volume2, RotateCcw, RotateCw, 
  Subtitles, Maximize, Flag, SkipForward 
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function VideoPlayerPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();

  const togglePlay = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    // Removed 'w-screen h-screen' to allow the player to fit naturally
    <main className="relative w-full max-w-5xl mx-auto bg-black overflow-hidden aspect-video flex items-center justify-center">
      
      {/* Top Header Controls - Positioned inside player */}
      <button 
        onClick={() => router.back()} 
        className="absolute top-4 left-4 z-50 text-white"
      >
        <ArrowLeft size={24} />
      </button>

      <button className="absolute top-4 right-4 z-50 text-white">
        <Flag size={20} />
      </button>

      {/* Video Element */}
      <div className="w-30 h-30">
         <video
        ref={videoRef}
        className="w-full h-10 object-contain"
        src="/videos/vdeo2.mp4"
        onClick={togglePlay}
      />

      </div>
     
      {/* Bottom Control Overlay - Compact version */}
      <div className="absolute bottom-0 w-full px-4 pb-3 pt-8 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-1 z-40">
        
        {/* Progress Bar - Slim */}
        <div className="relative h-1 bg-gray-600/70 rounded-full cursor-pointer mb-2">
          <div className="absolute h-full w-[60%] bg-red-600" />
        </div>

        {/* Controls Bar */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <button onClick={togglePlay}>
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button><RotateCcw size={20} /></button>
            <button><RotateCw size={20} /></button>
            <button><Volume2 size={20} /></button>
            <span className="text-[12px] font-medium tracking-wide">Young Sheldon | Pilot</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button><SkipForward size={20} /></button>
            <button><div className="w-5 h-5 border-2 border-white rounded-sm" /></button> {/* Stacked icon */}
            <button><Subtitles size={20} /></button>
            <button><Maximize size={20} /></button>
          </div>
        </div>
      </div>
    </main>
  );
}