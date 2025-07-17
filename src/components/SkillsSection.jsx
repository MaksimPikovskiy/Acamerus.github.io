import { useEffect, useRef, useState } from "react";
import skills_data from "../data/skills.json";
import { Award, CircleCheck, ExternalLink } from "lucide-react";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-900"
      ref={sectionRef}
    >
      <div className="section-container">
        <h2 className="section-title">{skills_data.section_title}</h2>

        {skills_data.awards.length > 0 && (
          <div className=" bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
              Awards
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills_data.awards.map((award, index) => (
                <div
                  key={index}
                  className="relative border border-slate-200 dark:border-slate-700 rounded-lg p-4 shadow-md transition-transform hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-3 min-h-[50px]">
                    <Award className="shrink-0 w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
                    <h4 className="font-medium">{award.name}</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                    {award.description}
                  </p>
                  {award.link && (
                    <a
                      href={award.link}
                      className="absolute bottom-2 right-2 text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills_data.categories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skill_index) => (
                  <div key={skill_index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-purple-600 dark:text-purple-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transition: `width 1s ease-out ${skill_index * 0.2}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {skills_data.certifications.length > 0 && (
          <div className="mt-16 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
              Certifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills_data.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:border-purple-600 dark:hover:border-purple-400 transition-colors"
                >
                  <div className="flex items-center mb-3">
                    <CircleCheck className="shrink-0 w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
                    <h4 className="font-medium">{cert.name}</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
