let n = parseInt(prompt("Nhập số phần tử n:"));

if (n < 0) {
  console.log("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
  console.log("Mảng không có phần tử");
} else {
  let arr = [];
  let count = 0;

  for (let i = 0; i < n; i++) {
    let x = parseFloat(prompt("Nhập phần tử thứ " + i + ":"));
    arr.push(x);
    if (x < 0 && Number.isInteger(x)) {
      count++;
    }
  }

  console.log(count);
}
