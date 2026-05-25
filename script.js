let taskList = document.getElementById("taskList");

function addTask(){

    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">
            ${taskText}
        </span>

        <div>
            <button onclick="editTask(this)">✏️</button>
            <button onclick="deleteTask(this)">❌</button>
        </div>
    `;

    taskList.appendChild(li);

    saveTasks();

    input.value = "";
}

function toggleTask(task){
    task.classList.toggle("completed");
    saveTasks();
}

function deleteTask(button){
    button.parentElement.parentElement.remove();
    saveTasks();
}

function editTask(button){

    let task =
    button.parentElement.previousElementSibling;

    let newText =
    prompt("Edit task:", task.innerText);

    if(newText){
        task.innerText = newText;
        saveTasks();
    }
}

function saveTasks(){
    localStorage.setItem(
        "tasks",
        taskList.innerHTML
    );
}

window.onload = function(){
    taskList.innerHTML =
    localStorage.getItem("tasks") || "";
}