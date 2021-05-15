import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { startUserNotes } from "../actions/usersAction";

import NotesList from "./NotesList";

import AddNote from "./AddNote";

const NotesContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startUserNotes()); // api call - get all notes
  }, []);

  return (
    <div className="row">
      <NotesList />

      <AddNote />
    </div>
  );
};

export default NotesContainer;
