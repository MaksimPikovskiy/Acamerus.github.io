import { ArrowUp } from "lucide-react";
import footer_data from "../../public/data/footer.json";
import IconComponent from "./IconComponent";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">{footer_data.name}</span>
              <span className="ml-2 text-purple-400">
                | {" " + footer_data.title}
              </span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              {footer_data.description}
            </p>
            <div className="flex space-x-4">
              {footer_data.links.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-purple-400 transition-colors"
                  aria-label={link.name}
                >
                  <IconComponent name={link.name} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footer_data.sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={`#${section}`}
                    className="text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              {footer_data.contact.map((contact, index) => (
                <li key={index} className="flex items-start">
                  <IconComponent
                    name={contact.name}
                    className="w-4 h-4 mr-2 text-purple-400 flex-shrink-0 mt-1"
                  />
                  {contact.action.length > 0 ? (
                    <a
                      href={`${contact.action}${contact.text}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-purple-400 transition-colors truncate"
                      title={contact.text}
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-slate-300 truncate">
                      {contact.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} {footer_data.name}. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full transition-colors cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
