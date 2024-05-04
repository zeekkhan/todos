const taskInput = document.getElementById("userinput");
const addTaskbutton = document.getElementById("addTaskInput");
const taskList = document.getElementById("TaskList");

addTaskbutton.addEventListener("click", addTask);

function addTask() {
    const task = taskInput.value;
    if(task){
        taskInput.value = "";
        const taskElement = document.createElement("li");
        taskElement.textContent = task;
        taskElement.innerHTML+='<button class = deleteTask >X</button>';
        taskList.appendChild(taskElement);
        saveData(); // Save the task list after adding a new task
    }
}


taskList.addEventListener("click", deleteTask);

function deleteTask(event){
    if(event.target.className === "deleteTask"){
        event.target.parentElement.remove();
        saveData(); // Save the task list after deleting a task
    }
}

// save data and load data

function saveData(){
  localStorage.setItem("data", taskList.innerHTML);
}

function loadData(){
  taskList.innerHTML = localStorage.getItem("data");
}
loadData();