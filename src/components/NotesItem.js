import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { startDeleteNote, startNoteModal } from "../actions/usersAction";

import swal from "sweetalert";

import EditNote from "./EditNote";

const NotesItem = (props) => {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const { _id, title, body } = props;

  const handleToggle = () => {
    const result = !toggle;

    setToggle(result);
  };

  const handleRemove = (id) => {
    swal({
      title: "Are you sure?",

      text: "Once deleted, you will not be able to recover this note!",

      icon: "warning",

      buttons: true,

      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(startDeleteNote(id));
      }
    });
  };

  const handleModal = (id) => {
    startNoteModal(id);
  };

  return (
    <div>
      {toggle ? (
        <div>
          <EditNote
            id={_id}
            title={title}
            body={body}
            handleToggle={handleToggle}
          />

          <button className="btn btn-danger btn-sm" onClick={handleToggle}>
            {" "}
            cancel{" "}
          </button>
        </div>
      ) : (
        <div
          style={{
            borderStyle: "groove",
            borderRadius: "10px",
            marginBottom: "5px",
          }}
        >
          <h4
            onClick={() => {
              handleModal(_id);
            }}
            style={{ cursor: "pointer" }}
          >
            {title}
          </h4>

          <p> {body} </p>

          <button className="btn btn-success btn-sm" onClick={handleToggle}>
            {" "}
            edit{" "}
          </button>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              handleRemove(_id);
            }}
          >
            remove
          </button>
        </div>
      )}
    </div>
  );
};

export default NotesItem;
