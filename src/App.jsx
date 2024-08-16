import { lazy, Suspense } from "react";
import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
const About = lazy(() => import("./sections/About.jsx"));
const Projects = lazy(() => import("./sections/Projects.jsx"));
const Skills = lazy(() => import("./sections/Skills.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));
import Footer from "./components/Footer.jsx";
import Spinner from "./components/Spinner.jsx";

export default function App() {
  return (
    <>
      <Header />

      <main className="container grid gap-8">
        <Hero />
        <Suspense fallback={<Spinner />}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
