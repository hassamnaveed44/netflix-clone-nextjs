import { myList } from "@/app/lib/data";
import ContentRow from "@/app/components/ContentRow";

export default function MyListPage() {
  return (
    <div className="relative min-h-screen bg-[#141414] bg-none pt-24 pb-10">
      <div className="space-y-8">
        {/* Only this single row will render */}
        <ContentRow title="My List" movies={myList} />
      </div>
    </div>
  );
}