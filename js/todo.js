const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOSS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOSS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;

  const span = document.createElement("span");
  span.innerText = todo.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSumbmit(event) {
  event.preventDefault();

  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const toDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  toDos.push(toDoObj);
  paintToDo(toDoObj);

  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSumbmit);

const savedTodos = localStorage.getItem(TODOSS_KEY);
if (savedTodos) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
