function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = createTaskElement(task);
    document.getElementById("taskList").appendChild(li);

    saveTask(task);
    input.value = "";
}

function createTaskElement(task) {
    let li = document.createElement("li");
    li.textContent = task;

    // mark complete
    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    // delete button
    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);
    return li;
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// load tasks when page opens
window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let li = createTaskElement(task);
        document.getElementById("taskList").appendChild(li);
    });
};

// add with Enter key
document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
