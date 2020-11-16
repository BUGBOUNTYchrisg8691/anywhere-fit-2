import React, { useState } from "react";

const initialFormValues = {
  username: "",
  password: "",
};

export default function SigninForm() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormValues(initialFormValues);
  };

  return (
    <form onSubmit={submitHandler} data-test-id="signin-form">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={formValues.username}
        onChange={changeHandler}
        data-testid="signin-form-user"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formValues.password}
        onChange={changeHandler}
        data-testid="signin-form-pass"
      />
      <button data-testid="signin-form-submit">Sign In</button>
    </form>
  );
}
