const TextArea = ({ name, label, rows, required, placeholder, register }) => (
  <div className="mb-4 flex flex-col gap-1 text-left">
    <label htmlFor={name}>{label}</label>
    <textarea
      name={name}
      id={name}
      {...register(name, { required })}
      className="shadow-xs w-full rounded-lg border border-gray-200 bg-white px-3 py-4 outline-none focus:ring-1 focus:ring-gray-700 dark:text-black"
      placeholder={placeholder}
      rows={rows ?? 4}
      defaultValue={""}
    />
  </div>
);

export default TextArea;
