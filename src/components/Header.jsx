import { useState } from "react";
import HeaderLink from "./HeaderLink";
import Hamburger from "hamburger-react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header
      id="top-header"
      className="fixed top-0 left-0 right-0 z-50 px-4 py-2 text-lg"
    >
      <div className="container flex justify-between items-center">
        <a href="/" title="Recargar la página">
          <img
            className="w-12 aspect-square object-cover object-center"
            src="/icons/logo.svg"
            alt="Logo"
          />
        </a>

        <nav>
          <ul
            className={`absolute ${
              isOpen ? "top-0 bg-white" : "-top-[100dvh]"
            } left-0 right-0 h-dvh flex flex-col justify-center items-center z-40 transition-all duration-300 ease-in-out md:static md:flex-row md:gap-2 md:w-fit md:h-fit`}
          >
            <HeaderLink href="#hero" title="Inicio" setOpen={setOpen} />
            <HeaderLink href="#about" title="Acerca de" setOpen={setOpen} />
            <HeaderLink href="#skills" title="Habilidades" setOpen={setOpen} />
            <HeaderLink href="#projects" title="Proyectos" setOpen={setOpen} />
            <HeaderLink href="#contact" title="Contacto" setOpen={setOpen} />
          </ul>
        </nav>

        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={0.3}
          distance="sm"
        />
      </div>
    </header>
  );
}
