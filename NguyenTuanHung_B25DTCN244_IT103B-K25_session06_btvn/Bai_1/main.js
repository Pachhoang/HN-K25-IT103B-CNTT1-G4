let arr = [1, 22, 12, 8, 7, 9];

let result = [];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) {
    result.push(arr[i]);
    count++;
  }
}

if (count > 0) {
  console.log(result.join(" "));
} else {
  console.log("Không có số nào lớn hơn 10");
}
