import { blogPosts } from "@/data/blog-posts";
import BlogPreviewList from "./blog/preview-list";

export default function BlogPreviewSection() {
  const recentPosts = blogPosts.slice(0, 3);
  return <BlogPreviewList posts={recentPosts} />;
}
