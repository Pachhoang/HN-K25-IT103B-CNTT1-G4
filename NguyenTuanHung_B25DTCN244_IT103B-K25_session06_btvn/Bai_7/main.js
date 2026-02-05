let n = parseInt(prompt("Nhập số phần tử n:"));

if (n < 0) {
  console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
  console.log("Mảng không có phần tử nào");
} else {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Number(prompt("Nhập phần tử thứ " + i + ":")));
  }

  let max = arr[0];
  let second = null;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] < max && (second === null || arr[i] > second)) {
      second = arr[i];
    }
  }

  if (second === null) {
    console.log("Không tìm được số lớn thứ hai");
  } else {
    console.log(second);
  }
}
