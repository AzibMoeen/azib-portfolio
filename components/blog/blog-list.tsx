"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/data/types";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [visiblePosts, setVisiblePosts] = useState(4);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 4, posts.length));
  };

  return (
    <div ref={ref} className="space-y-8">
      {posts.slice(0, visiblePosts).map((post, index) => (
        <article
          key={post.slug}
          className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-all duration-700 hover:shadow-md ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <Link href={`/blog/${post.slug}`} className="group">
            <div className="md:flex">
              <div className="relative md:w-1/3 h-60 md:h-auto">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                    >
                      {category}
                    </span>
                  ))}
                </div>{" "}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h2>
                <div className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                  <div className="flex items-center mr-6">
                    <Calendar size={14} className="mr-1" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center font-medium text-primary-500 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                  Read more
                  <ArrowRight
                    size={16}
                    className="ml-1 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}{" "}
      {visiblePosts < posts.length && (
        <div className="text-center">
          <Button
            onClick={loadMore}
            variant="outline"
            className="border-primary-500 text-primary-500 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-gray-700"
          >
            Load More Articles
          </Button>
        </div>
      )}
    </div>
  );
}
