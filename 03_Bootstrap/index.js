//{title : "abcd", priority: "high"},
let todos = [];

/*
function render() {
  const todos_div = document.getElementById("todos");
  console.log("inside");
}
*/

const render = () => {
  todos = JSON.parse(localStorage.getItem("todos") ?? []);
  const todos_div = document.getElementById("todos_tbody");
  todos_div.innerHTML = "";

  //   for (let i = 0; i < todos.length; i++) {
  //     let todo_li = document.createElement("li");
  //     todo_li.innerText = todos[i];
  //     todo_ul.append(todo_li);
  //   }
  todos.forEach((todo) => {
    const todo_tr = document.createElement("tr");
    const todo_li1 = document.createElement("td");
    todo_li1.innerText = todo.title;
    todo_li1.className = todo.priority;
    const todo_li2 = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.id = todo.id;
    deleteButton.className = "fa fa-trash";
    deleteButton.onclick = deleteTodo;
    todo_li2.appendChild(deleteButton);
    todo_tr.append(todo_li1);
    todo_tr.append(todo_li2);
    todos_div.appendChild(todo_tr);
  });
};

const addTodo = () => {
  const id = new Date().getTime() + "";
  const title = document.getElementById("todo-title").value;
  const priority = document.getElementById("todo-priority").value;
  todos.push({ id: id, title: title, priority: priority });
  localStorage.setItem("todos", JSON.stringify(todos));
  render();
};

const deleteTodo = (event) => {
  const button = event.target;
  const id = button.id;
  removeTodo(id);
  render();
};

const removeTodo = (id) => {
  todos = todos.filter((todo) => {
    if (todo.id != id) {
      return true;
    } else {
      return false;
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
};

render();
