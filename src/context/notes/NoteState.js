import { useState } from "react";
import NoteContext from "./NoteContext.js";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // Api call
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkOGFjZmFiZmVkYjI0ZWFhODhjZDU1In0sImlhdCI6MTY1ODM3MTAxMH0.qm-3YbnsyDywR5Z3UxqAyg0bcNBJi7lKHUKYoprgKzk",
      },
    });
    // Logic for front end
    const json = await response.json();
    setNotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    // Api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkOGFjZmFiZmVkYjI0ZWFhODhjZDU1In0sImlhdCI6MTY1ODM3MTAxMH0.qm-3YbnsyDywR5Z3UxqAyg0bcNBJi7lKHUKYoprgKzk",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // Logic for front end
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async (id) => {
    // Api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkOGFjZmFiZmVkYjI0ZWFhODhjZDU1In0sImlhdCI6MTY1ODM3MTAxMH0.qm-3YbnsyDywR5Z3UxqAyg0bcNBJi7lKHUKYoprgKzk",
      },
    });
    const json = await response.json();
    console.log(json);
    // Logic for front end
    console.log("deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //update a note
  const editNote = async (id, title, description, tag) => {
    // Api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description, tag }),
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkOGFjZmFiZmVkYjI0ZWFhODhjZDU1In0sImlhdCI6MTY1ODM3MTAxMH0.qm-3YbnsyDywR5Z3UxqAyg0bcNBJi7lKHUKYoprgKzk",
      },
    });
    const json = await response.json();
    console.log(json);

    // Logic for front end
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
