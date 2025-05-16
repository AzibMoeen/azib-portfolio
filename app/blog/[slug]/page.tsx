import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import RecentPosts from "@/components/blog/recent-posts";

// Metadata generation
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blogPosts = await import("@/data/blog-posts").then(
    (mod) => mod.blogPosts
  );
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Azib Moeen",
    };
  }

  return {
    title: `${post.title} | Azib Moeen`,
    description: post.excerpt,
  };
}

// Page rendering
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const blogPosts = await import("@/data/blog-posts").then(
    (mod) => mod.blogPosts
  );

  if (!params.slug) {
    notFound();
  }

  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-16 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to all posts
        </Link>

        <article className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="relative w-full h-[400px]">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                >
                  {category}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 text-sm mb-8">
              <div className="flex items-center mr-6">
                <Calendar size={14} className="mr-1" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            More Articles
          </h2>
          <RecentPosts
            posts={blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)}
            horizontal
          />
        </div>
      </div>
    </div>
  );
}
