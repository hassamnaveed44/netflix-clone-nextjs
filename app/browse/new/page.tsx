import { newAndPopular } from "@/app/lib/data";
import ContentRow from "@/app/components/ContentRow";
import Button from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function NewAndPopularPage() {
  const featured = newAndPopular[0];
  return (
    <div>
      <div className="relative h-[50vh] w-full m-5">
        <Image src={featured.posterUrl} alt={featured.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-netflixBlack via-black/20 to-transparent" />
        <div className="absolute bottom-12 left-4 md:left-12 max-w-lg">
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
      <div className="-mt-16 relative z-10">
        <ContentRow title="New This Week" movies={newAndPopular} />
      </div>
    </div>
  );
}