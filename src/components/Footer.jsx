import { SOCIAL_LINKS } from "../utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-300 mt-10 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-center md:text-left mb-4 md:mb-0">
          &copy; {currentYear} | Jorge Armando Ceras Cárdenas.
        </p>

        <ul className="flex gap-2 mt-2">
          {SOCIAL_LINKS.map(({ href, title, icon }) => {
            return (
              <li key={title}>
                <a
                  className="inline-block hover:scale-125 transition-transform duration-200 ease-in-out"
                  href={href}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer me"
                >
                  <img className="icon" src={icon} alt={title} loading="lazy" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
