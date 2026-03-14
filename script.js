let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        li.innerHTML = `
        ${task}
        <button class="delete" onclick="deleteTask(${index})">X</button>`;
        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim();

    if (!task) {
        alert("Escribe una tarea antes de agregarla.");
        input.focus();
        return;
    }
    tasks.push(task);
    saveTasks
    renderTasks();
    input.value = '';
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}
renderTasks();

document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});