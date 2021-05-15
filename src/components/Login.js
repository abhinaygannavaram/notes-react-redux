import React, { useState } from "react";

import { startLoginUser } from "../actions/usersAction";

import validator from "validator";

const Login = (props) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState({});

  const errors = {};

  const onSuccess = () => {
    props.history.push("/");

    props.handleAuth();
  };

  const runValidations = () => {
    //password

    if (password.trim().length === 0) {
      errors.password = "password cannot be blank";
    }

    //email

    if (email.trim().length === 0) {
      errors.email = "email cannot be blank";
    } else if (!validator.isEmail(email)) {
      errors.email = "invalid email format";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    runValidations();

    if (Object.keys(errors).length === 0) {
      setFormErrors({});

      const formData = {
        email: email,

        password: password,
      };

      //if validations pass

      startLoginUser(formData, onSuccess); // api call
    } else {
      console.log("login form errors", errors);

      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          style={{ marginBottom: "10px" }}
          placeholder="enter email"
          value={email}
          onChange={handleChange}
          name="email"
        />

        {formErrors.email && (
          <span className="text-danger"> {formErrors.email} </span>
        )}

        <br />

        <input
          type="password"
          style={{ marginBottom: "10px" }}
          placeholder="enter password"
          value={password}
          onChange={handleChange}
          name="password"
        />

        {formErrors.password && (
          <span className="text-danger"> {formErrors.password} </span>
        )}

        <br />

        <input className="btn btn-primary btn-sm" type="submit" />
      </form>
    </div>
  );
};

export default Login;
