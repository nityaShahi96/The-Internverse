export default function textInput({ label, name, placeholder }) {
  return (
    <div>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className="px-3 py-2 border rounded w-full outline-none"
      />
    </div>
  );
}
