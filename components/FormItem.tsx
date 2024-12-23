import React from "react";

interface FormItemProps {
  label: string; // Corrected "lable" to "label" for consistency
  name: string; // Name attribute for the input field
  type: "text" | "email" | "password" | "number" | "date" | "url"; // Restrict input types to valid HTML input types
}

const FormItem: React.FC<FormItemProps> = ({ label, name, type }) => {
  return (
    <div className="flex flex-col gap-0 sm:gap-2">
      <label className="font-actor-regular text-lg" htmlFor={name}>
        {label}
      </label>
      <div className="border-b border-gray-500">
        <input
          className="focus:outline-none bg-transparent py-2 sm:py-4 text-lg"
          type={type}
          id={name}
          name={name}
          placeholder={`Enter your ${label.toLowerCase()}`} // Dynamic placeholder
        />
      </div>
    </div>
  );
};

export default FormItem;