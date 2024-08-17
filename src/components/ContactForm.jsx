import { useState } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";

export default function ContactForm({ setStatus }) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    try {
      const res = await fetch("https://formspree.io/f/mnnazrnb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      handleResponse(res.status);
    } catch (error) {
      handleResponse(500);
    }
  };

  const handleResponse = (status) => {
    if (status === 200) {
      setStatus({
        submitting: false,
        submitted: true,
        info: { error: false, msg: "¡Gracias por tu mensaje!" },
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus({
        submitting: false,
        submitted: true,
        info: {
          error: true,
          msg: "Ha ocurrido un error al enviar el formulario, intenta de nuevo más tarde.",
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full grid gap-4">
      <FormInput
        label="Nombre o empresa"
        name="name"
        type="text"
        placeholder="John Doe/Empresa"
        value={formData.name}
        onChange={handleChange}
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        placeholder="john.doe@gmail.com"
        value={formData.email}
        onChange={handleChange}
      />
      <FormInput
        label="Mensaje"
        name="message"
        type="textarea"
        placeholder="Hola, soy John Doe..."
        value={formData.message}
        onChange={handleChange}
        rows={5}
      />
      <SubmitButton submitting={status.submitting} />
    </form>
  );
}
