export type Show = {
  id: number;
  url: string;
  image?: Image;
  name: string;
  genres: string[];
  rating: { average?: number };
  summary?: string;
};

export type Image = {
  medium: string;
  original: string;
};
 