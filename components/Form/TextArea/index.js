const TextArea = ({ name, label, rows, required, placeholder, register }) => (
  <div className="flex flex-col mb-4 text-left gap-1">
    <label htmlFor={name}>{label}</label>
    <textarea
      name={name}
      id={name}
      {...register(name, { required })}
      className="w-full px-3 py-4 bg-white border border-gray-200 rounded-lg outline-none shadow-xs focus:ring-1 focus:ring-gray-700 dark:text-black"
      placeholder={placeholder}
      rows={rows ?? 4}
      defaultValue={""}
    />
  </div>
);

export default TextArea;
