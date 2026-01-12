const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function addTask() {
  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");

  const taskText = document.createElement("div");
  taskText.textContent = taskInput.value;

  const time = document.createElement("div");
  time.className = "time";
  time.textContent = "Added: " + new Date().toLocaleString();

  const buttons = document.createElement("div");
  buttons.className = "buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "complete";
  completeBtn.onclick = () => completeTask(li, time);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = () => editTask(taskText);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  buttons.append(completeBtn, editBtn, deleteBtn);
  li.append(taskText, time, buttons);
  pendingList.appendChild(li);

  taskInput.value = "";
}

function completeTask(task, time) {
  time.textContent += " | Completed: " + new Date().toLocaleString();
  completedList.appendChild(task);
}

function editTask(taskText) {
  const updated = prompt("Edit task:", taskText.textContent);
  if (updated && updated.trim() !== "") {
    taskText.textContent = updated;
  }
}
