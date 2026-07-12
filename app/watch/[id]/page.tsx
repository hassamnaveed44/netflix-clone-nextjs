"use client";
import { useRouter } from "next/navigation";

export default function WatchPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  return (
    <div className="h-screen w-full bg-black flex flex-col">
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 z-10 text-white text-2xl bg-black/50 rounded-full w-10 h-10"
      >
        ←
      </button>
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-2">Now playing</p>
          <h1 className="text-3xl font-bold">Video ID: {params.id}</h1>
          <p className="text-gray-500 mt-4">(Placeholder player — no real video source)</p>
        </div>
      </div>
    </div>
  );
}