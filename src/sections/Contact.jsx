import { useState } from "react";
import Article from "../components/Article";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  return (
    <Article articleId="contact" className="min-h-fit">
      <section className="w-full grid gap-5">
        <h2 className="text-3xl font-bold">{">"} Contacto</h2>
        <p className="font-medium opacity-80">
          Si tienes alguna pregunta, comentario, sugerencia y/o propuesta,
          puedes enviarme un mensaje por el siguiente formulario:
        </p>

        <form onSubmit={handleSubmit} className="w-full grid gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium opacity-80 mb-1"
            >
              Nombre o empresa
            </label>
            <input
              id="name"
              name="name"
              className="w-full rounded-lg border border-solid border-gray-300 p-2"
              type="text"
              placeholder="John Doe/Empresa"
              required
              value={formData.name}
              onChange={handleChange}
              aria-describedby="name-error"
              autoComplete="name"
            />
            <span id="name-error" className="text-red-500 text-xs hidden">
              Error message
            </span>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium opacity-80 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              className="w-full rounded-lg border border-solid border-gray-300 p-2"
              type="email"
              placeholder="john.doe@gmail.com"
              required
              value={formData.email}
              onChange={handleChange}
              aria-describedby="email-error"
              autoComplete="email"
            />
            <span id="email-error" className="text-red-500 text-xs hidden">
              Error message
            </span>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium opacity-80 mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded-lg border border-solid border-gray-300 p-2 resize-none"
              placeholder="Hola, soy John Doe..."
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              aria-describedby="message-error"
              autoComplete="message"
            />
            <span id="message-error" className="text-red-500 text-xs hidden">
              Error message
            </span>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          >
            Enviar
          </button>
        </form>
      </section>
    </Article>
  );
}
