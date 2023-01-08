const Checkbox = ({ name, label, required, register }) => (
  <div className="flex mb-4 text-left gap-3">
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
