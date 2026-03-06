let taskList = [];
let idCounter = 1;

const inputEl = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const listEl = document.getElementById("taskList");
const completedCountEl = document.getElementById("completedCount");
const totalCountEl = document.getElementById("totalCount");
const footerEl = document.getElementsByClassName("footer")[0];

const init = () => {
  renderList();
  addBtn.addEventListener("click", addTask);
  inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });
};

const addTask = () => {
  const text = inputEl.value.trim();

  if (text === "") {
    alert("Vui lòng nhập tên công việc!");
    inputEl.focus();
    return;
  }

  taskList.push({ id: idCounter++, text: text, completed: false });
  inputEl.value = "";
  inputEl.focus();

  renderList();
};

const renderList = () => {
  listEl.innerHTML = "";

  if (taskList.length === 0) {
    listEl.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                <div class="empty-state-text">Chưa có công việc nào. Hãy thêm công việc mới!</div>
            </div>
        `;
    updateFooter();
    return;
  }

  taskList
    .map((task) => createTaskEl(task))
    .forEach((item) => listEl.appendChild(item));
  updateFooter();
};

const createTaskEl = (task) => {
  const item = document.createElement("div");
  item.className = `task-item ${task.completed ? "completed" : ""}`;
  item.dataset.id = task.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  checkbox.checked = task.completed;
  checkbox.addEventListener("change", () => toggleTask(task.id));

  const textEl = document.createElement("span");
  textEl.className = `task-text ${task.completed ? "completed" : ""}`;
  textEl.textContent = task.text;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const editBtn = document.createElement("button");
  editBtn.className = "btn-edit";
  editBtn.textContent = "✏️ Sửa";
  editBtn.addEventListener("click", () => editTask(task.id));

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-delete";
  deleteBtn.textContent = "🗑️ Xóa";
  deleteBtn.addEventListener("click", () => deleteTask(task.id));

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  item.appendChild(checkbox);
  item.appendChild(textEl);
  item.appendChild(actions);

  return item;
};

const toggleTask = (id) => {
  const task = taskList.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    renderList();
  }
};

const editTask = (id) => {
  const task = taskList.find((t) => t.id === id);
  if (!task) return;

  const index = taskList.findIndex((t) => t.id === id);
  const oldItem = listEl.children[index];

  const item = createTaskEl(task);
  item.classList.add("editing");

  const actions = item.lastChild;

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.className = "task-edit-input";
  editInput.value = task.text;

  const saveBtn = document.createElement("button");
  saveBtn.className = "btn-save";
  saveBtn.textContent = "💾 Lưu";
  saveBtn.addEventListener("click", () => saveTask(id, editInput.value));

  const cancelBtn = document.createElement("button");
  cancelBtn.className = "btn-cancel";
  cancelBtn.textContent = "❌ Hủy";
  cancelBtn.addEventListener("click", () => renderList());

  actions.innerHTML = "";
  actions.appendChild(saveBtn);
  actions.appendChild(cancelBtn);
  actions.before(editInput);

  listEl.replaceChild(item, oldItem);

  editInput.focus();
  editInput.select();

  editInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") saveTask(id, editInput.value);
    if (e.key === "Escape") renderList();
  });
};

const saveTask = (id, newText) => {
  const trimmed = newText.trim();

  if (trimmed === "") {
    alert("Tên công việc không được để trống!");
    return;
  }

  const task = taskList.find((t) => t.id === id);
  if (task) {
    task.text = trimmed;
    renderList();
  }
};

const deleteTask = (id) => {
  const task = taskList.find((t) => t.id === id);
  if (!task) return;

  if (confirm(`Bạn có chắc chắn muốn xóa "${task.text}"?`)) {
    taskList = taskList.filter((t) => t.id !== id);
    renderList();
  }
};

const updateFooter = () => {
  const total = taskList.length;
  const completed = taskList.filter((t) => t.completed).length;

  totalCountEl.textContent = total;
  completedCountEl.textContent = completed;

  const existingBadge = document.getElementById("completionBadge");
  if (existingBadge) existingBadge.remove();

  if (total > 0 && completed === total) {
    const badge = document.createElement("div");
    badge.id = "completionBadge";
    badge.className = "completion-badge";
    badge.innerHTML = `<span class="check-icon">✅</span><span>Hoàn thành tất cả!</span>`;
    footerEl.appendChild(badge);
  }
};

init();
