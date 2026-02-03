let returnedBooks = [];
let numberOfBooks;

while (true) {
  numberOfBooks = Number(prompt("Bạn muốn trả bao nhiêu cuốn sách?"));

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
  let bookName = prompt(
    `Nhập lần lượt tên cuốn sách bị trả muộn thứ ${i + 1}:`,
  );
  returnedBooks.push(bookName);
}

let totalBooks = 0;
for (let i = 0; i < returnedBooks.length; i++) {
  totalBooks++;
}

console.log("Tổng số sách đã được trả:", totalBooks);

console.log("Danh sách các sách đã trả:");
for (let i = 0; i < returnedBooks.length; i++) {
  console.log(`${i + 1}. ${returnedBooks[i]}`);
}

let longNameCount = 0;
for (let i = 0; i < returnedBooks.length; i++) {
  if (returnedBooks[i].length > 20) {
    longNameCount++;
  }
}

console.log(
  `Số lượng sách có tên dài hơn 20 ký tự (kể cả khoảng trắng): ${longNameCount}`,
);
