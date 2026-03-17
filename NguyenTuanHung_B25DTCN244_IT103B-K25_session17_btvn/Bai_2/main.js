const STORAGE_KEY = "myTodos";
const initialTodos = [
  { id: 1, task: "Mua bánh chưng", done: false },
  { id: 2, task: "Dọn nhà đón Tết", done: false },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
  { id: 5, task: "Mua phong bao lì xì", done: false },
  { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false },
];

function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) return JSON.parse(raw);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialTodos));
  return initialTodos;
}

function save(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

let todos = load();

function render() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (todo.done ? " done" : "");

    li.innerHTML = `
            <div class="todo-check">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5l3.5 3.5 5.5-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="todo-task">${todo.task}</span>
          `;

    li.addEventListener("click", () => {
      todos = todos.map((t) =>
        t.id === todo.id ? { ...t, done: !t.done } : t,
      );
      save(todos);
      render();
    });

    list.appendChild(li);
  });
}

render();
