import React, { useState, useContext, useEffect, useRef } from "react";
import NoteItem from "./NoteItem.js";
import NoteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(NoteContext);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
  });
  const { notes, getNotes, editNote } = context;
  const ref = useRef(null);
  const refClose = useRef(null);
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription);
    refClose.current.click();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <AddNote />
      {/* Make the below MODAL a seperate component   -- TODO*/}
      {/* --------------------------------------------------------------------------- */}
      <div className="container">
        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      value={note.etitle}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      value={note.edescription}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  ref={refClose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClick}
                  disabled={
                    note.etitle.length < 5 || note.edescription.length < 5
                  }
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------- */}
      <div className="container row">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNote={updateNote} />
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
