export interface Movie {
  id: string;
  title: string;
  posterUrl: string; // local path e.g. "/images/movies/trend-1.jpg"
  year: number;
  rating: string;
  duration: string;
  description: string;
  genre: string[];
}

export interface Profile {
  id: string;
  name: string;
  colorSeed: string;
  isKids?: boolean;
}