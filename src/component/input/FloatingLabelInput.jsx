import { useState } from "react";

const FloatingLabelInput = ({ label, type, value, placeholder, onChange, error, className, disabled }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const showError = error && !focused;

  return (
    <div className={`relative ${focused || value !== "" ? "" : ""}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={focused ? placeholder : ""}
        disabled={disabled }
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`block w-full p-4 shadow pb-2 relative font-medium text-sm bg-transparent z-20 pt-5 h-[50px] border-[1px] border-neutral-500 rounded focus:outline-none ${
          showError ? 'border-red-500' : 'focus:border-blue-500'
        } ${className}`}
      />
      <label
        className={`absolute z-10 left-4 mb-2 transition-all ${
          focused || value !== ""
            ? "text-[12px] top-1 z-40 font-semibold text-gray-700"
            : "text-[15px] top-[14px] font-medium text-gray-700"
        }`}
      >
        {label}
      </label>
      {showError && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FloatingLabelInput;
