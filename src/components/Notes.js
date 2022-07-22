import React, { useContext } from "react";
import NoteItem from "./NoteItem.js";
import NoteContext from "../context/notes/NoteContext";

function Notes() {
  const notes = useContext(NoteContext);
  return (
    <div className="container row">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
    </div>
  );
}

export default Notes;
