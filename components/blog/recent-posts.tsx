import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import type { BlogPost } from "@/data/types";

interface RecentPostsProps {
  posts: BlogPost[];
  horizontal?: boolean;
}

export default function RecentPosts({
  posts,
  horizontal = false,
}: RecentPostsProps) {
  if (horizontal) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            {" "}
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-40">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                  <Calendar size={12} className="mr-1" />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex items-center gap-3"
          >
            <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 group-hover:text-primary-500 transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center text-gray-500 text-xs">
                <Calendar size={12} className="mr-1" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
