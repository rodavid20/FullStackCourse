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
  const todos_div = document.getElementById("todos");
  todos_div.innerHTML = "";
  const todo_ul = document.createElement("ul");

  //   for (let i = 0; i < todos.length; i++) {
  //     let todo_li = document.createElement("li");
  //     todo_li.innerText = todos[i];
  //     todo_ul.append(todo_li);
  //   }
  todos.forEach((todo) => {
    const todo_li = document.createElement("li");
    todo_li.innerText = todo.title;
    todo_li.className = todo.priority;
    const deleteButton = document.createElement("button");
    deleteButton.id = todo.id;
    deleteButton.innerText = "Delete";
    deleteButton.onclick = deleteTodo;
    todo_li.appendChild(deleteButton);
    todo_ul.append(todo_li);
  });
  todos_div.append(todo_ul);
};

const addTodo = () => {
  const todo_id = new Date().getTime() + "";
  const todo_title = document.getElementById("todo-title").value;
  const todo_priority = document.getElementById("todo-priority").value;
  todos.push({ id: todo_id, title: todo_title, priority: todo_priority });
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
