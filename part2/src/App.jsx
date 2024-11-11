import React from 'react'
import Note from './Components/Note'
import { useState } from 'react'

const App = (props) => {
  const [notes,setNotes] = useState(props.notes)
  const [newNote, setnewNote] = useState(' ')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }
  
    setNotes(notes.concat(noteObject))
    setnewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setnewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App