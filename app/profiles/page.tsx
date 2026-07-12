import { profiles } from "@/app/lib/data";
import ProfileCard from "@/app/components/ProfileCard";

export default function ProfilesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-netflixBlack">
      <h1 className="text-3xl md:text-5xl mb-10">Who is watching?</h1>
      <div className="flex flex-wrap gap-6 justify-center max-w-3xl">
        {profiles.map((p) => (
          <ProfileCard key={p.id} profile={p} />
        ))}
      </div>
      <button className="mt-12 text-gray-400 border border-gray-500 px-6 py-2 hover:text-white hover:border-white">
        Manage Profiles
      </button>
    </div>
  );
}