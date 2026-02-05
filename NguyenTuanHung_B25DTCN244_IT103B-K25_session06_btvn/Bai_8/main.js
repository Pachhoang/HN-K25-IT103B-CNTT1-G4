let n = parseInt(prompt("Nhập số phần tử n:"));

if (n < 0) {
  console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
  console.log("Không phải dãy số fibonacci");
} else {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Number(prompt("Nhập phần tử thứ " + i + ":")));
  }

  let isFibo = true;

  if (n > 2) {
    for (let i = 2; i < n; i++) {
      if (arr[i] !== arr[i - 1] + arr[i - 2]) {
        isFibo = false;
        break;
      }
    }
  }

  if (isFibo) {
    console.log("Là dãy số fibonacci");
  } else {
    console.log("Không phải dãy số fibonacci");
  }
}
