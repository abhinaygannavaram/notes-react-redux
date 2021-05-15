import axios from "axios";

import swal from "sweetalert";

export const startRegisterUser = (formData, onSuccess) => {
  return (dispatch) => {
    axios
      .post("http://dct-user-auth.herokuapp.com/users/register", formData)

      .then((response) => {
        const result = response.data;

        if (result.hasOwnProperty("errors")) {
          swal({ title: result.message, icon: "error" });
        } else {
          swal({ title: "successfully created an account", icon: "success" });

          console.log("regUser", result);

          dispatch(registerUser(result));

          onSuccess();
        }
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};
export const registerUser = (users) => {
  return {
    type: "REGISTER_USER",

    payload: users,
  };
};
export const startLoginUser = (formData, onSuccess) => {
  axios
    .post("http://dct-user-auth.herokuapp.com/users/login", formData)

    .then((response) => {
      const result = response.data;

      if (result.hasOwnProperty("errors")) {
        swal({ title: result.errors, icon: "error" });
      } else {
        swal({ title: "successfully logged in", icon: "success" });

        console.log("login", result);

        localStorage.setItem("token", result.token);

        onSuccess();
      }
    })

    .catch((err) => {
      console.log(err.message);
    });
};

export const startUserAccount = () => {
  return (dispatch) => {
    axios
      .get("http://dct-user-auth.herokuapp.com/users/account", {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })

      .then((response) => {
        const result = response.data;

        dispatch(userAccount(result));
      })

      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const userAccount = (user) => {
  return {
    type: "USER_ACCOUNT",

    payload: user,
  };
};

export const removeAccount = () => {
  return {
    type: "REMOVE_ACCOUNT",
  };
};

// ----------------------------------- Notes API ------------------------------------

export const startUserNotes = () => {
  return (dispatch) => {
    axios
      .get("http://dct-user-auth.herokuapp.com/api/notes", {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })

      .then((response) => {
        const result = response.data;

        dispatch(getNotes(result));
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const getNotes = (notes) => {
  return {
    type: "GET_NOTES",

    payload: notes,
  };
};

export const startDeleteNote = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })

      .then((response) => {
        const result = response.data;

        dispatch(deleteNote(result._id));

        swal("Poof! Your note has been deleted!", {
          icon: "success",
        });
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const deleteNote = (id) => {
  return {
    type: "DELETE_NOTE",

    payload: id,
  };
};

export const startNoteModal = (id) => {
  axios
    .get(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, {
      headers: {
        "x-auth": localStorage.getItem("token"),
      },
    })

    .then((response) => {
      const result = response.data;

      swal(result.title, result.body);
    });
};

export const startAddNote = (note) => {
  return (dispatch) => {
    axios
      .post("http://dct-user-auth.herokuapp.com/api/notes", note, {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })

      .then((response) => {
        const result = response.data;

        console.log("added note", result);

        if (result.hasOwnProperty("errors")) {
          swal({ title: result.errors.title.message, icon: "error" });
        } else {
          dispatch(addNote(result));
        }
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const addNote = (note) => {
  return {
    type: "ADD_NOTE",

    payload: note,
  };
};

export const startEditNote = (note, id, onSuccess) => {
  return (dispatch) => {
    axios
      .put(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, note, {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })

      .then((response) => {
        const result = response.data;

        dispatch(editNote(result));

        onSuccess();
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const editNote = (note) => {
  return {
    type: "EDIT_NOTE",

    payload: note,
  };
};

export const removeUser = () => {
  return {
    type: "REMOVE_USER",
  };
};

export const resetNote = () => {
  return {
    type: "RESET_NOTE",
  };
};
