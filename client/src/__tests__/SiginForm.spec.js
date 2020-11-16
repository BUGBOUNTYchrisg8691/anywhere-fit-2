import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SigninForm from "../components/SigninForm";

describe("Unit Testing for SigninForm component", () => {
  it("should respond to user input and clear on submit", () => {
    const { getByTestId } = render(<SigninForm />);

    expect(getByTestId("signin-form-user")).toHaveValue("");
    expect(getByTestId("signin-form-pass")).toHaveValue("");

    userEvent.type(getByTestId("signin-form-user"), "asdf");
    userEvent.type(getByTestId("signin-form-pass"), "asdf");

    expect(getByTestId("signin-form-user")).toHaveValue("asdf");
    expect(getByTestId("signin-form-pass")).toHaveValue("asdf");

    userEvent.click(getByTestId("signin-form-submit"));
    expect(getByTestId("signin-form-user")).toHaveValue("");
    expect(getByTestId("signin-form-pass")).toHaveValue("");
  });
});
