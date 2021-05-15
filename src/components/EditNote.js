import React from "react";

import { useDispatch } from "react-redux";

import { startEditNote } from "../actions/usersAction";

import NotesForm from "./NotesForm";

const EditNote = (props) => {
  const dispatch = useDispatch();

  const { id, title, body, handleToggle } = props;

  const onSuccess = () => {
    handleToggle();
  };

  const formSubmit = (note) => {
    dispatch(startEditNote(note, id, onSuccess));
  };

  return (
    <div>
      <h3>Edit Note</h3>

      <NotesForm id={id} title={title} body={body} formSubmit={formSubmit} />
    </div>
  );
};

export default EditNote;
