import { useState } from "react";
import testimonials_data from "../../public/data/testimonials.json";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials_data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials_data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title">Testimonials</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Large Screen View */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials_data.length;
              const testimonial = testimonials_data[index];

              return (
                <div
                  key={testimonial.id}
                  className={`relative testimonial-card transition-all duration-300 ${
                    offset === 1
                      ? "scale-105 shadow-lg z-10"
                      : "scale-95 opacity-75"
                  }`}
                >
                  <Quote
                    size={32}
                    className="text-purple-400 opacity-20 absolute top-4 right-4"
                  />
                  <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Medium and Small Screen View */}
          <div className="flex lg:hidden items-center justify-center min-h-[250px]">
            <div className="relative testimonial-card max-w-100">
              <Quote
                size={32}
                className="text-purple-400 opacity-20 absolute top-4 right-4"
              />
              <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10">
                "{testimonials_data[currentIndex].text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonials_data[currentIndex].image}
                  alt={testimonials_data[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">
                    {testimonials_data[currentIndex].name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonials_data[currentIndex].role},{" "}
                    {testimonials_data[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials_data.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors cursor-pointer ${
                  currentIndex === index
                    ? "bg-purple-600 dark:bg-purple-400"
                    : "bg-slate-300 dark:bg-slate-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-2 md:-left-4 transform -translate-y-1/2 bg-white dark:bg-slate-700 rounded-full p-2 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 bg-white dark:bg-slate-700 rounded-full p-2 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
