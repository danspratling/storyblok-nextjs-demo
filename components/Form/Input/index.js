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
  <div className="mb-4 text-left grid gap-1">
    <label htmlFor={name} className={hideLabel ? "sr-only" : ""}>
      {label}
    </label>
    <input
      name={name}
      id={name}
      type={type}
      {...register(name, { required })}
      className="w-full px-3 py-4 bg-white border border-gray-200 rounded-lg outline-none shadow-xs dark:text-black focus:ring-1 focus:ring-gray-700"
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  </div>
);

export default Input;
