let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

let arrayOfTadks = [];

if (localStorage.getItem("tasks")) {
    arrayOfTadks = JSON.parse(localStorage.getItem("tasks"));
}

getDataFromLocalStorage();

submit.onclick = function() {
    if (input.value !== "") {
        addTaskToArray(input.value);
        input.value = "";
    }
};

tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("tasks")) {
        toggleStatusTasksWith(e.target.getAttribute("data-id"))
        e.target.classList.toggle("done");
    }
});

function addTaskToArray(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false
    }

    arrayOfTadks.push(task);
    addElementToPageFrom(arrayOfTadks);
    addDataToLocalStorageFrom(arrayOfTadks);
}

function addElementToPageFrom(arrayOfTadks) {
    tasksDiv.innerHTML = "";
    arrayOfTadks.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task";
        if (task.completed) {
            div.className = "task done";
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));

        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"));
        div.appendChild(span);
        tasksDiv.appendChild(div);
    })
}

function addDataToLocalStorageFrom(arrayOfTadks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTadks));
}

function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addElementToPageFrom(tasks);
    }
}

function deleteTaskWith(taskId) {
    arrayOfTadks = arrayOfTadks.filter((task) => task.id != taskId);
    addDataToLocalStorageFrom(arrayOfTadks);
}

function toggleStatusTasksWith(taskId) {
    for (let index = 0; index < arrayOfTadks.length; index++) {
        if (arrayOfTadks[index].id == taskId) {
            arrayOfTadks[index].completed == false ? (arrayOfTadks[index].completed = true) : (arrayOfTadks[index].completed = false);
        }
    }
    addDataToLocalStorageFrom(arrayOfTadks);
}