import React from "react";

import { Link, Route, withRouter } from "react-router-dom";

import { removeUser, resetNote, removeAccount } from "../actions/usersAction";

import { useDispatch } from "react-redux";

import swal from "sweetalert";

import Home from "./Home";

import Register from "./Register";

import Login from "./Login";

import Account from "./Account";

import NotesContainer from "./NotesContainer";

const NavBar = (props) => {
  const dispatchUser = useDispatch();

  const dispatchNote = useDispatch();

  const dispatchAccount = useDispatch();

  const { userLoggedIn, handleAuth } = props;

  return (
    <div>
      <p>
        <span>
          <Link to="/">Home</Link>
        </span>{" "}
        |
        {userLoggedIn ? (
          <>
            <span>
              <Link to="/account">Account</Link>
            </span>{" "}
            |
            <span>
              <Link to="/mynotes">My Notes</Link>
            </span>{" "}
            |
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                swal({
                  title: "Are you sure?",

                  text: "this will logout from your page!",

                  icon: "warning",

                  buttons: true,

                  dangerMode: true,
                }).then((isLoggedOut) => {
                  if (isLoggedOut) {
                    localStorage.removeItem("token");

                    // reseting regUser, notes, userAccount

                    dispatchUser(removeUser());

                    dispatchNote(resetNote());

                    dispatchAccount(removeAccount());

                    swal("successfully logged out", {
                      icon: "success",
                    });

                    handleAuth();

                    props.history.push("/");
                  }
                });
              }}
            >
              Logout
            </span>
          </>
        ) : (
          <>
            <span>
              <Link to="/register">Register</Link>
            </span>{" "}
            |
            <span>
              <Link to="/login">Login</Link>
            </span>
          </>
        )}
      </p>

      <Route path="/" component={Home} exact={true} />

      <Route path="/register" component={Register} />

      <Route
        path="/login"
        render={(props) => {
          return <Login {...props} handleAuth={handleAuth} />;
        }}
      />

      <Route path="/account" component={Account} />

      <Route path="/mynotes" component={NotesContainer} />
    </div>
  );
};

const WrappedComponent = withRouter(NavBar);

export default WrappedComponent;
