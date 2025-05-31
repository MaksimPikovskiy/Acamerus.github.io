import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import navbar_data from "../../public/data/navbar.json";

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const currentSection = navbar_data.sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (section) => {
    setIsMenuOpen(false);
    setActiveSection(section);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `bg-white shadow-md dark:bg-slate-900 py-2`
          : `bg-transparent py-4`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                {navbar_data.name}
              </span>
              <span className="ml-2 text-purple-600 dark:text-purple-400">
                | {navbar_data.title}
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            {navbar_data.sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`nav-link ${
                  activeSection === section ? "active" : ""
                }`}
                onClick={() => handleLinkClick(section)}
              >
                {section.toUpperCase()}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          <div className="flex md:hidden items-center">
            <button
              onClick={toggleDarkMode}
              className="mr-2 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navbar_data.sections.map((section) => (
              <a
              key={section}
                href={`#${section}`} 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => handleLinkClick(section)}
              >
                {section.toUpperCase()}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
