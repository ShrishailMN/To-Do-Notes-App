let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        saveTasks();
        renderTasks();
        taskInput.value = "";
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", renderTasks);
