export default function messageInput({ label, name, placeholder }) {
  return (
    <div>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        name={name}
        className="px-3 py-2 border rounded w-full outline-none h-32"
      />
    </div>
  );
}
