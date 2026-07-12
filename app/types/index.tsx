export interface Movie {
  id: string;
  title: string;
  posterSeed: string; // used to generate a picsum image
  year: number;
  rating: string; // e.g. "16+"
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