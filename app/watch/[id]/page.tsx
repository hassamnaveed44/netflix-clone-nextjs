"use client"; // Add this if you add playback logic like play/pause
import { use } from "react";

export default function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-xl font-bold mb-4">Now playing: {id}</h1>
      
      {/* Example of how you would use the ID to set the source */}
      <video 
        controls 
        className="w-full max-w-4xl"
        src={`/videos/vdeo2.mp4`} 
      />
    </div>
  );
}