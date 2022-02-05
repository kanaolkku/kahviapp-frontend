import React from "react";
import "./input.css";

interface MyProps {
  value: string;
  handler: Function;
  placeholder?: string;
  default?: boolean;
}

const Input = ({ value, handler, placeholder }: MyProps) => {
  const inputHandler = (value: string) => {
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
