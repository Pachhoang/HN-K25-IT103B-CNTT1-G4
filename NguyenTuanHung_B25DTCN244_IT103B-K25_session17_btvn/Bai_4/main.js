const input = document.getElementById("todo-input");
const btn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem("myTodos")) || [
  { text: "Mua bánh chưng", done: true },
  { text: "Dọn nhà đón Tết", done: true },
  { text: "Gói bánh chưng", done: false },
  { text: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
  { text: "Mua phong bao lì xì", done: false },
  { text: "Chuẩn bị mâm ngũ quả", done: false },
];

function render() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "todo-item done" : "todo-item";

    li.innerHTML = `
            <div class="todo-check">
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <span class="todo-task">${task.text}</span>
            <button class="delete-btn">🗑️</button>
        `;

    li.onclick = function () {
      task.done = !task.done;
      saveAndRefresh();
    };

    const delBtn = li.querySelector(".delete-btn");
    delBtn.onclick = function (e) {
      e.stopPropagation();
      const isConfirmed = confirm(
        `Bạn có chắc chắn muốn xóa công việc: "${task.text}"?`,
      );
      if (isConfirmed) {
        tasks.splice(index, 1);
        saveAndRefresh();
      }
    };

    list.appendChild(li);
  });
}

function addTask() {
  const content = input.value.trim();
  if (content !== "") {
    tasks.unshift({ text: content, done: false });
    input.value = "";
    saveAndRefresh();
  }
}

function saveAndRefresh() {
  localStorage.setItem("myTodos", JSON.stringify(tasks));
  render();
}

btn.onclick = addTask;

input.onkeydown = function (event) {
  if (event.key === "Enter") {
    addTask();
  }
};

render();
