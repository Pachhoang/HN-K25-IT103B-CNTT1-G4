let students = [
  { id: 1, name: "Nguyen Van An", age: 20, gpa: 8.5, status: "active" },
  { id: 2, name: "Tran Thi Bich", age: 17, gpa: 7.2, status: "active" },
  { id: 3, name: "Le Hoang Cuong", age: 22, gpa: 9.1, status: "inactive" },
  { id: 4, name: "Pham Thi Dung", age: 19, gpa: 6.8, status: "active" },
];

const createStudent = () => {
  let id = students.length > 0 ? students[students.length - 1].id + 1 : 1;
  let name = prompt("Nhập họ tên sinh viên:");
  let age = parseInt(prompt("Nhập tuổi:"));
  let gpa = parseFloat(prompt("Nhập GPA:"));
  let status = prompt("Nhập trạng thái (active / inactive):");

  if (
    !name ||
    isNaN(age) ||
    isNaN(gpa) ||
    (status !== "active" && status !== "inactive")
  ) {
    alert("Dữ liệu không hợp lệ. Vui lòng thử lại.");
    return;
  }

  let newStudent = { id, name, age, gpa, status };
  students.push(newStudent);
  alert("Đã thêm sinh viên thành công!");
};

const readAllStudents = () => {
  if (students.length === 0) {
    alert("Danh sách sinh viên trống.");
    return;
  }

  let rows = students.map(
    (s) =>
      "ID: " +
      s.id +
      " | Tên: " +
      s.name +
      " | Tuổi: " +
      s.age +
      " | GPA: " +
      s.gpa +
      " | Status: " +
      s.status,
  );

  alert("DANH SÁCH SINH VIÊN\n-------------------\n" + rows.join("\n"));
};

const filterScholarship = () => {
  let candidates = students.filter((s) => s.gpa > 8.0);

  if (candidates.length === 0) {
    alert("Không có sinh viên nào đủ điều kiện học bổng (GPA > 8.0).");
    return;
  }

  let rows = candidates.map(
    (s) => "ID: " + s.id + " | Tên: " + s.name + " | GPA: " + s.gpa,
  );

  alert(
    "ỨNG VIÊN HỌC BỔNG (GPA > 8.0)\n-------------------\n" +
      rows.join("\n") +
      "\n-------------------\nTổng: " +
      candidates.length +
      " sinh viên",
  );
};

const updateStudent = () => {
  let id = parseInt(prompt("Nhập ID sinh viên cần cập nhật:"));
  let student = students.find((s) => s.id === id);

  if (!student) {
    alert("Không tìm thấy sinh viên với ID = " + id);
    return;
  }

  let newName = prompt("Nhập tên mới (hiện tại: " + student.name + "):");
  let newGpa = parseFloat(
    prompt("Nhập GPA mới (hiện tại: " + student.gpa + "):"),
  );

  if (!newName || isNaN(newGpa)) {
    alert("Dữ liệu không hợp lệ.");
    return;
  }

  student.name = newName;
  student.gpa = newGpa;
  alert(
    "Đã cập nhật thành công!\nID: " +
      student.id +
      " | Tên: " +
      student.name +
      " | GPA: " +
      student.gpa,
  );
};

const deleteStudent = () => {
  let id = parseInt(prompt("Nhập ID sinh viên cần xóa:"));
  let index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    alert("Không tìm thấy sinh viên với ID = " + id);
    return;
  }

  let deleted = students.splice(index, 1)[0];
  alert("Đã xóa sinh viên: ID " + deleted.id + " - " + deleted.name);
};

const complianceVerification = () => {
  let hasUnder18 = students.some((s) => s.age < 18);
  let allActive = students.every((s) => s.status === "active");

  alert(
    "COMPLIANCE VERIFICATION\n-------------------\n" +
      "Có sinh viên dưới 18 tuổi: " +
      (hasUnder18 ? "CÓ" : "KHÔNG") +
      "\n" +
      "Toàn bộ status là active: " +
      (allActive ? "ĐÚNG" : "KHÔNG (có inactive)"),
  );
};

const academicStatistics = () => {
  if (students.length === 0) {
    alert("Danh sách trống, không thể tính thống kê.");
    return;
  }

  let totalGpa = students.reduce((acc, s) => acc + s.gpa, 0);
  let avgGpa = (totalGpa / students.length).toFixed(2);

  alert(
    "THỐNG KÊ HỌC TẬP\n-------------------\n" +
      "Tổng số sinh viên: " +
      students.length +
      "\n" +
      "Tổng GPA tích lũy: " +
      totalGpa.toFixed(2) +
      "\n" +
      "GPA trung bình   : " +
      avgGpa,
  );
};

const dataNormalization = () => {
  let normalized = students.map((s) => ({
    id: s.id,
    name: s.name.toUpperCase(),
    age: s.age,
    gpa: s.gpa,
    status: s.status,
  }));

  let rows = normalized.map(
    (s) =>
      "ID: " +
      s.id +
      " | Tên: " +
      s.name +
      " | Tuổi: " +
      s.age +
      " | GPA: " +
      s.gpa +
      " | Status: " +
      s.status,
  );

  alert(
    "DATA NORMALIZATION (bản sao, không thay đổi dữ liệu gốc)\n-------------------\n" +
      rows.join("\n"),
  );
  console.log("Normalized list:", normalized);
};

let running = true;

while (running) {
  let choice = +prompt(
    "====== STUDENT MANAGEMENT SYSTEM ======\n" +
      "1. Create Student\n" +
      "2. Read All Students\n" +
      "3. Filter Scholarship Candidates\n" +
      "4. Update Student Profile\n" +
      "5. Delete Record\n" +
      "6. Compliance Verification\n" +
      "7. Academic Statistics\n" +
      "8. Data Normalization\n" +
      "0. Exit\n" +
      "========================================\n" +
      "Nhập lựa chọn:",
  );

  switch (choice) {
    case 1:
      createStudent();
      break;
    case 2:
      readAllStudents();
      break;
    case 3:
      filterScholarship();
      break;
    case 4:
      updateStudent();
      break;
    case 5:
      deleteStudent();
      break;
    case 6:
      complianceVerification();
      break;
    case 7:
      academicStatistics();
      break;
    case 8:
      dataNormalization();
      break;
    case 0:
      alert("Thoát chương trình. Tạm biệt!");
      running = false;
      break;
    default:
      alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 0 đến 8.");
  }
}
