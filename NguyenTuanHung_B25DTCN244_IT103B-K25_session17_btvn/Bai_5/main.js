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

let editingIndex = null;

function render() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "todo-item done" : "todo-item";

    let contentHtml = "";
    if (editingIndex === index) {
      contentHtml = `<input type="text" class="edit-input" value="${task.text}">`;
    } else {
      contentHtml = `<span class="todo-task">${task.text}</span>`;
    }

    li.innerHTML = `
            <div class="todo-check">
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            ${contentHtml}
            <div class="action-btns">
                <button class="btn-icon edit-btn">✏️</button>
                <button class="btn-icon delete-btn">🗑️</button>
            </div>
        `;

    li.onclick = () => {
      if (editingIndex === null) {
        task.done = !task.done;
        saveAndRefresh();
      }
    };

    if (editingIndex === index) {
      const editInput = li.querySelector(".edit-input");
      editInput.focus();
      editInput.select();

      editInput.onkeydown = (e) => {
        if (e.key === "Enter") {
          const newText = editInput.value.trim();
          if (newText !== "") {
            tasks[index].text = newText;
            editingIndex = null;
            saveAndRefresh();
          } else {
            alert("Tên công việc không được để trống!");
          }
        } else if (e.key === "Escape") {
          editingIndex = null;
          render();
        }
      };

      editInput.onclick = (e) => e.stopPropagation();
    }

    li.querySelector(".edit-btn").onclick = (e) => {
      e.stopPropagation();
      editingIndex = index;
      render();
    };

    li.querySelector(".delete-btn").onclick = (e) => {
      e.stopPropagation();
      if (confirm(`Bạn có chắc muốn xóa: "${task.text}"?`)) {
        tasks.splice(index, 1);
        editingIndex = null;
        saveAndRefresh();
      }
    };

    list.appendChild(li);
  });
}

function addTask() {
  const val = input.value.trim();
  if (val !== "") {
    tasks.unshift({ text: val, done: false });
    input.value = "";
    saveAndRefresh();
  }
}

function saveAndRefresh() {
  localStorage.setItem("myTodos", JSON.stringify(tasks));
  render();
}

btn.onclick = addTask;
input.onkeydown = (e) => {
  if (e.key === "Enter") addTask();
};

render();
