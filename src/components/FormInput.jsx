export default function FormInput({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  rows,
}) {
  const inputClass =
    "w-full rounded-lg border border-solid border-gray-300 p-2";

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium opacity-80 mb-1"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          className={`${inputClass} resize-none`}
          placeholder={placeholder}
          required
          rows={rows}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          id={name}
          name={name}
          className={inputClass}
          type={type}
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
