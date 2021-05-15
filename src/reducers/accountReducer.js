const accountInitialValue = {};

const accountReducer = (state = accountInitialValue, action) => {
  switch (action.type) {
    case "USER_ACCOUNT": {
      return { ...action.payload };
    }

    case "REMOVE_ACCOUNT": {
      return accountInitialValue;
    }

    default: {
      return state;
    }
  }
};

export default accountReducer;
