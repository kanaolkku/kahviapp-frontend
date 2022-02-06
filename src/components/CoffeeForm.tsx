import React, { FormEvent, useState } from "react";
import Input from "./Input";
import Notification from "./Notification";
import RadioButton from "./RadioButton";

interface FieldsState {
  name: string;
  weight: string;
  price: string;
  roast: string;
}

const CoffeeForm = ({ getData }: { getData: Function }) => {
  // initialize state for fields
  const [fields, setFields] = useState<FieldsState>({
    name: "",
    weight: "",
    price: "",
    roast: "1",
  });

  //initialize empty notification
  const [notification, setNotification] = useState<{
    type: string;
    message: string;
  }>({ type: "", message: "" });

  const postData = () => {
    //get field values from state
    const { name, weight, price, roast } = fields;

    //validate the numeric values
    if (validateNumericFields([weight, price, roast])) {
      // if fields are valid, create post body
      const postBody = {
        name,
        weight: Number(weight),
        price: Number(price),
        roast: Number(roast),
      };
      // post the body
      fetch("http://localhost:3001/api/coffees", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(postBody),
      })
        .then(() => {
          // update coffee list
          getData();
          // notify user for the succesful action
          setNotification({
            type: "success",
            message: `${name} was successfully added!`,
          });
          // clear notification after 2,5s
          clearNotification();
        })
        .catch((err) => console.log(err));
    } else {
      // return error message
      setNotification({
        type: "error",
        message: "Input error: make sure your fields are correct",
      });
      // clear error message
      clearNotification();
    }
  };

  // checks if val can be parsed
  const isNumeric = (val: string): boolean => {
    return /^\d*\.?\d*$/.test(val);
  };

  // checks array if any elements are unparseable
  const validateNumericFields = (fields: string[]) => {
    let isValid = true;
    fields.forEach((field) => {
      if (!isNumeric(field) || field.length === 0) {
        isValid = false;
      }
    });
    return isValid;
  };

  // submits form after clicking
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    // prevents page reload
    e.preventDefault();
    // posts the data
    postData();
    // resets fields
    setFields({ name: "", weight: "", price: "", roast: "1" });
  };

  const handleName = (name: string): void => {
    setFields({ ...fields, name });
  };

  const handleWeight = (weight: string): void => {
    setFields({ ...fields, weight });
  };

  const handlePrice = (price: string): void => {
    setFields({ ...fields, price });
  };

  const handleRadio = (selected: string): void => {
    setFields({ ...fields, roast: selected });
  };

  // clears notifications after 2,5s
  const clearNotification = () => {
    setTimeout(() => {
      setNotification({ type: "", message: "" });
    }, 2500);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Add a new favourite</h3>
      <Notification type={notification.type} message={notification.message} />
      <span className="input-label">Name</span>
      <Input
        value={fields.name}
        handler={handleName}
        placeholder="Juhla Mokka"
      />
      <span className="input-label">Weight (g)</span>
      <Input value={fields.weight} handler={handleWeight} placeholder="500" />
      <span className="input-label">Price (€)</span>
      <Input value={fields.price} handler={handlePrice} placeholder="5.99" />

      <div className="radio-button-group">
        <span className="input-label">Roast level:</span>
        <RadioButton
          handleRadio={handleRadio}
          value="1"
          name="roast"
          checked={true}
        />
        <RadioButton handleRadio={handleRadio} value="2" name="roast" />
        <RadioButton handleRadio={handleRadio} value="3" name="roast" />
        <RadioButton handleRadio={handleRadio} value="4" name="roast" />
        <RadioButton handleRadio={handleRadio} value="5" name="roast" />
      </div>

      <button type="submit" className="button">
        Add Coffee!
      </button>
    </form>
  );
};

export default CoffeeForm;
