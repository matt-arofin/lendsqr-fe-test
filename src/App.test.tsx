import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./views/Login";

describe("Login", () => {
  it("renders login form with email and password fields and submit button", () => {
    render(<Login />);

    const emailField = screen.getByTestId("email-field");
    expect(emailField).toBeInTheDocument();
    expect(emailField).toHaveAttribute("type", "email");

    const passwordField = screen.getByTestId("password-field");
    expect(passwordField).toBeInTheDocument();
    expect(passwordField).toHaveAttribute("type", "password");

    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
  });

  // it("validates email and password fields", async () => {
  //   render(<Login />);

  //   const emailField = screen.getByTestId("email-field");
  //   const passwordField = screen.getByTestId("password-field");
  //   const submitButton = screen.getByTestId("submit-button");

    // Test validation messages are not shown when form is untouched
    // expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
    // expect(screen.queryByText("Password is required")).not.toBeInTheDocument();

    // Test validation message is shown when email field is touched and empty
    // fireEvent.blur(emailField);
    // expect(await screen.findByText("Email is required")).toBeInTheDocument();

    // Test validation message is shown when email is invalid
    // fireEvent.change(emailField, { target: { value: "invalidemail" } });
    // fireEvent.blur(emailField);
    // expect(await screen.findByText("Email is invalid")).toBeInTheDocument();

    // Test validation message is shown when password field is touched and empty
    // fireEvent.change(emailField, { target: { value: "validemail@example.com" } });
    // fireEvent.blur(passwordField);
    // expect(await screen.findByText("Password is required")).toBeInTheDocument();

    // Test validation message is hidden when both fields are filled
    // fireEvent.change(passwordField, { target: { value: "password" } });
    // expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
    // expect(screen.queryByText("Password is required")).not.toBeInTheDocument();

    // Test submit button is disabled when form is invalid
    // fireEvent.change(emailField, { target: { value: "invalidemail" } });
    // expect(submitButton).toBeDisabled();
  // });
});