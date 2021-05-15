import React from "react";

import { useSelector } from "react-redux";

import NotesItem from "./NotesItem";

const NotesList = (props) => {
  const notes = useSelector((state) => {
    return state.notes;
  });

  return (
    <div className="col-md-6 text-left">
      <hr />

      <h2>My Notes</h2>

      {notes.length === 0 ? (
        <p>No notes found add your first note</p>
      ) : (
        <div>
          {notes.map((note) => {
            return <NotesItem key={note._id} {...note} />;
          })}
        </div>
      )}
    </div>
  );
};

export default NotesList;
