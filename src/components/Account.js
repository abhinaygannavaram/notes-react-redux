import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { startUserAccount } from "../actions/usersAction";

const Account = (props) => {
  const user = useSelector((state) => {
    return state.account;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startUserAccount());
  }, []);

  return (
    <div>
      <hr />

      <h2>User Account</h2>

      <p> Username - {user.username} </p>

      <p> Email - {user.email} </p>
    </div>
  );
};

export default Account;
