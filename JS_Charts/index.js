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
  const todos_tbody = document.getElementById("todos_tbody");
  todos_tbody.innerHTML = "";

  //   for (let i = 0; i < todos.length; i++) {
  //     let todo_li = document.createElement("li");
  //     todo_li.innerText = todos[i];
  //     todo_ul.append(todo_li);
  //   }
  todos.forEach((todo) => {
    const todo_tr = document.createElement("tr");
    const title_td = document.createElement("td");
    const priority_td = document.createElement("td");
    title_td.innerText = todo.title;
    title_td.className = todo.priority;
    const priorty_span = document.createElement("span");
    let priority_class;
    switch (todo.priority) {
      case "high":
        priority_class = "badge rounded-pill bg-danger";
        break;
      case "medium":
        priority_class = "badge rounded-pill bg-warning text-dark";
        break;
      default:
        priority_class = "badge rounded-pill bg-success";
        break;
    }
    priorty_span.className = priority_class;
    priorty_span.innerText = todo.priority;
    priority_td.appendChild(priorty_span);

    const delete_td = document.createElement("td");
    const deleteButton = document.createElement("span");
    deleteButton.id = todo.id;
    deleteButton.className = "fa fa-trash";
    deleteButton.onclick = deleteTodo;
    delete_td.appendChild(deleteButton);
    todo_tr.append(title_td);
    todo_tr.append(priority_td);
    todo_tr.append(delete_td);
    todos_tbody.appendChild(todo_tr);
  });
  generateChart(todos);
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
