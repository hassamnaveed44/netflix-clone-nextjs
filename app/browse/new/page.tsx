import { newAndPopular } from "@/app/lib/data";
import ContentRow from "@/app/components/ContentRow";

export default function NewAndPopularPage() {
  return (
    <div className="pt-24">
      <h1 className="text-2xl font-bold px-4 md:px-12 mb-4">New & Popular</h1>
      <ContentRow title="New This Week" movies={newAndPopular} />
    </div>
  );
}