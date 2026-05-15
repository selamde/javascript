const todoList = [];

function addTodo() {
  const inputElement = document.querySelector(".todo-input");
  const name = inputElement.value;
  //   console.log(name);
  todoList.push(name);
  console.log(todoList);

  inputElement.value = "";
}

const todolist2 = [];

function displayHtml() {
  let todoListHtml = "";
  for (let i = 0; i < todolist2.length; i++) {
    const todo = todolist2[i];
    const html = `<p>${todo}</p>`;
    //accumlator
    todoListHtml += html;
  }
  document.querySelector(".input-value-display").innerHTML = todoListHtml;
}

function addTodoList() {
  const inputElement = document.querySelector(".todo-list-input");
  const inputvalue = inputElement.value;
  //   console.log(inputvalue);
  todolist2.push(inputvalue);
  displayHtml();

  inputElement.value = "";
}

const listTodo = [];

function addTodoListHtml() {
  let listTodoA = "";
  for (let i = 0; i < listTodo.length; i++) {
    const todo = listTodo[i];
    const html = `<div class="list" > <p>${todo.name}</p><p> ${todo.date}</p><button class="delete-btn" onclick="deleteItemFromList(${i})">Delete</button></div> `;
    console.log(html);
    listTodoA += html;
  }
  document.querySelector(".js-display-list").innerHTML = listTodoA;
}

function addTodoListFunc() {
  const nameInputElement = document.querySelector(".name").value;
  const dateInputElement = document.querySelector(".date").value;

  listTodo.push({
    name: nameInputElement,
    date: dateInputElement,
  });

  addTodoListHtml();

  console.log(listTodo);
}

function deleteItemFromList(index) {
  listTodo.splice(index, 1);
  addTodoListHtml();
}
