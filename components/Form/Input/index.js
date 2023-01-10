const Input = ({
  name,
  label,
  hideLabel,
  type,
  required,
  placeholder,
  autoComplete,
  register,
}) => (
  <div className="mb-4 flex flex-col gap-1 text-left">
    <label htmlFor={name} className={hideLabel ? "sr-only" : ""}>
      {label}
    </label>
    <input
      name={name}
      id={name}
      type={type}
      {...register(name, { required })}
      className="shadow-xs w-full rounded-lg border border-gray-200 bg-white px-3 py-4 outline-none focus:ring-1 focus:ring-gray-700 dark:text-black"
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  </div>
);

export default Input;
