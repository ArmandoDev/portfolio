import Article from "../components/Article";

export default function Contact() {
  return (
    <Article articleId="contact" className="min-h-fit">
      <section className="w-full grid gap-5">
        <h2 className="text-3xl font-bold">{">"} Contacto</h2>
        <p className="font-medium opacity-80">
          Si tienes alguna pregunta, comentario, sugerencia y/o propuesta,
          puedes enviarme un mensaje por el siguiente formulario:
        </p>

        <form className="w-full grid gap-2">
          <label>
            <span className="text-sm font-medium opacity-80">
              Nombre o empresa
            </span>
            <input
              className="w-full rounded-lg border border-solid border-gray-300 p-2"
              type="text"
              placeholder="John Doe/Empresa"
              required
            />
          </label>
          <label>
            <span className="text-sm font-medium opacity-80">Email</span>
            <input
              className="w-full rounded-lg border border-solid border-gray-300 p-2"
              type="email"
              placeholder="john.doe@gmail.com"
              required
            />
          </label>
          <label>
            <span className="text-sm font-medium opacity-80">Mensaje</span>
            <textarea
              className="w-full rounded-lg border border-solid border-gray-300 p-2 resize-none"
              placeholder="Hola, soy John Doe..."
              required
              rows="5"
            />
          </label>

          <input
            type="submit"
            className="w-full rounded-lg bg-blue-500 p-2 text-white"
            value="Enviar"
          />
        </form>
      </section>
    </Article>
  );
}
