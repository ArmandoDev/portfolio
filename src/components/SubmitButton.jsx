export default function SubmitButton({ submitting }) {
  return (
    <button
      type="submit"
      className="w-full rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50"
      disabled={submitting}
    >
      {submitting ? "Enviando..." : "Enviar"}
    </button>
  );
}
