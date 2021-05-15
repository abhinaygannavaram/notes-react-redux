import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { startRegisterUser } from "../actions/usersAction";

import validator from "validator";

const Register = (props) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState({});

  const errors = {};

  const onSuccess = () => {
    props.history.push("/login");
  };

  const runValidations = () => {
    //name

    if (username.trim().length === 0) {
      errors.username = "username cannot be blank";
    }

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
        username: username,

        email: email,

        password: password,
      };

      dispatch(startRegisterUser(formData, onSuccess)); // api call
    } else {
      console.log("register form errors", errors);

      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div>
      <h2>Register with us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={{ marginBottom: "10px" }}
          placeholder="enter username"
          value={username}
          onChange={handleChange}
          name="username"
        />

        {formErrors.username && (
          <span className="text-danger"> {formErrors.username} </span>
        )}

        <br />

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

export default Register;
