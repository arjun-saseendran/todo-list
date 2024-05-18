let todoArray = [
  {
    data: "Study",
    date: "2024-05-19",
  },
  {
    data: "Washing",
    date: "2024-05-20",
  },
];

todoRender();

function todoRender() {
  let todoHtml = "";
  for (let i = 0; i < todoArray.length; i++) {
    const todoObject = todoArray[i];
    const { data, date } = todoObject;

    const html = `
    
    <div>${data} </div>
    <div> ${date} </div>
    <button onclick="
    todoArray.splice(${i}, 1);
    todoRender();
    " class="delete-btn">Delete</button>`;

    todoHtml += html;
  }
  document.getElementById("display").innerHTML = todoHtml;
}

const addTodo = () => {
  const todoData = document.getElementById("todo-input");
  const dateData = document.getElementById("due-date");
  const data = todoData.value;
  const date = dateData.value;
  todoArray.push({ data, date });
  todoData.value = "";
  dateData.value = "";

  todoRender();
};
