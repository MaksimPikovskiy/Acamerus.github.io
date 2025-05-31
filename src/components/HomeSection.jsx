import { ArrowDown } from "lucide-react";
import home_data from "../../public/data/home.json";

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 -z-10" />
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
            {home_data.title + " "}
            <span className="text-purple-600 dark:text-purple-400">
              {home_data.subtitle}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl">
            {home_data.description}
          </p>
          <div>
            <a
              href={"#" + home_data.button1.link}
              className="btn btn-primary mr-4"
            >
              {home_data.button1.text}
            </a>
            <a
              href={"#" + home_data.button2.link}
              className="btn btn-secondary"
            >
              {home_data.button2.text}
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
            <img
              src="/profile_img.png"
              alt="Daniel Furmanov"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 right-0 sm:right-10 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
            <p className="text-sm font-medium">
              <span className="block text-purple-600 dark:text-purple-400">{home_data.experience}</span>
              <span className="text-slate-600 dark:text-slate-300">Experience</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Scroll down</p>
        <ArrowDown size={24}/>
      </div>
    </section>
  );
}
