const notesInitialValue = [];

const notesReducer = (state = notesInitialValue, action) => {
  switch (action.type) {
    case "GET_NOTES": {
      return [...action.payload].reverse();
    }

    case "ADD_NOTE": {
      return [{ ...action.payload }, ...state];
    }

    case "EDIT_NOTE": {
      return state.map((n) => {
        if (n._id === action.payload._id) {
          return { ...n, ...action.payload };
        } else {
          return { ...n };
        }
      });
    }

    case "DELETE_NOTE": {
      return state.filter((note) => action.payload !== note._id);
    }

    case "RESET_NOTE": {
      return notesInitialValue;
    }

    default: {
      return state;
    }
  }
};

export default notesReducer;
