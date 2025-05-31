import { Calendar, GraduationCap, MapPin } from "lucide-react";
import education_data from "../../public/data/education.json";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education_data.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-slate-900 dark:text-white font-medium">
                  {edu.college}
                </p>
                <div className="flex items-center text-slate-700 dark:text-slate-300">
                  <MapPin size={16} className="mr-2" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center text-slate-700 dark:text-slate-300">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.period}</span>
                </div>
                {edu.GPA.length > 0 && (
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    GPA: {edu.GPA} / 4.0
                  </p>
                )}
              </div>

              {edu.coursework.length > 0 && (
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, index) => (
                      <span
                        key={index}
                        className="bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-700 dark:text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
