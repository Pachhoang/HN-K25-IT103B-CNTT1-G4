const baseTs = Date.now() - 1000 * 60 * 60 * 24;

const PAGE_PER = 5;

let formatDate = (ts) => {
    if (!ts) return "";
    const d = new Date(ts);
    const time = d.toLocaleTimeString("vi-VN", {
        hour12: false,
    });
    const date = d.toLocaleDateString("vi-VN");
    return `${time} ${date}`;
}

const seed = [
    { id: "S01", name: "Nguyen Van A", age: 19, gpa: 8.9, status: "active" },
    { id: "S02", name: "Tran Thi B", age: 18, gpa: 7.5, status: "active" },
    { id: "S03", name: "Le Van C", age: 21, gpa: 6.2, status: "active" },
    { id: "S04", name: "Pham Thi D", age: 20, gpa: 0, status: "inactive" },
    { id: "S05", name: "Hoang Van E", age: 22, gpa: 2.8, status: "active" },
    { id: "S06", name: "Do Thi F", age: 17, gpa: 9.1, status: "active" },
    { id: "S07", name: "Bui Van G", age: 25, gpa: 4.9, status: "inactive" },
    { id: "S08", name: "Vu Thi H", age: 23, gpa: 8.4, status: "active" },
    { id: "S09", name: "Dang Van I", age: 28, gpa: 7.0, status: "active" },
    { id: "S10", name: "Nguyen Thi K", age: 16, gpa: 5.5, status: "active" },
].map((x, idx) => ({
    id: x.id,
    name: x.name,
    age: x.age,
    gpa: x.gpa,
    status: x.status,
    createdAt: baseTs + idx * 1000,
    updatedAt: null,
    deletedAt: x.status === "inactive" ? baseTs + idx * 1000 : null,
}));
let ouput = seed.map(st => ({
    id: st.id,
    name: st.name,
    age: st.age,
    gpa: st.gpa,
    status: st.status,
    createdAt: formatDate(st.createdAt),
    updatedAt: formatDate(st.updatedAt),
    deletedAt: formatDate(st.deletedAt),
}));
// chức năng 1: Create Student
let createStudent = (obArray) => {
    let idWannaToAdd;
    let nameWannaToAdd;
    let ageWannaToAdd;
    let gpaWannaToAdd;
    let statusWannaToAdd;
    while (true) {
        idWannaToAdd = prompt("Nhập ID (duy nhất), ví dụ S01:");
        if (idWannaToAdd === null || idWannaToAdd === "") {
            alert("Không được để trống. Vui lòng nhập lại.");
            continue;
        }
        if (obArray.some(c => c.id === idWannaToAdd)) {
            alert("❌ ID đã tồn tại. Vui lòng nhập ID khác.");
            continue;
        }
        break;
    }
    while (true) {
        nameWannaToAdd = prompt("Nhập Họ tên");
        if (nameWannaToAdd === null || nameWannaToAdd === "") {
            alert("❌ Không được để trống. Vui lòng nhập lại.");
            continue;
        }
        break;
    }
    while (true) {
        ageWannaToAdd = prompt("Nhập Tuổi (16–60):");
        if (ageWannaToAdd === "" || ageWannaToAdd === null) {
            alert("❌ Không được để trống. Vui lòng nhập lại.");
            continue;
        }
        if (isNaN(Number(ageWannaToAdd))) {
            alert("❌ Tuổi phải là số nguyên hợp lệ. Vui lòng nhập lại.");
            continue;
        }
        if (Number(ageWannaToAdd) < 16 || Number(ageWannaToAdd) > 60) {
            alert("❌ Tuổi phải nằm trong khoảng 16–60. Vui lòng nhập lại.");
            continue;
        }
        break;
    }
    while (true) {
        gpaWannaToAdd = prompt("Nhập GPA (0–10):");
        if (gpaWannaToAdd === "" || gpaWannaToAdd === null) {
            alert("❌ Không được để trống. Vui lòng nhập lại.");
            continue;
        }
        if (isNaN(Number(gpaWannaToAdd))) {
            alert("❌ Tuổi phải là số nguyên hợp lệ. Vui lòng nhập lại.");
            continue;
        }
        if (Number(gpaWannaToAdd) < 0 || Number(gpaWannaToAdd) > 10) {
            alert("❌ Tuổi phải nằm trong khoảng 0–10. Vui lòng nhập lại.");
            continue;
        }
        break;
    }
    while (true) {
        statusWannaToAdd = prompt(`Nhập status ("active" hoặc "inactive"):`);
        if (statusWannaToAdd === "" || statusWannaToAdd === null) {
            alert("❌ Không được để trống. Vui lòng nhập lại.");
            continue;
        }
        if (statusWannaToAdd !== "active" && statusWannaToAdd !== "inactive") {
            alert(`❌ Status chỉ được là "active" hoặc "inactive". Vui lòng nhập lại.`);
            continue;
        }
        break;
    }
    let newOb = {
        id: idWannaToAdd,
        name: nameWannaToAdd,
        age: +ageWannaToAdd,
        gpa: +gpaWannaToAdd,
        status: statusWannaToAdd,
        createdAt: "",
        updatedAt: "",
        deletedAt: statusWannaToAdd === "inactive" ? formatDate(baseTs + 1000): "",
    }
    obArray.push(newOb);
    alert(`✅ Thêm mới thành công: ${idWannaToAdd} - ${nameWannaToAdd}`);
}


//chức năng 2: Update Student  
let updateStudent = (obArray) => {
    let idWannatoUpdate;
    let checkHadIdInIt;
    let newAge;
    let newGpa;
    let newStatus;
    let newName;
    while (true) {
        idWannatoUpdate = prompt("Vui lòng nhập ID mà bạn muốn cập nhập: !");
        checkHadIdInIt = obArray.findIndex(c => c.id === idWannatoUpdate);
        if (checkHadIdInIt === -1) {
            alert("❌ Không tìm thấy sinh viên với ID này. Vui lòng nhập lại.");
            continue;
        }
        newName = prompt("Nhập Họ tên mới (bỏ trống để giữ nguyên): ");
        while (true) {
            newAge = prompt("Nhập Tuổi mới (16 - 60) (Bỏ trống để giữ nguyên): ");
            if (!newAge) {
                break;
            }
            if (isNaN(Number(newAge)) || Number(newAge) < 15 || Number(newAge) > 60) {
                alert("❌ Tuổi phải là số nguyên trong khoảng 16–60.");
                continue;
            }
            break;
        }

        while (true) {
            newGpa = prompt("Nhập GPA mới (0–10) (bỏ trống để giữ nguyên):");
            if (!newGpa) {
                break;
            }
            if (isNaN(Number(newGpa)) || Number(newGpa) < 0 || Number(newGpa) > 10) {
                alert("❌ GPA phải là số trong khoảng 0–10.");
                continue;
            }
            break;
        }
        while (true) {
            newStatus = prompt(`Nhập status mới ("active"/"inactive") (bỏ trống để giữ nguyên):`);
            if (!newStatus) {
                break;
            }
            if (newStatus !== "active" && newStatus !== "inactive") {
                alert(`❌ Status chỉ được là "active" hoặc "inactive".`);
                continue;
            }
            break;
        }
        obArray[checkHadIdInIt].name = `${newName === "" ? obArray[checkHadIdInIt].name : newName}`;
        obArray[checkHadIdInIt].age = newAge === "" ? obArray[checkHadIdInIt].age : +newAge;
        obArray[checkHadIdInIt].gpa = newGpa === "" ? obArray[checkHadIdInIt].gpa : +newGpa;
        obArray[checkHadIdInIt].status = `${newStatus === "" ? obArray[checkHadIdInIt].status : newStatus}`;
        obArray[checkHadIdInIt].deletedAt = obArray[checkHadIdInIt].status === "inactive" ? formatDate(baseTs + checkHadIdInIt * 1000) : "";
        alert("✅ Cập nhật thành công: S02");
        break;
    }

}
// chức năng 3 : Soft Delete Student
let softDeleteStudent = (obArray) => {
    let idWannaToDelete;
    let checked;
    while (true) {
        idWannaToDelete = prompt("Vui lòng nhập ID mà bạn muốn Delete: !");
        checked = obArray.findIndex(c => c.id === idWannaToDelete);
        if (checked === -1) {
            alert("❌ Không tìm thấy sinh viên với ID này. Vui lòng nhập lại.");
            continue;
        }
        if (obArray[checked].deletedAt !== "" && obArray[checked].status === "inactive") {
            alert("ℹ️ Sinh viên đã ở trạng thái soft deleted trước đó.");
            continue;
        }
        let wannaToDelete = window.confirm(`Xác nhận Soft Delete sinh viên ${obArray[checked].id} - ${obArray[checked].name}`);
        if (wannaToDelete) {
            obArray[checked].deletedAt = formatDate(baseTs + checked * 1000);
            obArray[checked].updatedAt = "";
            obArray[checked].status = "inactive";
            alert(`✅ Delete thành công: ${obArray[checked].id}`);
        } else {
            alert("Đã hủy thao tác.");
        }
        break;
    }

}

// chức năng 4: Restore Student 
let restoreStudent = (obArray) => {
    let idWannaToRestore;
    let checked;
    while (true) {
        idWannaToRestore = prompt("Vui lòng nhập ID mà bạn muốn khôi phục !");
        checked = obArray.findIndex(c => c.id === idWannaToRestore);
        if (checked === -1) {
            alert("❌ Không tìm thấy sinh viên với ID này. Vui lòng nhập lại.");
            continue;
        }
        if (obArray[checked].deletedAt === "" || obArray[checked].status === "active") {
            alert("ℹ️ Chỉ có thể Restore sinh viên đã soft delete (inactive và có deletedAt).");
            continue;
        }
        let wannaToRestore = window.confirm(`Xác nhận Restore sinh viên ${obArray[checked].id} - ${obArray[checked].name}`);
        if (wannaToRestore) {
            obArray[checked].status = "active";
            obArray[checked].deletedAt = "";
            obArray[checked].updatedAt = formatDate(baseTs + checked * 1000);
            alert(`✅ Restore thành công: ${obArray[checked].id}`);
        } else {
            alert("Đã hủy thao tác.");
        }
        break;
    }

}

//chức năng 5: viewStudent
let viewStudent = (obArray) => {
    let searchName = prompt("Search theo tên (bỏ trống nếu không)");
    let pageSize;
    let choose;
    let resultSearch = [...obArray];
    if (!searchName) {
        searchName = " ";
    }
    if (searchName) {
        resultSearch = obArray.filter(c => c.name.toLowerCase().includes(searchName));
    }
    let filterStatus = prompt(`Filter status: "all" / "active" / "inactive" (bỏ trống = all):`);
    if (filterStatus) {
        resultSearch = resultSearch.filter(c => c.status === filterStatus);
    } else if (filterStatus === "all" || !filterStatus) {
        filterStatus = "all";
        resultSearch = resultSearch;
    }
    let sortGpa = prompt(`Sort GPA: "asc" / "desc" (bỏ trống = desc):`);
    if (sortGpa === "desc" || !sortGpa) {
        sortGpa = "desc";
        resultSearch = resultSearch.sort((a, b) => b.gpa - a.gpa);
    } else if (sortGpa === "asc") {
        resultSearch = resultSearch.sort((a, b) => a.gpa - b.gpa);
    }
    let elementPerPage = prompt("Page size (bỏ trống = 5):");
    if (!elementPerPage) {
        pageSize = PAGE_PER;
    } else {
        pageSize = +elementPerPage;
    }

    let curentPage = 1;
    let total = Math.ceil(resultSearch.length / pageSize);

    let paginate = (arr, page, pageSize) => {
        let start = (page - 1) * pageSize;
        let end = start + pageSize;
        return arr.slice(start, end);
    };
    console.log(`=== PIPELINE VIEW | search= ${searchName} | status= ${filterStatus} | sort(gpa)= ${sortGpa} (count: ${pageSize}) ===`);
    console.table(paginate(resultSearch, curentPage, pageSize));
    console.log(`=== Footer: Page: ${curentPage}/${total} | Total record: ${resultSearch.length} ===`);
    do {
        choose = prompt(`Điều hướng: "first", "last", "next", "prev", hoặc nhập số trang. (Enter để thoát)`);
        console.log(`=== PIPELINE VIEW | search= ${searchName} | status= ${filterStatus} | sort(gpa)= ${sortGpa} (count: ${pageSize}) ===`);
        if (choose === "first") {
            curentPage = 1;
        } else if (choose === "last") {
            curentPage = total;
        } else if (choose === "next" && curentPage < total) {
            curentPage++;
        } else if (choose === "prev" && curentPage > 1) {
            curentPage--;
        } else if (choose === "") {
            return;
        }
        console.table(paginate(resultSearch, curentPage, pageSize));
        console.log(`=== Footer: Page: ${curentPage}/${total} | Total record: ${resultSearch.length} ===`);
    } while (choose !== "");
}

// 
// chức năng 6:
let analyticsDashboard = (obArray) => {
    total = obArray.length;
    active = obArray.filter(c => c.status === "active").length;
    inactive = obArray.filter(c => c.status === "inactive").length;
    activeRate = `${((active / total) * 100).toFixed(2)}%`;
    inactiveRate = `${((inactive / total) * 100).toFixed(2)}%`;
    let Overview = { total, active, inactive, activeRate, inactiveRate };
    console.log(`1) Overview:`, Overview);

    avgAll = Number(((obArray.reduce((arc, cur) => arc + cur.gpa, 0)) / total).toFixed(2));
    avgActive = Number(((obArray.filter(c => c.status === "active").reduce((arc, cur) => arc + cur.gpa, 0)) / active).toFixed(2));
    avgInactive = Number(((obArray.filter(c => c.status === "inactive").reduce((arc, cur) => arc + cur.gpa, 0)) / inactive).toFixed(2));
    let gpaMetrics = { avgAll, avgActive, avgInactive };
    console.log(`2) GPA Metrics:`, gpaMetrics);
    let top5Gpa = obArray.sort((a, b) => b.gpa - a.gpa).slice(0, 5);
    let top5Youngest = obArray.sort((a, b) => b.age - a.age).slice(0, 5);
    console.log(`=== TOP 5 GPA (count: 5) ===`);
    console.table(top5Gpa);
    console.log(`=== TOP 5 YOUNGEST (count: 5) ===`);
    console.table(top5Youngest);
    let countGpaEq0 = obArray.filter(c => c.gpa === 0);
    let countGpaEq0Length = countGpaEq0.length;
    let countGpaLt3 = obArray.filter(c => c.gpa < 3);
    let countGpaLt3Length = countGpaLt3.length;
    let riskReport = { countGpaEq0Length, countGpaLt3Length };
    console.log(`5) Risk Report: `, riskReport);
    console.log(`=== RISK: GPA = 0 (count: ${countGpaEq0Length}) ===`);
    console.table(countGpaEq0);
    console.log(`=== RISK: GPA < 3.0 (count: ${countGpaLt3Length}) ===`);
    console.table(countGpaLt3);
    let moreThanGreat = obArray.filter(c => c.gpa >= 8.5).length;
    let prettyGood = obArray.filter(c => c.gpa < 8.5 && c.gpa >= 7).length;
    let medium = obArray.filter(c => c.gpa < 7 && c >= 5).length;
    let weak = obArray.filter(c => c.gpa < 5).length;
    let academicDistribution = {
        "Xuất sắc": moreThanGreat,
        "Khá-Giỏi": prettyGood,
        "Trung bình": medium,
        "Yếu": weak,
    };
    console.log(`6) Academic Distribution: `, academicDistribution);
}

let displayMenu = () => {
    return prompt(`==== STUDENT MANAGER ADVANCE ====
1. Create Student
2. Update Student
3. Soft Delete Student
4. Restore Student
5. View Students
6. Analytics Dashboard
7. Exit`);
}
let display = () => {
    let choose;
    do {
        choose = +displayMenu();
        switch (choose) {
            case 1:
                createStudent(ouput);
                break;
            case 2:
                updateStudent(ouput);
                break;
            case 3:
                softDeleteStudent(ouput);
                break;
            case 4:
                restoreStudent(ouput);
                break;
            case 5:
                viewStudent(ouput);
                break;
            case 6:
                analyticsDashboard(ouput);
                break;
            case 7:
                alert("Tạm biệt");
                break;
            case 0:
                alert("Đã in ra màn hình console");
                console.table(ouput);
                break;

            default:
                alert("Chức năng bạn chọn không phù hợp");
        }
    } while (choose !== 7)



}
display();


