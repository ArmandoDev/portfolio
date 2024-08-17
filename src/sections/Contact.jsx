import { useState } from "react";
import Article from "../components/Article";
import ContactForm from "./../components/ContactForm";
import StatusMessage from "./../components/StatusMessage";

export default function Contact() {
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    info: { error: false, msg: null },
  });

  return (
    <Article articleId="contact" className="min-h-fit">
      <section className="w-full grid gap-5">
        <h2 className="text-3xl font-bold">{">"} Contacto</h2>
        <p className="font-medium opacity-80">
          Si tienes alguna pregunta, comentario, sugerencia y/o propuesta,
          puedes enviarme un mensaje por el siguiente formulario:
        </p>

        <StatusMessage status={status} />
        <ContactForm setStatus={setStatus} />
      </section>
    </Article>
  );
}
