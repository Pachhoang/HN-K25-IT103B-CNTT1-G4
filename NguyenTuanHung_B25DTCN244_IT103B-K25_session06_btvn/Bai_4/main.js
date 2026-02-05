let n = parseInt(prompt("Nhập số phần tử n:"));

if (n === 0) {
  console.log("Không có ký tự số");
} else {
  let arr = [];
  let result = [];

  for (let i = 0; i < n; i++) {
    let ch = prompt("Nhập ký tự thứ " + i + ":");
    arr.push(ch);
    if (ch >= "0" && ch <= "9") {
      result.push(ch);
    }
  }

  if (result.length > 0) {
    console.log(result.join(" "));
  } else {
    console.log("Không có ký tự số");
  }
}
