import { Movie, Profile } from "@/app/types";

function makeRow(
  prefix: string, 
  count: number, 
  genre: string, 
  imageUrls: string[]
): Movie[] {
  const offset = prefix.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    title: `${genre} Title ${i + 1}`,
    posterUrl: imageUrls[(i + offset) % imageUrls.length], 
    year: 2020 + (i % 5),
    rating: i % 2 === 0 ? "16+" : "13+",
    duration: `${1 + (i % 2)}h ${10 + i}m`,
    description: "A gripping story of ambition, betrayal, and redemption that keeps you on the edge of your seat from start to finish.",
    genre: [genre],
  }));
}

const myImages = [
  "/images/movies/MONEY heist.jpg",
  "/images/movies/moneyheist2.jpg",
  "/images/movies/sqgame1.jpg",
  "/images/movies/peakyb1.jpg",
  "/images/movies/mirza1.jpg",
  "/images/movies/johnwick1.jpg",
  "/images/movies/joker.jpg",
  "/images/movies/kd1.jpg",
  "/images/movies/kd2.jpg",
  "/images/movies/bman1.jpg",
  "/images/movies/GOT1.jpg",
  "/images/movies/got3.jpg",
];

export const trending = makeRow("trend", 12, "Trending", myImages);
export const originals = makeRow("orig", 10, "Original", myImages);
export const action = makeRow("act", 10, "Action", myImages);
export const comedies = makeRow("com", 10, "Comedy", myImages);
export const tvShows = makeRow("tv", 12, "TV Show", myImages);
export const movies = makeRow("mov", 12, "Movie", myImages);
export const newAndPopular = makeRow("new", 10, "New", myImages);

export const myList = [...trending.slice(0, 4), ...action.slice(0, 4)];

// --- ADDED HELPER FUNCTION ---
export const getAllMovies = (): Movie[] => [
  ...trending, 
  ...originals, 
  ...action, 
  ...comedies, 
  ...tvShows, 
  ...movies
];

export const profiles: Profile[] = [
  { id: "1", name: "Hassam", colorSeed: "p1" },
  { id: "2", name: "Saad", colorSeed: "p2" },
  { id: "3", name: "Ahmad", colorSeed: "p3" },
  { id: "4", name: "Qasim", colorSeed: "p4", isKids: true },
];