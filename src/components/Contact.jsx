import { useRef, useState } from "react";
import contact_data from "../../public/data/contact.json";
import { Check, LoaderCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import IconComponent from "./IconComponent";
import emailjs from "@emailjs/browser";

const iconMap = {
  mail: Mail,
  phone: Phone,
  location: MapPin,
};

export default function ContactSection() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setIsSubmitted(false);

      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        console.error("EmailJS configuration is missing.");
        setIsSubmitting(false);
        return;
      }

      // Send email using EmailJS
      emailjs.sendForm(serviceId, templateId, form.current, userId).then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setIsSubmitting(false);

          setIsSubmitted(true);
          setErrors({});

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setIsSubmitting(false);
        }
      );
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8 text-slate-700 dark:text-slate-300">
              {contact_data.text}
            </p>

            <div className="space-y-6">
              {contact_data.contact.map((item, index) => {
                const IconToRender = iconMap[item.name];
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                      <IconToRender className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                      </h3>
                      {item.action.length > 0 ? (
                        <a
                          href={`${item.action}${item.text}`}
                          className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-slate-300 truncate">
                          {contact.text}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium mb-4">Connect</h3>
              <div className="flex space-x-4">
                {contact_data.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    <IconComponent
                      name={link.name}
                      className=""
                      width="24"
                      height="24"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 dark:bg-green-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {contact_data.message_sent.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {contact_data.message_sent.text}
                </p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`contact-input ${
                      errors.name ? "border-red-500 dark:border-red-500" : ""
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`contact-input ${
                      errors.email ? "border-red-500 dark:border-red-500" : ""
                    }`}
                    placeholder="Your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`contact-input ${
                      errors.subject ? "border-red-500 dark:border-red-500" : ""
                    }`}
                    placeholder="Subject for your message"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`contact-input resize-none ${
                      errors.message ? "border-red-500 dark:border-red-500" : ""
                    }`}
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2" size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
