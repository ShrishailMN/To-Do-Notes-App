// Task and Notes arrays to store data
let tasks = [];
let notes = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        renderTasks();
        taskInput.value = "";
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a note
function addNote() {
    const noteInput = document.getElementById("note-input");
    const noteText = noteInput.value.trim();
    if (noteText) {
        notes.push(noteText);
        renderNotes();
        noteInput.value = "";
    }
}

// Function to delete a note
function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}

// Function to render notes
function renderNotes() {
    const noteList = document.getElementById("note-list");
    noteList.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${note}
            <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
        `;
        noteList.appendChild(li);
    });
}
