import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

const postForm = (name: string, weight: string, price: string) => {
  const nameInput = screen.getByPlaceholderText(/juhla mokka/i);
  fireEvent.click(nameInput);
  fireEvent.change(nameInput, { target: { value: name } });

  const weightInput = screen.getByPlaceholderText(/500/i);
  fireEvent.click(weightInput);
  fireEvent.change(weightInput, { target: { value: weight } });

  const priceInput = screen.getByPlaceholderText(/5.99/i);
  fireEvent.click(priceInput);
  fireEvent.change(priceInput, { target: { value: price } });

  const submitButton = screen.getByText(/add coffee!/i);

  fireEvent.click(submitButton);
};

describe("App", () => {
  it('renders renders "Your favourite coffee list"', () => {
    render(<App />);
    const headerElement = screen.getByText(/Your favourite coffee list/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('Renders "Your List"', () => {
    render(<App />);
    const headerElement = screen.getByText(/your list:/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("Renders coffees table", () => {
    render(<App />);
    const tableHeaderElement = screen.getByTestId("coffee-table");
    expect(tableHeaderElement).toBeVisible();
  });

  // requires the server to be running and for it to have at least 1 coffee
  it("Coffee table filled with coffees", async () => {
    render(<App />);
    const tableRow = await screen.findByTestId("coffee-item-0");
    expect(tableRow).toBeInTheDocument();
  });
});
