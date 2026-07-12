import { Movie, Profile } from "@/app/types";

function makeRow(prefix: string, count: number, genre: string): Movie[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    title: `${genre} Title ${i + 1}`,
    posterUrl: `/images/movies/${prefix}-${(i % 5) + 1}.jpg`, // cycles through 5 real images per row
    year: 2020 + (i % 5),
    rating: i % 2 === 0 ? "16+" : "13+",
    duration: `${1 + (i % 2)}h ${10 + i}m`,
    description:
      "A gripping story of ambition, betrayal, and redemption that keeps you on the edge of your seat from start to finish.",
    genre: [genre],
  }));
}

export const trending = makeRow("trend", 12, "Trending");
export const originals = makeRow("orig", 10, "Original");
export const action = makeRow("act", 10, "Action");
export const comedies = makeRow("com", 10, "Comedy");
export const tvShows = makeRow("tv", 12, "TV Show");
export const movies = makeRow("mov", 12, "Movie");
export const newAndPopular = makeRow("new", 10, "New");
export const myList = [...trending.slice(0, 4), ...action.slice(0, 4)];

export const profiles: Profile[] = [
  { id: "1", name: "Ali", colorSeed: "p1" },
  { id: "2", name: "Sara", colorSeed: "p2" },
  { id: "3", name: "Guest", colorSeed: "p3" },
  { id: "4", name: "Kids", colorSeed: "p4", isKids: true },
];