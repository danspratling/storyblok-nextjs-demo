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
    <div className="flex flex-col mb-4 text-left gap-1">
      <label htmlFor={name} className={hideLabel ? "sr-only" : ""}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        {...register(name, { required })}
        className="w-full px-3 py-4 mb-2 bg-white border border-gray-200 rounded-lg outline-none shadow-xs focus:ring-1 focus:ring-gray-700 dark:text-black"
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
          className="w-full px-3 py-4 bg-white border border-gray-200 rounded-lg outline-none shadow-xs focus:ring-1 focus:ring-gray-700 dark:text-black"
        />
      )}
    </div>
  );
};

export default Select;
