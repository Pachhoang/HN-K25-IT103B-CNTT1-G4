let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let numberOfBooks;

while (true) {
  numberOfBooks = Number(prompt("Bạn muốn bổ sung bao nhiêu cuốn sách?"));

  if (
    !isNaN(numberOfBooks) &&
    numberOfBooks > 0 &&
    Number.isInteger(numberOfBooks)
  ) {
    break;
  }
  alert("Vui lòng nhập số nguyên dương hợp lệ!");
}
for (let i = 0; i < numberOfBooks; i++) {
  let bookId;
  while (true) {
    bookId = prompt(`Nhập mã sách thứ ${i + 1}:`);
    if (bookId !== null && bookId.trim() !== "") {
      break;
    }
    alert("Mã sách không được để trống!");
  }
  booksId.push(bookId);

  let bookName;
  while (true) {
    bookName = prompt(`Nhập tên sách thứ ${i + 1}:`);
    if (bookName !== null && bookName.trim() !== "") {
      break;
    }
    alert("Tên sách không được để trống!");
  }
  booksName.push(bookName);

  let quantity;
  while (true) {
    quantity = Number(prompt(`Nhập số lượng tồn kho hiện tại thứ ${i + 1}:`));
    if (!isNaN(quantity) && quantity >= 0 && Number.isInteger(quantity)) {
      break;
    }
    alert("Số lượng không đúng, nhập lại!");
  }
  inventoryQuantity.push(quantity);
}

let totalBooks = 0;
for (let i = 0; i < booksName.length; i++) {
  totalBooks++;
}

console.log("Tổng số loại sách:", totalBooks);

console.log(`Danh sách sách cần xem xét bổ sung (${totalBooks} loại):`);

for (let i = 0; i < totalBooks; i++) {
  console.log(
    `${i + 1}. Mã: ${booksId[i]} - Tên: ${booksName[i]} - Còn: ${inventoryQuantity[i]} bản`,
  );
}

let totalLeftoverQuantity = 0;
for (let i = 0; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] <= 5) {
    totalLeftoverQuantity++;
  }
}

console.log(`\nSố sách có tồn kho ≤ 5 bản: ${totalLeftoverQuantity} loại`);

let zeroStockList = "";

for (let i = 0; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] === 0) {
    zeroStockList += booksId[i] + " ";
  }
}

if (zeroStockList !== "") {
  console.log(`Các mã sách đã hết hàng (0 bản): ${zeroStockList.trim()}`);
} else {
  console.log("Các mã sách đã hết hàng (0 bản): Không có");
}
