import { myList } from "@/app/lib/data";
import ContentRow from "@/app/components/ContentRow";
import Image from "next/image";

export default function MyListPage() {
  // Grab the first movie in the list (or fallback if empty)
  const featured = myList[0];

  return (
    <div className="relative pt-24 min-h-screen">
      {/* Render hero image only if a featured item exists */}
      {featured && (
        <div className="relative w-full h-[50vh] mb-8">
          <Image
            src={featured.posterUrl}
            alt={featured.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />
        </div>
      )}

      <h1 className="text-2xl font-bold px-4 md:px-12 mb-4">My List</h1>

      {myList.length > 0 ? (
        <ContentRow title="Saved for you" movies={myList} />
      ) : (
        <p className="px-4 md:px-12 text-gray-400">Your list is empty.</p>
      )}
    </div>
  );
}