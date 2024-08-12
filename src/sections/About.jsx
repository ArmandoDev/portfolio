import Article from "../components/Article";

export default function About() {
  return (
    <Article articleId="about" className="min-h-fit">
      <section className="w-full grid gap-5">
        <h2 className="text-3xl font-bold">{">"} Acerca de</h2>

        <p className="font-medium opacity-80">
          {">"} Soy desarrollador web Full-stack, desde hace más de 3 años, con
          experiencia en desarrollo web, por el momento trabajando solo con
          proyectos personales, y aportando a repositorios Open Source.
        </p>

        <p className="font-medium opacity-80">
          {">"} Estudié programación en el Centro de Estudios Industrial y de
          Servicios no. 121 y actualmente curso la carrera de Ingeniería en
          Sistemas en el Instituto Tecnológico de Jiquilpan, Michoacán, México.
        </p>

        <p className="font-medium opacity-80">
          {">"} Trabajo como desarrollador web freelance, y también tengo un
          canal de YouTube,{" "}
          <a
            className="text-blue-500 underline"
            href="https://www.youtube.com/@programacionencorto?sub_confirmation=1"
            title="Programación en corto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Programación en corto
          </a>
          , donde enseño programación en español.
        </p>
      </section>
    </Article>
  );
}
