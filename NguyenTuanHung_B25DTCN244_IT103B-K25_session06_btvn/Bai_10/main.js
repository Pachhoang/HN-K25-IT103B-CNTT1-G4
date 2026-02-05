let arr = [];
let choice;

do {
  choice = parseInt(
    prompt(
      `================== MENU ===================
1. Nhập số phần tử và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng
5. In ra các số nguyên tố và tính tổng
6. Nhập một số và đếm số lần xuất hiện
7. Thêm một phần tử vào vị trí chỉ định
8. Xóa một phần tử theo giá trị
9. Sắp xếp mảng tăng dần hoặc giảm dần
0. Thoát
===========================================
Lựa chọn của bạn:`,
    ),
  );

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

      for (let i = 0; i < even.length - 1; i++) {
        for (let j = i + 1; j < even.length; j++) {
          if (even[i] < even[j]) {
            let t = even[i];
            even[i] = even[j];
            even[j] = t;
          }
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
        let max = arr[0],
          min = arr[0];
        let posMax = 0,
          posMin = 0;

        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
            posMax = i;
          }
          if (arr[i] < min) {
            min = arr[i];
            posMin = i;
          }
        }

        console.log("Lớn nhất:", max, "Vị trí:", posMax);
        console.log("Nhỏ nhất:", min, "Vị trí:", posMin);
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
      let x = Number(prompt("Nhập số cần đếm:"));
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

    case 8: {
      let val = Number(prompt("Nhập giá trị cần xóa:"));
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
          arr.splice(i, 1);
          i--;
        }
      }
      console.log(arr);
      break;
    }

    case 9: {
      let type = parseInt(prompt("1. Tăng dần\n2. Giảm dần"));
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (
            (type === 1 && arr[i] > arr[j]) ||
            (type === 2 && arr[i] < arr[j])
          ) {
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
          }
        }
      }
      console.log(arr);
      break;
    }

    case 0:
      console.log("Thoát chương trình");
      break;

    default:
      console.log("Lựa chọn không hợp lệ");
  }
} while (choice !== 0);
