import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Check localStorage
    const savedTheme = localStorage.getItem("theme");

    // Apply theme based on user preference or localStorage
    if (savedTheme === "dark" || (!savedTheme && userPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
