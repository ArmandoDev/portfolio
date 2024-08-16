import Article from "../components/Article";

export default function About() {
  return (
    <Article articleId="about" className="min-h-fit">
      <section className="w-full grid gap-5">
        <h2 className="text-3xl font-bold">{">"} Acerca de</h2>

        <p className="font-medium opacity-80">
          {">"} Soy desarrollador web Full-stack con más de 3 años de
          experiencia. Actualmente, me enfoco en proyectos personales y
          contribuyo activamente a repositorios Open Source, lo que me permite
          mantenerme actualizado y aportar a la comunidad de desarrolladores.
        </p>
        <p className="font-medium opacity-80">
          {">"} Mi formación académica incluye estudios en programación en el
          Centro de Estudios Industrial y de Servicios no. 121. Actualmente,
          estoy cursando la carrera de Ingeniería en Sistemas en el Instituto
          Tecnológico de Jiquilpan, Michoacán, México, lo que me proporciona una
          sólida base teórica y práctica en el campo.
        </p>
        <p className="font-medium opacity-80">
          {">"} Me desempeño como desarrollador web freelance, lo que me permite
          trabajar en diversos proyectos y ampliar constantemente mis
          habilidades. Además, comparto mi conocimiento a través de mi canal de
          YouTube,{" "}
          <a
            className="text-blue-500 underline"
            href="https://www.youtube.com/@programacionencorto?sub_confirmation=1"
            title="Visita mi canal de YouTube: Programación en corto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Programación en corto
          </a>
          , donde enseño programación en español, contribuyendo así a la
          comunidad hispanohablante de desarrolladores.
        </p>
        <p className="font-medium opacity-80">
          {">"} Mi lengua materna es el español (México), y también tengo
          conocimientos de inglés. Aunque mi enfoque principal es trabajar con
          clientes hispanohablantes, tengo experiencia en proyectos que
          requieren internacionalización, como se puede ver en mi sección de{" "}
          <a
            className="text-blue-500 underline"
            href="#projects"
            title="Ver mis proyectos"
          >
            proyectos
          </a>
          . Estoy abierto a colaborar en proyectos multilingües y con equipos
          internacionales cuando sea necesario.
        </p>
      </section>
    </Article>
  );
}
