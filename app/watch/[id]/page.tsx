// 1. Import 'use' from 'react'
import { use } from "react";

// 2. Update your page function to accept params as a Promise
export default function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 3. Unwrap the params using React.use()
  const resolvedParams = use(params);
  
  // 4. Now you can safely access the ID
  const { id } = resolvedParams;

  return (
    <div className="text-center">
      <p className="text-gray-400 mb-2">Now playing</p>
      {/* Now this will work without the error */}
      <h1 className="text-3xl font-bold">Video ID: {id}</h1>
      <p className="text-gray-500 mt-4">(Placeholder player - no real video source)</p>
    </div>
  );
}