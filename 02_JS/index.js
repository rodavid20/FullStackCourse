let todos = ["get up", "brush"];

/*
function render() {
  const todos_div = document.getElementById("todos");
  console.log("inside");
}
*/

const render = () => {
  const todos_div = document.getElementById("todos");
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

render();
