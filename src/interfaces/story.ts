interface Author {
  name: string;
  avatar: string;
  author_url: string;
  id: number;
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
  [key: string]: any;
}
