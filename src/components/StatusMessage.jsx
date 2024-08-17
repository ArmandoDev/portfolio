export default function StatusMessage({ status }) {
  if (!status.submitted) return null;

  const messageClass = `text-sm font-medium opacity-80 p-2 rounded-lg ${
    status.info.error ? "bg-red-500 text-white" : "bg-green-500 text-white"
  }`;

  return <div className={messageClass}>{status.info.msg}</div>;
}
