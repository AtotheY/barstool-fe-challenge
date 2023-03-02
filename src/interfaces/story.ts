interface Author {
  name: string;
  avatar: string;
  [key: string]: any;
}

interface Thumbnail {
  desktop: string;
  raw_desktop: string;
  [key: string]: any;
}

export default interface Story {
  id: number;
  title: string;
  url: string;
  thumbnail: Thumbnail;
  author: Author;
  date: string;
  [key: string]: any; // adding to avoid adding types for every single property returned via api for this challenge
}
