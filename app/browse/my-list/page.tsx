import { myList } from "@/app/lib/data";
import ContentRow from "@/app/components/ContentRow";

export default function MyListPage() {
  return (
    <div className="pt-24">
      <h1 className="text-2xl font-bold px-4 md:px-12 mb-4">My List</h1>
      {myList.length > 0 ? (
        <ContentRow title="Saved for you" movies={myList} />
      ) : (
        <p className="px-4 md:px-12 text-gray-400">Your list is empty.</p>
      )}
    </div>
  );
}