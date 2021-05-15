import React, { useState } from "react";

const NotesForm = (props) => {
  const { formSubmit, title: noteTitle, body: noteBody } = props;

  const [title, setTitle] = useState(noteTitle ? noteTitle : "");

  const [body, setBody] = useState(noteBody ? noteBody : "");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: title,

      body: body,
    };

    formSubmit(formData);

    setTitle("");

    setBody("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={{ marginBottom: "10px" }}
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <br />

        <input
          style={{ marginBottom: "10px" }}
          type="text"
          placeholder="Body"
          value={body}
          onChange={handleBodyChange}
        />
        <br />

        <input className="btn btn-primary btn-sm" type="submit" value="save" />
      </form>
    </div>
  );
};

export default NotesForm;
