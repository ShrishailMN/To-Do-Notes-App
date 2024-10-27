let notes = JSON.parse(localStorage.getItem('notes')) || [];

function addNote() {
    const noteInput = document.getElementById("note-input");
    const noteText = noteInput.value.trim();
    if (noteText) {
        notes.push(noteText);
        saveNotes();
        renderNotes();
        noteInput.value = "";
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function renderNotes() {
    const noteList = document.getElementById("note-list");
    noteList.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${note} <button onclick="deleteNote(${index})">Delete</button>`;
        noteList.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", renderNotes);
