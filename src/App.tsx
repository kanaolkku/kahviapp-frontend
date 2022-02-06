import React, { useEffect, useState } from "react";
import "./App.css";
import CoffeeForm from "./components/CoffeeForm";

interface coffeeItem {
  name: string;
  weight: Number;
  price: number;
  roast: Number;
}

function App() {
  const [coffeeData, setCoffeeData] = useState<coffeeItem[]>([]);

  // function for getting coffee data
  const getData = () => {
    fetch("http://localhost:3001/api/coffees")
      .then((data) => data.json())
      .then((data) => {
        setCoffeeData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // get coffee data from backend
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Your favourite coffee list</h1>
      <CoffeeForm getData={getData} />
      <div className="coffee-list">
        <h2>Your List: </h2>
        <table data-testid="coffee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Weight (g)</th>
              <th>Roast</th>
              <th>Price (€)</th>
            </tr>
          </thead>
          <tbody>
            {coffeeData.map((coffeeItem, index) => {
              return (
                <tr key={index + "tr"} data-testid={"coffee-item-" + index}>
                  <td>{coffeeItem.name}</td>
                  <td>{coffeeItem.weight}</td>
                  <td>{coffeeItem.roast}</td>
                  <td>{coffeeItem.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
