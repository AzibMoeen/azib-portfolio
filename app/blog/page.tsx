import BlogHeader from "@/components/blog/blog-header";
import BlogList from "@/components/blog/blog-list";
import RecentPosts from "@/components/blog/recent-posts";
import CategoryList from "@/components/blog/category-list";
import SearchBar from "@/components/blog/search-bar";
import { blogPosts } from "@/data/blog-posts";

export const metadata = {
  title: "Blog | Azib Moeen",
  description:
    "Read the latest articles on web development, MERN stack, and more by Azib Moeen",
};

export default function BlogPage() {
  return (
    <div className="pt-16 dark:bg-gray-900 min-h-screen">
      <BlogHeader />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogList posts={blogPosts} />
          </div>
          <div className="space-y-8">
            <SearchBar />
            <RecentPosts posts={blogPosts.slice(0, 3)} />
            <CategoryList />
          </div>
        </div>
      </div>
    </div>
  );
}
