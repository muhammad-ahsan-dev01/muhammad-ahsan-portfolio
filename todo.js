const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

function addTask() {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});