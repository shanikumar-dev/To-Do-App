function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.innerText = taskText;

  // Toggle completed on click
  li.addEventListener("click", function (e) {
    if (e.target.tagName !== "BUTTON") {
      li.classList.toggle("completed");
    }
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete-btn");

  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
