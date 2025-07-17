import experience_data from "../data/experience.json";
import { Briefcase, Calendar, Link, MapPin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>

        <div className="space-y-12">
          {experience_data.map((experience, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-transform hover:transform hover:scale-105"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-betweem gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {experience.position}
                  </h3>
                  <div className="mt-2 space-y-2">
                    <a
                      href={experience.company_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      <Briefcase size={18} className="mr-2" />
                      <span>{experience.company}</span>
                    </a>
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <MapPin size={18} className="mr-2" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <Calendar size={18} className="mr-2" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                      Key Contributions
                    </h4>
                    <ul className="list-disc list-outside space-y-1 text-slate-600 dark:text-slate-400">
                      {experience.contributions.map((contribution, index) => (
                        <li key={index} className="ms-5">{contribution}</li>
                      ))}
                    </ul>
                  </div>

                  {experience.evaluation.length > 0 && (
                    <div>
                      <a
                        href={experience.evaluation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
                      >
                        <Link
                          size={18}
                        />
                        <h4 className="font-semibold">
                          Evaluation
                        </h4>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
