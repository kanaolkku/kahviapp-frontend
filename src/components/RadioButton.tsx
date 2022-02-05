import React, { Fragment } from "react";
import "./radiobutton.css";
interface MyProps {
  handleRadio: Function;
  value: string;
  name: string;
  checked?: boolean;
}

const RadioButton = ({ handleRadio, value, name, checked }: MyProps) => {
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
