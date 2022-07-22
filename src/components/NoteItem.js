import React from "react";

function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card card-body my-3">
        <h5 class="card-title">{note.title}</h5>
        <p class="card-text">{note.description}</p>
      </div>
    </div>
  );
}

export default NoteItem;
