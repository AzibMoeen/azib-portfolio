export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  readingTime: number;
  categories: string[];
  content: string[];
}
