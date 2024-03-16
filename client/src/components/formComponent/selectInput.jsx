export default function selectInput({ label, name, options }) {
  return (
    <div className="flex flex-col">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <select className="px-4 py-2 outline-none border rounded">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
