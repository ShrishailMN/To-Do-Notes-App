// To-Do List Functionality
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") return;
  
    const li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);
  
    saveTasks();
    taskInput.value = "";
  }
  
  function deleteTask(taskItem) {
    taskItem.parentNode.remove();
    saveTasks();
  }
  
  function saveTasks() {
    const tasks = Array.from(document.querySelectorAll("#taskList li")).map(li => li.textContent.replace("Delete", "").trim());
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");
  
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.innerHTML = `${task} <button onclick="deleteTask(this)">Delete</button>`;
      taskList.appendChild(li);
    });
  }
  
  // Notes Functionality
  function saveNote() {
    const noteInput = document.getElementById("noteInput");
    const savedNotes = document.getElementById("savedNotes");
  
    if (noteInput.value.trim() === "") return;
  
    const p = document.createElement("p");
    p.textContent = noteInput.value;
    savedNotes.appendChild(p);
  
    saveNotesToLocal();
    noteInput.value = "";
  }
  
  function saveNotesToLocal() {
    const notes = Array.from(document.querySelectorAll("#savedNotes p")).map(note => note.textContent);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  
  function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const savedNotes = document.getElementById("savedNotes");
  
    notes.forEach(note => {
      const p = document.createElement("p");
      p.textContent = note;
      savedNotes.appendChild(p);
    });
  }
  
  // Initialize the app
  loadTasks();
  loadNotes();
  