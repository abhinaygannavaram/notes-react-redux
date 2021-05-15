import React from "react";

import { useDispatch } from "react-redux";

import { startAddNote } from "../actions/usersAction";

import NotesForm from "./NotesForm";

const AddNote = (props) => {
  const dispatch = useDispatch();

  const formSubmit = (note) => {
    dispatch(startAddNote(note));
  };

  return (
    <div className="col-md-6 text-left">
      <hr />

      <h2>Add Note</h2>

      <NotesForm formSubmit={formSubmit} />
    </div>
  );
};

export default AddNote;
