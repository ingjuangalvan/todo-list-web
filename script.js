let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){

const list = document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

const li = document.createElement("li");

li.innerHTML = `
<span class="${task.completed ? 'completed' : ''}" onclick="toggleTask(${index})">
${task.text}
</span>

<button class="delete" onclick="deleteTask(${index})">X</button>
`;

list.appendChild(li);

});
}

function addTask(){

const input = document.getElementById("taskInput");
const text = input.value.trim();

if(!text){
alert("Debes escribir una tarea");
return;
}

tasks.push({
text:text,
completed:false
});

saveTasks();
renderTasks();

input.value="";
}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
renderTasks();
}

function toggleTask(index){

tasks[index].completed = !tasks[index].completed;

saveTasks();
renderTasks();
}

renderTasks();