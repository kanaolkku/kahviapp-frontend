import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CoffeeForm from "../components/CoffeeForm";

const getData = jest.fn();

describe("CoffeeForm", () => {
  it("Renders heading 'Add a new favourite'", () => {
    render(<CoffeeForm getData={getData} />);
    const h3Element = screen.getByText("Add a new favourite");
    expect(h3Element).toBeInTheDocument();
  });

  it("renders first input field", () => {
    render(<CoffeeForm getData={getData} />);
    const nameInput = screen.getByPlaceholderText(/juhla mokka/i);
    expect(nameInput).toBeInTheDocument();
  });

  it("renders second input field", () => {
    render(<CoffeeForm getData={getData} />);
    const weightInput = screen.getByPlaceholderText(/500/i);
    expect(weightInput).toBeInTheDocument();
  });

  it("renders third input field", () => {
    render(<CoffeeForm getData={getData} />);
    const priceInput = screen.getByPlaceholderText(/5.99/i);
    expect(priceInput).toBeInTheDocument();
  });

  it("typing into input", () => {
    render(<CoffeeForm getData={getData} />);
    const nameInput: HTMLInputElement =
      screen.getByPlaceholderText(/juhla mokka/i);
    fireEvent.click(nameInput);
    fireEvent.change(nameInput, { target: { value: "Oliver's coffee" } });
    expect(nameInput.value).toBe("Oliver's coffee");
  });

  it("check if default radio button is checked", () => {
    render(<CoffeeForm getData={getData} />);
    const radioLabel: HTMLInputElement = screen.getByLabelText("1");
    expect(radioLabel).toBeChecked();
  });

  it("changing radio button", () => {
    render(<CoffeeForm getData={getData} />);
    const radioLabel: HTMLInputElement = screen.getByLabelText("2");
    expect(radioLabel).not.toBeChecked();
    fireEvent.click(radioLabel);
    expect(radioLabel).toBeChecked();
  });

  //todo form submit
});
