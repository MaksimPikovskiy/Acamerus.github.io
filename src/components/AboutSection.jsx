import { Briefcase, Award, Users, BookOpen } from "lucide-react";
import about_data from "../../public/data/about.json";

const iconMap = {
  Briefcase: Briefcase,
  Award: Award,
  Users: Users,
  BookOpen: BookOpen,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {about_data.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg mb-6 leading-relaxed text-slate-700 dark:text-slate-300"
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-4">
              <a
                href={`#${about_data.about_button1.link}`}
                className="btn btn-primary"
              >
                {about_data.about_button1.name}
              </a>
              <a
                href={`${about_data.about_button2.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {about_data.about_button2.name}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {about_data.cards.map((card, index) => {
              const IconToRender = iconMap[card.icon];
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105"
                >
                  <IconToRender
                    className="text-purple-600 dark:text-purple-400 mb-4"
                    size={32}
                  />
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {card.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
