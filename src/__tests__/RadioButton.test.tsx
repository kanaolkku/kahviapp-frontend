import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import RadioButton from "../components/RadioButton";
const handleRadio = jest.fn();

describe("RadioButton", () => {
  it("should be rendered", () => {
    render(
      <RadioButton
        handleRadio={handleRadio}
        value="12"
        name="roast"
        checked={true}
      />
    );
    const radioButton: HTMLInputElement = screen.getByLabelText("12");
    expect(radioButton).toBeInTheDocument();
  });

  it("test default checked", () => {
    render(
      <>
        <RadioButton
          handleRadio={handleRadio}
          value="1"
          name="roast"
          checked={true}
        />
        <RadioButton handleRadio={handleRadio} value="2" name="roast" />
      </>
    );
    const radioButton1: HTMLInputElement = screen.getByLabelText("1");
    const radioButton2: HTMLInputElement = screen.getByLabelText("2");

    expect(radioButton1.checked).toBe(true);
    expect(radioButton2.checked).toBe(false);
  });

  it("should change checked on click", () => {
    render(
      <>
        <RadioButton
          handleRadio={handleRadio}
          value="1"
          name="roast"
          checked={true}
        />
        <RadioButton handleRadio={handleRadio} value="2" name="roast" />
      </>
    );
    const radioButton1: HTMLInputElement = screen.getByLabelText("1");
    const radioButton2: HTMLInputElement = screen.getByLabelText("2");

    expect(radioButton1.checked).toBe(true);
    expect(radioButton2.checked).toBe(false);

    fireEvent.click(radioButton2);

    expect(radioButton1.checked).toBe(false);
    expect(radioButton2.checked).toBe(true);
  });
});
