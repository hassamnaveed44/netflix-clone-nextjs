"use client";
import { useRouter } from "next/navigation";
import { Play, X, Info } from "lucide-react";

export default function MovieDetailsPage() {
  const router = useRouter();

  return (
    <main className="bg-[#141414] text-white min-h-screen pb-20">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent z-10" />
        <button
          onClick={() => router.back()}
          className="absolute top-5 right-5 z-20 bg-[#181818] p-2 rounded-full border border-gray-500"
        >
          <X size={24} />
        </button>

        <div className="absolute bottom-10 left-10 z-20">
          <h1 className="text-5xl font-bold mb-4">young Sheldon</h1>
          <div className="flex gap-4">
            {/* Play Button -> Navigates to app/videoplayer/page.tsx */}
            <button
              onClick={() => router.push("/videoplayer")}
              className="bg-white text-black px-8 py-2 rounded font-bold flex items-center gap-2"
            >
              <Play fill="black" /> Play
            </button>

            {/* Info Button -> Navigates to app/moviedetails/page.tsx */}
            <button
              onClick={() => router.push("/moviedetails")}
              className="bg-[#2a2a2a] px-6 py-2 rounded font-bold flex items-center gap-2 border border-gray-500"
            >
              <Info size={20} /> Info
            </button>
          </div>
        </div>
      </div>

      {/* ... Rest of your content ... */}
    </main>
  );
}