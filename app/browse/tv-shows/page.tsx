import { tvShows } from "@/app/lib/data";
import ContentRow from "@/app/components/ContentRow";

export default function TvShowsPage() {
  return (
    <div className="pt-24">
      <h1 className="text-2xl font-bold px-4 md:px-12 mb-4">TV Shows</h1>
      <ContentRow title="Popular TV Shows" movies={tvShows} />
    </div>
  );
}