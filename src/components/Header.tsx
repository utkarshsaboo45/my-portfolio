"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    setMounted(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return; // only run on homepage
  
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.3, // trigger when ~30% of a section is visible
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    // Default active section (top of page)
    setActiveSection("#about");
  
    // Handle bottom edge (last section)
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        setActiveSection("#contact");
      }
    };
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);


  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        // already on homepage → just smooth scroll
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        // navigate home and scroll, but don't stack history
        router.replace("/" + href, { scroll: false });
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      // normal route (e.g. /projects)
      if (pathname !== href) router.push(href);
    }
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "#skills" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <h1
          className="font-bold text-lg text-gray-800 dark:text-gray-100 cursor-pointer"
          onClick={() => router.push("/")}
        >
          Utkarsh Saboo
        </h1>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`transition-colors ${
                    (pathname === "/projects" && item.href === "/projects") ||
                    (pathname === "/" && activeSection === item.href)
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-200"
                }`}
                >
                {item.label}
                </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Download Resume
          </a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {mounted &&
              (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
          </button>
        </div>
      </nav>
    </header>
  );
}
