export default function InputField({
  label,
  type,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="mb-5">
      <label className="block mb-10 font-semibold text-gray-700 font-serif">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border rounded-lg px-4 py-3 p-5 focus:outline-none focus:ring-2 focus:ring-green-500 h-8"
      />
    </div>
  );
}