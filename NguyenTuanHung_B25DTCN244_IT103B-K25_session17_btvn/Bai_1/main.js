const todos = [
    { id: 1, task: "Mua bánh chưng", done: false },
    { id: 2, task: "Dọn nhà đón Tết", done: false },
    { id: 3, task: "Gói bánh chưng", done: false },
    { id: 4, task: "Trang trí nhà cửa", done: false },
];

const todoListDOM = document.getElementById("todo-list");
const footerMsg = document.getElementById("footer-msg");

const isFirstLoad = !localStorage.getItem("myTodos");

if (isFirstLoad) {
    localStorage.setItem("myTodos", JSON.stringify(todos));
    footerMsg.textContent = "Đã lưu vào localStorage lần đầu tiên • Refresh trang để kiểm tra";
} else {
    footerMsg.textContent = "Dữ liệu đã được lưu trước đó trong localStorage";
}

const renderTodos = () => {
    todoListDOM.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item" + (todo.done ? " done" : "");
        li.innerHTML = `
            <div class="todo-left">
                <span class="todo-icon">🌸</span>
                <span class="todo-task">${todo.task}</span>
            </div>
            <span class="todo-status">${todo.done ? "Đã xong" : "Chưa làm"}</span>
        `;
        todoListDOM.appendChild(li);
    });
};

renderTodos();