const usersRegInitialValue = {};

const usersReducer = (state = usersRegInitialValue, action) => {
  switch (action.type) {
    case "REGISTER_USER": {
      return { ...action.payload };
    }

    case "REMOVE_USER": {
      return usersRegInitialValue;
    }

    default: {
      return state;
    }
  }
};

export default usersReducer;
