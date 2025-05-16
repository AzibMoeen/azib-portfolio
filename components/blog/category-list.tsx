import Link from "next/link";

const categories = [
  { name: "React", count: 5 },
  { name: "Next.js", count: 3 },
  { name: "MongoDB", count: 2 },
  { name: "Node.js", count: 4 },
  { name: "JavaScript", count: 6 },
  { name: "Web Development", count: 8 },
  { name: "UI/UX", count: 3 },
];

export default function CategoryList() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Categories
      </h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/blog?category=${category.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="text-gray-700 dark:text-gray-300">
              {category.name}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
              {category.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
