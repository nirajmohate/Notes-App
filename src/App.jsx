import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const addNote = () => {
    if (note) {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  return (
    <>
      <div>
        <h1>Notes App</h1>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="write a note"
        />
        <button onClick={addNote}> Add Note </button>
        <ul>
          {notes.map((n, i) => (
            <li key={i}> {n}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
