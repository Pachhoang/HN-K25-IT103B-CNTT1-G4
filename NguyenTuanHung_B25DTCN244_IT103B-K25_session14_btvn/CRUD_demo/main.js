let tasks = [{ id: 1, name: "abc", status: false }];

let addTask = () => {
  let input = document.getElementById("task_name");

  if (input.value.trim() === "") {
    alert("Không được để rỗng");
    return;
  }

  let newTask = {
    id: Math.floor(Math.random() * 99999) + Date.now(),
    name: input.value,
    status: false,
  };

  tasks.push(newTask);

  renderTasks();

  input.value = "";
  input.focus();
};

let renderTasks = () => {
  let list = document.getElementById("task_list");

  let html = tasks
    .map(
      (task) => `
      <li id="task-${task.id}">
        <input 
          type="checkbox" 
          ${task.status ? "checked" : ""} 
          onclick="checkedTask(${task.id})"
        />
        <span style="${task.status ? "text-decoration: line-through;" : ""}">
          ${task.name}
        </span>
        <button onclick="editTask(${task.id})">sửa</button>
        <button onclick="deleteTask(${task.id})">xoá</button>
      </li>
    `,
    )
    .join("");

  list.innerHTML = html;
};

renderTasks();

let deleteTask = (id) => {
  let index = tasks.findIndex((t) => t.id === id);
  let confirmDelete = window.confirm("Bạn có muốn xoá công việc không?");

  if (confirmDelete) {
    tasks.splice(index, 1);
    alert("Xoá thành công!");
  }

  renderTasks();
};

let checkedTask = (id) => {
  let task = tasks.find((t) => t.id === id);
  task.status = !task.status;

  renderTasks();
};

let editTask = (id) => {
  let task = tasks.find((t) => t.id === id);
  let li = document.querySelector(`#task-${id}`);

  li.innerHTML = `
    <input type="text" id="edit-input-${id}" value="${task.name}">
    <button onclick="saveTask(${id})">Lưu</button>
    <button onclick="cancelEdit()">Huỷ</button>
  `;
};

let saveTask = (id) => {
  let input = document.getElementById(`edit-input-${id}`);
  let value = input.value.trim();

  if (value === "") {
    alert("Không được để trống");
    return;
  }

  let task = tasks.find((t) => t.id === id);
  task.name = value;

  renderTasks();
};

let cancelEdit = () => {
  renderTasks();
};
