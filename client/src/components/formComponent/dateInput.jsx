export default function DateInput({ label, name }) {
  return (
    <div>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        type="date"
        className="px-3 py-2 mt-[px] border rounded w-full outline-none text-[#999]"
      />
    </div>
  );
}
