import React from "react";
import "./Radiobutton.css";
interface MyProps {
  handleRadio: Function;
  value: string;
  name: string;
  checked?: boolean;
}

const RadioButton = ({ handleRadio, value, name, checked }: MyProps) => {
  // assign the radiobutton an id that is almost surely unique
  const id = `radio + ${value}`;
  return (
    <div className="radio-button-component">
      <label htmlFor={id}>{value}</label>
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
        onChange={(e) => {
          handleRadio(e.target.value);
        }}
        defaultChecked={checked}
      />
    </div>
  );
};

export default RadioButton;
