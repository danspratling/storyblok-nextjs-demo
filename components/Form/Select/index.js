import { useState } from "react";

const Select = ({
  name,
  label,
  hideLabel,
  options,
  showOther,
  required,
  autoComplete,
  register,
}) => {
  const [currentValue, setCurrentValue] = useState("");

  return (
    <div className="mb-4 flex flex-col gap-1 text-left">
      <label htmlFor={name} className={hideLabel ? "sr-only" : ""}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        {...register(name, { required })}
        className="shadow-xs mb-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-4 outline-none focus:ring-1 focus:ring-gray-700 dark:text-black"
        autoComplete={autoComplete}
        defaultValue=""
        onChange={(e) => setCurrentValue(e.target.value)}
      >
        <option key="" value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        {showOther && (
          <option key="other" value="other">
            Other
          </option>
        )}
      </select>

      {currentValue === "other" && (
        <input
          name={`${name}-other`}
          {...register(`${name}-other`, { required })}
          type="text"
          placeholder="Please specify"
          className="shadow-xs w-full rounded-lg border border-gray-200 bg-white px-3 py-4 outline-none focus:ring-1 focus:ring-gray-700 dark:text-black"
        />
      )}
    </div>
  );
};

export default Select;
