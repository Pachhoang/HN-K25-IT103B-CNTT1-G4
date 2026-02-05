let n = parseInt(prompt("Nhập số phần tử n:"));

if (n < 0) {
  console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
  console.log("Mảng không có phần tử");
} else {
  let sum = 0;
  let hasNumber = false;

  for (let i = 0; i < n; i++) {
    let character = prompt("Nhập ký tự thứ " + i + ":");
    if (!isNaN(character) && character !== "") {
      sum += Number(character);
      hasNumber = true;
    }
  }

  if (hasNumber) {
    console.log(sum);
  } else {
    console.log("Không có phần tử nào là số");
  }
}
