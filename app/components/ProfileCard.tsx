import Link from "next/link";
import { Profile } from "@/app/types";

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Link href="/browse" className="flex flex-col items-center gap-3 group">
      <div
        className={`w-24 h-24 md:w-36 md:h-36 rounded-md group-hover:ring-4 ring-white
                    flex items-center justify-center text-4xl font-bold
                    ${profile.isKids ? "bg-yellow-500" : "bg-gradient-to-br from-blue-500 to-purple-600"}`}
      >
        {profile.name[0]}
      </div>
      <span className="text-gray-400 group-hover:text-white">{profile.name}</span>
    </Link>
  );
}