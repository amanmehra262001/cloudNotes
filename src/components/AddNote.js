import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

function AddNote() {
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const context = useContext(NoteContext);
  const { addNote } = context;
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "default",
    }); // to empty the text areas once a note is added
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <h2 className="my-4">Add your notes</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title{" "}
        </label>{" "}
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Enter your title here"
          value={note.title}
          onChange={onChange}
        />{" "}
      </div>{" "}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description{" "}
        </label>{" "}
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          value={note.description}
          onChange={onChange}
        />{" "}
      </div>{" "}
      <button
        type="submit"
        className="btn btn-primary my-3"
        onClick={handleClick}
        disabled={note.title.length < 5 || note.description.length < 5}
      >
        Submit{" "}
      </button>{" "}
    </div>
  );
}

export default AddNote;
