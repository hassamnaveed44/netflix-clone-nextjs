import { trending, originals, action, comedies } from "@/app/lib/data";
import ContentRow from "@/app/components/ContentRow";
import Button from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function BrowsePage() {
  const featured = trending[0];
  return (
    <div>
      <div className="relative h-[80vh] w-full">
        <Image src={featured.posterUrl} alt={featured.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-netflixBlack via-black/20 to-transparent" />
        <div className="absolute bottom-24 left-4 md:left-12 max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{featured.title}</h1>
          <p className="text-gray-200 mb-4 line-clamp-3">{featured.description}</p>
          <div className="flex gap-3">
            <Link href={`/watch/${featured.id}`}>
              <Button variant="secondary">▶ Play</Button>
            </Link>
            <Button variant="ghost">ⓘ More Info</Button>
          </div>
        </div>
      </div>
      <div className="-mt-20 relative z-10">
        <ContentRow title="Trending Now" movies={trending} />
        <ContentRow title="Netflix Originals" movies={originals} />
        <ContentRow title="Action & Adventure" movies={action} />
        <ContentRow title="Comedies" movies={comedies} />
      </div>
    </div>
  );
}