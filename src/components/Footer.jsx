export default function Footer() {
  return (
    <footer id="bottom-footer" className="bg-white shadow-lg mt-10 py-5">
      <div className="container flex gap-5 justify-between items-center">
        <p className="opacity-80">Jorge Armando Ceras Cárdenas</p>

        <ul className="flex flex-wrap gap-2">
          <li>
            <a
              href="https://x.com/armandodev_/"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon hover:scale-125 transition-transform duration-200 ease-in-out"
                src="/icons/twitter.svg"
                alt="Twitter"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/armandodev"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon hover:scale-125 transition-transform duration-200 ease-in-out"
                src="/icons/github.svg"
                alt="GitHub"
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon hover:scale-125 transition-transform duration-200 ease-in-out"
                src="/icons/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          </li>
          <li>
            <a
              href="mailto:jorge.armando.c.cardenas@gmail.com"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon hover:scale-125 transition-transform duration-200 ease-in-out"
                src="/icons/gmail.svg"
                alt="Email"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
