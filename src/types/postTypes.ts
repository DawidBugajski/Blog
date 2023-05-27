export type Post = {
  id: string;
  image?: string;
  title: string;
  slug: string;
  excerpt: string;
  blogPost: string;
  user: { id: number; email: string; firstName: string; lastName: string };
};

export type BlogPostProps = {
  data: Post[];
};
