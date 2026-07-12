import { movies } from "@/app/lib/data";
import ContentRow from "@/app/components/ContentRow";

export default function MoviesPage() {
  return (
    <div className="pt-24">
      <h1 className="text-2xl font-bold px-4 md:px-12 mb-4">Movies</h1>
      <ContentRow title="Popular Movies" movies={movies} />
    </div>
  );
}