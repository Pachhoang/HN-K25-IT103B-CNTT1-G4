let arr = [];
let choice;

do {
  choice = parseInt(prompt(
`================== MENU ===================
1. Nhập số phần tử và giá trị các phần tử
2. In ra các phần tử đang quản lý
3. In ra các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất
5. In ra các số nguyên tố và tính tổng
6. Nhập một số và thống kê số lần xuất hiện
7. Thêm một phần tử vào vị trí chỉ định
8. Thoát
===========================================
Lựa chọn của bạn:`));

  switch (choice) {
    case 1: {
      let n = parseInt(prompt("Nhập số phần tử:"));
      arr = [];
      for (let i = 0; i < n; i++) {
        arr.push(Number(prompt("Nhập phần tử thứ " + i + ":")));
      }
      break;
    }

    case 2:
      console.log(arr);
      break;

    case 3: {
      let even = [];
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          even.push(arr[i]);
          sum += arr[i];
        }
      }
      console.log(even);
      console.log("Tổng:", sum);
      break;
    }

    case 4: {
      if (arr.length === 0) {
        console.log("Mảng rỗng");
      } else {
        let max = arr[0];
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) max = arr[i];
          if (arr[i] < min) min = arr[i];
        }
        console.log("Lớn nhất:", max);
        console.log("Nhỏ nhất:", min);
      }
      break;
    }

    case 5: {
      let primes = [];
      let sum = 0;

      for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        let isPrime = x > 1;
        for (let j = 2; j < x; j++) {
          if (x % j === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          primes.push(x);
          sum += x;
        }
      }

      console.log(primes);
      console.log("Tổng:", sum);
      break;
    }

    case 6: {
      let x = Number(prompt("Nhập số cần thống kê:"));
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) count++;
      }
      console.log(count);
      break;
    }

    case 7: {
      let pos = parseInt(prompt("Nhập vị trí cần thêm:"));
      let val = Number(prompt("Nhập giá trị cần thêm:"));
      if (pos >= 0 && pos <= arr.length) {
        arr.splice(pos, 0, val);
      }
      console.log(arr);
      break;
    }

    case 8:
      console.log("Thoát chương trình");
      break;

    default:
      console.log("Lựa chọn không hợp lệ");
  }
} while (choice !== 8);
