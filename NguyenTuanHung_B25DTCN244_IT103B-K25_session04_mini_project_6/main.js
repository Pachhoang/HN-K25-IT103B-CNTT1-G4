let staffList = [];
let nextId = 1;
let targetId = null;

const empForm = document.getElementById("employee-form");
const fName = document.getElementById("fullName");
const fMail = document.getElementById("email");
const fDate = document.getElementById("dateOfBirth");
const fRole = document.getElementById("position");

const msgError = {
    name: document.getElementById("error-fullName"),
    mail: document.getElementById("error-email"),
    date: document.getElementById("error-dateOfBirth"),
    role: document.getElementById("error-position")
};

const elTitle = document.getElementById("form-title");
const btnSave = document.getElementById("submit-btn");
const btnExit = document.getElementById("cancel-edit-btn");
const listBody = document.getElementById("employee-tbody");
const countTop = document.getElementById("employee-count");
const countBot = document.getElementById("footer-count");

const strToDate = (iso) => {
    const objDate = new Date(iso);
    if (isNaN(objDate.getTime())) return "";
    const d = String(objDate.getDate()).padStart(2, '0');
    const m = String(objDate.getMonth() + 1).padStart(2, '0');
    return `${d}/${m}/${objDate.getFullYear()}`;
};

const validMail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

const clearForm = () => {
    empForm.reset();
    Object.values(msgError).forEach(el => el.textContent = "");
    targetId = null;
    elTitle.textContent = "Thêm Nhân Viên Mới";
    btnSave.textContent = "Thêm Nhân Viên";
    btnExit.classList.add("hidden");
};

const syncStats = (data) => {
    const total = data.length;
    countTop.textContent = `${total} nhân viên`;
    countBot.textContent = `Tổng số nhân viên: ${total}`;
};

const displayTable = (data) => {
    listBody.innerHTML = "";
    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.fullName}</td>
            <td>${item.email}</td>
            <td>${strToDate(item.dob)}</td>
            <td>${item.position}</td>
            <td>
                <div class="actions">
                    <button class="btn btn-sm btn-edit" onclick="onEdit(${item.id})">Sửa</button>
                    <button class="btn btn-sm btn-delete" onclick="onRemove(${item.id})">Xóa</button>
                </div>
            </td>`;
        listBody.appendChild(row);
    });
    syncStats(data);
};

const checkValid = () => {
    let status = true;
    Object.values(msgError).forEach(el => el.textContent = "");

    if (!fName.value.trim()) { msgError.name.textContent = "Tên trống"; status = false; }
    if (!validMail(fMail.value.trim())) { msgError.mail.textContent = "Email sai"; status = false; }
    if (!fDate.value) { msgError.date.textContent = "Ngày trống"; status = false; }
    if (!fRole.value.trim()) { msgError.role.textContent = "Chức vụ trống"; status = false; }

    return status ? {
        fullName: fName.value.trim(),
        email: fMail.value.trim(),
        dob: fDate.value,
        position: fRole.value.trim()
    } : null;
};

empForm.onsubmit = (event) => {
    event.preventDefault();
    const info = checkValid();
    if (!info) return;

    if (targetId === null) {
        staffList.push({ id: nextId++, ...info });
    } else {
        staffList = staffList.map(obj => obj.id === targetId ? { id: targetId, ...info } : obj);
    }

    displayTable(staffList);
    clearForm();
};

window.onEdit = (id) => {
    const person = staffList.find(p => p.id === id);
    if (!person) return;

    targetId = id;
    fName.value = person.fullName;
    fMail.value = person.email;
    fDate.value = person.dob;
    fRole.value = person.position;

    elTitle.textContent = "Chỉnh Sửa Nhân Viên";
    btnSave.textContent = "Cập Nhật";
    btnExit.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
};

window.onRemove = (id) => {
    const person = staffList.find(p => p.id === id);
    if (person && confirm(`Xóa "${person.fullName}"?`)) {
        staffList = staffList.filter(p => p.id !== id);
        if (targetId === id) clearForm();
        displayTable(staffList);
    }
};

btnExit.onclick = () => clearForm();