"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Search
      </h2>
      <form onSubmit={handleSearch} className="relative">
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pr-10 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
        />{" "}
        <Button
          type="submit"
          size="icon"
          className="absolute right-0 top-0 bg-transparent hover:bg-transparent text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400"
        >
          <Search size={18} />
        </Button>
      </form>
    </div>
  );
}
