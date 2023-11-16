import React from "react"
import ToggleDark from "./DarkMode"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button 
                    className="delete-btn"
                    onClick={() => props.deleteNote(note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
                <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                 <input type="checkbox" id="checkbox" onClick={ToggleDark} />
                 <div className="slider round"></div>
               </label>
                 <em>Dark Mode</em>
               </div>
            </div>
            {noteElements}
        </section>
    )
}
