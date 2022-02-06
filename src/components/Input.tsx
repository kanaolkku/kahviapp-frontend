import React from "react";
import "./Input.css";

interface MyProps {
  value: string;
  handler: Function;
  placeholder?: string;
  default?: boolean;
}

const Input = ({ value, handler, placeholder }: MyProps) => {
  // I do not know why I made a separate input component, since I didn't implement real-time form validation
  // Having it surely doesn't hurt

  const inputHandler = (value: string): void => {
    handler(value);
  };

  return (
    <div className="input-component">
      <input
        value={value}
        onChange={(e) => {
          inputHandler(e.target.value);
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
