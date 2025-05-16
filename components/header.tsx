"use client";

import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNavClick = (href: string, blogHref: string) => {
    if (isBlogPage && href.startsWith("#")) {
      router.push(`/${href}`);
    } else {
      router.push(isBlogPage ? blogHref : href);
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home", bloghref: "/" },
    { name: "About", href: "#about", bloghref: "/#about" },
    { name: "Projects", href: "#projects", bloghref: "/#projects" },
    { name: "Skills", href: "#skills", bloghref: "/#skills" },
    { name: "Education", href: "#education", bloghref: "/#education" },
    { name: "Contact", href: "#contact", bloghref: "/#contact" },
    { name: "Blog", href: "/blog", bloghref: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => router.push("/")}
          className="text-xl font-bold text-primary-500 transition-colors hover:text-primary-600"
        >
          Azib Moeen
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href, link.bloghref)}
              className={`text-left text-gray-700 hover:text-primary-500 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 ${
                pathname === link.href || pathname === link.bloghref
                  ? "text-primary-500 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </button>
          ))}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="text-gray-700 hover:text-primary-500 transition-colors dark:text-gray-300 dark:hover:text-primary-400"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="text-gray-700 hover:text-primary-500 transition-colors dark:text-gray-300 dark:hover:text-primary-400"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button
            className="text-gray-700 hover:text-primary-500 transition-colors dark:text-gray-300 dark:hover:text-primary-400"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.bloghref)}
                className="px-4 py-3 text-left text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
