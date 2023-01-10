const Checkbox = ({ name, label, required, register }) => (
  <div className="mb-4 flex gap-3 text-left">
    <input
      name={name}
      id={name}
      type="checkbox"
      {...register(name, { required })}
    />
    <label htmlFor={name}>{label}</label>
  </div>
);

export default Checkbox;
