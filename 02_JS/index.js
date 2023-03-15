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
    todo_li.innerText = todo;
    todo_ul.append(todo_li);
  });
  todos_div.append(todo_ul);
};

const addTodo = () => {
  const title = document.getElementById("todo-title").value;
  todos.push(title);
  localStorage.setItem("todos", JSON.stringify(todos));
  render();
};

render();
