import React, { FormEvent, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import RadioButton from "./components/RadioButton";

interface FieldsState {
  name: string;
  weight: string;
  price: string;
  roast: string;
}
function App() {
  const [fields, setFields] = useState<FieldsState>({
    name: "",
    weight: "",
    price: "",
    roast: "1",
  });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fields);
  };

  const handleName = (name: string) => {
    setFields({ ...fields, name });
  };

  const handleWeight = (weight: string) => {
    setFields({ ...fields, weight });
  };

  const handlePrice = (price: string) => {
    setFields({ ...fields, price });
  };

  const handleRadio = (selected: string) => {
    setFields({ ...fields, roast: selected });
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <span>Name</span>
        <Input value={fields.name} handler={handleName} />
        <span>Weight</span>
        <Input value={fields.weight} handler={handleWeight} />
        <span>Price</span>
        <Input value={fields.price} handler={handlePrice} />
        <div className="radio-button-group">
          <span>Roast level:</span>
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
        <button type="submit">Add Coffee!</button>
      </form>

      <table>
        <tr>
          <th>Name</th>
          <th>Weight</th>
          <th>Price</th>
          <th>Roast</th>
        </tr>
        <tr>
          <td>Hieno kahvi</td>
          <td>500</td>
          <td>5.99</td>
          <td>2</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
