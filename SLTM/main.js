let condition;
let seeds = [
  {
    id: 1,
    name: "Bí đỏ",
    importPrice: 500,
    type: "Hàng năm",
    season: "Xuân",
    sellingPrice: 10000,
    quantity: 1,
    supplier: "Popcap",
  },
  {
    id: 2,
    name: "Cà chua bi",
    importPrice: 800,
    type: "Hàng năm",
    season: "Hạ",
    sellingPrice: 15000,
    quantity: 50,
    supplier: "GreenFarm",
  },
  {
    id: 3,
    name: "Hoa Hồng Leo",
    importPrice: 5000,
    type: "Lưu niên",
    season: "Xuân",
    sellingPrice: 45000,
    quantity: 4,
    supplier: "Popcap",
  },
  {
    id: 4,
    name: "Cải Bó Xôi",
    importPrice: 300,
    type: "Hàng năm",
    season: "Đông",
    sellingPrice: 8000,
    quantity: 100,
    supplier: "VinSeed",
  },
  {
    id: 5,
    name: "Dưa Hấu",
    importPrice: 1200,
    type: "Hàng năm",
    season: "Hạ",
    sellingPrice: 25000,
    quantity: 30,
    supplier: "GreenFarm",
  },
  {
    id: 6,
    name: "Oải Hương (Lavender)",
    importPrice: 7000,
    type: "Lưu niên",
    season: "Thu",
    sellingPrice: 60000,
    quantity: 5,
    supplier: "Popcap",
  },
  {
    id: 7,
    name: "Cà rốt",
    importPrice: 400,
    type: "2 năm",
    season: "Đông",
    sellingPrice: 12000,
    quantity: 80,
    supplier: "VinSeed",
  },
  {
    id: 8,
    name: "Hướng Dương",
    importPrice: 1000,
    type: "Hàng năm",
    season: "Hè",
    sellingPrice: 20000,
    quantity: 15,
    supplier: "GreenFarm",
  },
  {
    id: 9,
    name: "Cây Việt Quất",
    importPrice: 15000,
    type: "Lưu niên",
    season: "Xuân",
    sellingPrice: 120000,
    quantity: 8,
    supplier: "Popcap",
  },
];
// Thêm hạt mới
function addSeed(seeds) {
  let hadSeedId = "Những id hạt giống đã có: \n";
  seeds.forEach((seed) => {
    hadSeedId += `${seed.id}: ${seed.name} \n`;
  });
  let newSeed;
  // Id
  let inputId = prompt(`---Nhập Id hạt giống mới---
              ${hadSeedId}`);
  if (seeds.some((seed) => seed.id === Number(inputId))) {
    alert(`Id ${inputId} đã tồn tại, nhập lại!`);
    return;
  } else if (inputId.trim() === "") {
    alert(`Id rỗng`);
    return;
  } else if (isNaN(Number(inputId))) {
    alert(`Id phải là số`);
    return;
  }
  // Tên
  let inputName = prompt(`Nhập tên hạt giống`);
  if (inputName.trim() === "") {
    alert("Tên không được rỗng");
    return;
  }
  // Giá nhập
  let inputIP = +prompt(`Nhập giá nhập (theo kg)`);
  if (inputIP <= 0) {
    alert(`Giá phải > 0`);
    return;
  } else if (isNaN(inputIP)) {
    alert(`Giá phải là số`);
    return;
  }
  // Loại cây
  let inputType = prompt(`Nhập loại cây (Lưu niên, 2 năm, Hàng năm)`);
  let validType = ["lưu niên", "hàng năm", "2 năm"];
  if (inputType.trim() === "") {
    alert(`Loại cây không được để rỗng`);
    return;
  } else if (!validType.includes(inputType.toLowerCase())) {
    alert(`Cây phải thuộc 1 trong 3 loại Lưu niên, 2 năm, Hàng năm`);
    return;
  }
  // Mùa vụ
  let inputSeason = prompt(`Nhập mùa vụ của cây (Xuân, Hạ, Thu, Đông)`);
  let validSeason = ["xuân", "hạ", "thu", "đông", "hè"];
  if (inputSeason.trim() === "") {
    alert(`Mùa vừa nhập rỗng`);
    return;
  } else if (!validSeason.includes(inputSeason.toLowerCase())) {
    alert(`Phải là 1 trong 4 mùa xuân hạ (hè) thu đông`);
    return;
  }
  // Giá bán
  let inputSP = prompt(`Nhập giá bán`);
  if (inputSP.trim() === "") {
    alert("Giá bán rỗng !");
    return;
  } else if (Number(inputSP) <= 0) {
    alert(`Giá bán phải > 0`);
    return;
  } else if (isNaN(Number(inputIP))) {
    alert(`Giá bán phải là số`);
    return;
  }

  // Số lượng nhập

  let inputQuantity = prompt(`Nhập số lượng`);
  if (inputQuantity.trim() === "") {
    alert(`Số lượng rỗng`);
    return;
  } else if (Number(inputQuantity) < 0) {
    alert(`Số lượng phải > hoặc = 0`);
    return;
  } else if (isNaN(Number(inputQuantity))) {
    alert(`Số lượng phải là số`);
    return;
  }
  // Nhà cung cấp

  let inputSupplier = prompt(`Nhập nhà cung cấp`);
  if (inputSupplier.trim() === "") {
    alert("Nhà cung cấp rỗng");
    return;
  }
  newSeed = {
    id: inputId,
    name: inputName,
    importPrice: inputIP,
    type: inputType,
    season: inputSeason,
    sellingPrice: inputSP,
    quantity: inputQuantity,
    supplier: inputSupplier,
  };
  return seeds.push(newSeed);
}
// Show toàn bộ hạt giống
function showSeed(seeds) {
  let outputData = "";
  seeds.forEach((seed) => {
    outputData += `
                  ID: ${seed.id}
                  Tên: ${seed.name}
                  Giá nhập: ${seed.importPrice}
                  Loại cây: ${seed.type}
                  Thời vụ: ${seed.season}
                  Giá bán: ${seed.sellingPrice}
                  Số lượng (kg): ${seed.quantity}
                  Nhà cung cấp: ${seed.supplier}
                  `;
  });
  return outputData;
}
// Tìm kiếm nâng cao
function higherSearch(seeds) {
  let choice;
  do {
    choice = +prompt(`-----Nhập lựa chọn tìm kiếm-----
          1. Tìm kiếm theo tên
          2. Tìm kiếm theo mùa vụ
          3. Tìm kiếm theo khoảng giá nhập
          4. Tìm kiếm theo khoảng giá bản
          0. Thoát`);
    switch (choice) {
      case 1:
        console.table(findByName(seeds));
        break;
      case 2:
        findBySeason(seeds);
        break;
      case 3:
        findbyImportPrice(seeds);
        break;
      case 4:
        findBySellingPrice(seeds);
        break;
      default:
        break;
    }
  } while (choice !== 0);
}
// Tìm kiếm theo tên
let findByName = (seeds) => {
  let findSeed = prompt(`Nhập hạt giống muốn tìm`);

  // 1. Kiểm tra Cancel và Rỗng
  if (findSeed === null) return;
  if (findSeed.trim() === "") {
    alert(`Tên không được rỗng`);
    return;
  }
  const result = seeds.filter((seed) =>
    seed.name.toLowerCase().includes(findSeed),
  );

  // 3. Trả về kết quả
  return result.length > 0 ? result : `Không tìm thấy hạt giống: ${findSeed}`;
};
// Tìm kiếm theo Mùa
let findBySeason = (seeds) => {
  let findSeason = prompt(`Nhập mùa vụ (Xuân, Hạ (Hè), Thu, Đông)`);
  let result;
  let validSeason = ["xuân", "hạ", "thu", "đông", "hè"];

  let seasonInput = findSeason.toLowerCase();
  if (seasonInput.trim() === "") {
    alert(`Tên mùa không được rỗng`);
    return;
  }
  let searchTerms = [seasonInput];
  if (seasonInput === "hè" || seasonInput === "hạ") {
    searchTerms = ["hè", "hạ"];
  }
  result = seeds.filter((s) => {
    let seedSeason = s.season.toLowerCase();
    return searchTerms.includes(seedSeason);
  });
  if (result.length === 0) {
    console.log(`Không tìm thấy ${findSeason}`);
    return `Không tìm thấy`;
  } else {
    console.table(result);
    return result;
  }
};
// Tìm kiếm theo khoảng giá nhập
let findbyImportPrice = (seeds) => {
  let beginPrice = prompt(`Nhập giá khởi đầu`);
  if (beginPrice.trim() === "") {
    alert(`Giá không được để rỗng`);
    return;
  } else if (isNaN(Number(beginPrice))) {
    alert(`Giá nhập phải là số`);
    return;
  } else if (Number(beginPrice) < 0) {
    alert(`Giá nhập phải > hoặc = 0`);
    return;
  }
  let endPrice = prompt(`Nhập giá kết thúc`);
  if (endPrice.trim() === "") {
    alert(`Giá không được để rỗng`);
    return;
  } else if (isNaN(Number(endPrice))) {
    alert(`Giá nhập phải là số`);
    return;
  } else if (Number(endPrice) < 0) {
    alert(`Giá nhập phải > hoặc = 0`);
    return;
  } else if (Number(endPrice) < Number(beginPrice)) {
    alert(`Giá kết thúc phải >= giá khởi đầu`);
  }
  let result = seeds.filter((seed) => {
    return seed.importPrice >= beginPrice && seed.importPrice <= endPrice;
  });
  if (result.length > 0) {
    console.table(result);
    return result;
  } else {
    console.log(`Không tìm thấy`);
    return `Không tìm thấy`;
  }
};
// Tìm kiếm theo khoảng giá bán
let findBySellingPrice = (seeds) => {
  let beginPrice = prompt(`Nhập giá khởi đầu`);
  if (beginPrice.trim() === "") {
    alert(`Giá không được để rỗng`);
    return;
  } else if (isNaN(Number(beginPrice))) {
    alert(`Giá nhập phải là số`);
    return;
  } else if (Number(beginPrice) < 0) {
    alert(`Giá nhập phải > hoặc = 0`);
    return;
  }
  let endPrice = prompt(`Nhập giá kết thúc`);
  if (endPrice.trim() === "") {
    alert(`Giá không được để rỗng`);
    return;
  } else if (isNaN(Number(endPrice))) {
    alert(`Giá nhập phải là số`);
    return;
  } else if (Number(endPrice) < 0) {
    alert(`Giá nhập phải > hoặc = 0`);
    return;
  } else if (Number(endPrice) < Number(beginPrice)) {
    alert(`Giá kết thúc phải >= giá khởi đầu`);
  }
  let result = seeds.filter((seed) => {
    return seed.sellingPrice >= beginPrice && seed.sellingPrice <= endPrice;
  });
  if (result.length > 0) {
    console.table(result);
    return result;
  } else {
    console.log(`Không tìm thấy`);
    return `Không tìm thấy`;
  }
};
// Cập nhật nhà cung cấp
let updateSupplier = (seeds) => {
  let findSupplier = prompt(`Nhập nhà cung cấp muốn sửa đổi`);

  // 1. Kiểm tra Cancel và Rỗng
  if (findSupplier === null) return;
  if (findSupplier.trim() === "") {
    alert(`Tên nhà cung cấp không được rỗng`);
    return;
  }
  let result = seeds.find(
    (seed) => seed.supplier.toLowerCase() === findSupplier.toLowerCase(),
  );
  if (result) {
    let updateSupplierName = prompt(`Nhập tên mới cho ${findSupplier}`);

    // 1. Kiểm tra Cancel và Rỗng
    if (updateSupplierName === null) return;
    if (updateSupplierName.trim() === "") {
      alert(`Tên nhà cung cấp không được rỗng`);
      return;
    }
    seeds.map((seed) => {
      if (seed.supplier.toLowerCase() === findSupplier.toLowerCase()) {
        seed.supplier = updateSupplierName;
      }
    });
    console.table(seeds);
    return seeds;
  } else {
    alert(`Không tìm thấy đối tác cung ứng này ${findSupplier}`);
    return;
  }
};
// Cập nhật thông tin hạt giống
let updateSeedData = (seeds) => {
  let findSeedName = prompt(`Nhập tên hạt giống muốn sửa đổi`);

  // 1. Kiểm tra Cancel và Rỗng
  if (findSeedName === null) return;
  if (findSeedName.trim() === "") {
    alert(`Tên hẹt giống không được rỗng`);
    return;
  }
  let result = seeds.find(
    (seed) => seed.name.toLowerCase() === findSeedName.toLowerCase(),
  );
  if (result) {
    // Lấy index của result
    let resultIndex = seeds.findIndex(
      (seed) => seed.name.toLowerCase() === findSeedName.toLowerCase(),
    );
    // Tên
    let inputName = prompt(`Nhập tên mới cho hạt giống`);
    if (inputName === null) return;
    if (inputName.trim() === "") {
      alert(`Tên hạt giống không được rỗng`);
      return;
    }
    let inputIP = +prompt(`Nhập giá nhập (theo kg)`);
    if (inputIP <= 0) {
      alert(`Giá phải > 0`);
      return;
    } else if (isNaN(inputIP)) {
      alert(`Giá phải là số`);
      return;
    }
    // Loại cây
    let inputType = prompt(`Nhập loại cây (Lưu niên, 2 năm, Hàng năm)`);
    let validType = ["lưu niên", "hàng năm", "2 năm"];
    if (inputType.trim() === "") {
      alert(`Loại cây không được để rỗng`);
      return;
    } else if (!validType.includes(inputType.toLowerCase())) {
      alert(`Cây phải thuộc 1 trong 3 loại Lưu niên, 2 năm, Hàng năm`);
      return;
    }
    // Mùa vụ
    let inputSeason = prompt(`Nhập mùa vụ của cây (Xuân, Hạ, Thu, Đông)`);
    let validSeason = ["xuân", "hạ", "thu", "đông", "hè"];
    if (inputSeason.trim() === "") {
      alert(`Mùa vừa nhập rỗng`);
      return;
    } else if (!validSeason.includes(inputSeason.toLowerCase())) {
      alert(`Phải là 1 trong 4 mùa xuân hạ (hè) thu đông`);
      return;
    }
    // Giá bán
    let inputSP = prompt(`Nhập giá bán`);
    if (inputSP.trim() === "") {
      alert("Giá bán rỗng !");
      return;
    } else if (Number(inputSP) <= 0) {
      alert(`Giá bán phải > 0`);
      return;
    } else if (isNaN(Number(inputIP))) {
      alert(`Giá bán phải là số`);
      return;
    }

    // Số lượng nhập

    let inputQuantity = prompt(`Nhập số lượng`);
    if (inputQuantity.trim() === "") {
      alert(`Số lượng rỗng`);
      return;
    } else if (Number(inputQuantity) < 0) {
      alert(`Số lượng phải > hoặc = 0`);
      return;
    } else if (isNaN(Number(inputQuantity))) {
      alert(`Số lượng phải là số`);
      return;
    }
    // Nhà cung cấp

    let inputSupplier = prompt(`Nhập nhà cung cấp`);
    if (inputSupplier.trim() === "") {
      alert("Nhà cung cấp rỗng");
      return;
    }

    seeds[resultIndex] = {
      id: seeds[resultIndex].id,
      name: inputName,
      importPrice: +inputIP,
      type: inputType,
      season: inputSeason,
      sellingPrice: +inputSP,
      quantity: +inputQuantity,
      supplier: inputSupplier,
    };
    alert(`Thêm thành công !`);
    console.table(seeds);
  } else {
    alert(`Không tìm thấy đối tác cung ứng này ${findSupplier}`);
    return;
  }
};
// Xoá hạt giống
let deleteSeed = (seeds) => {
  let findSeedName = prompt(`Nhập tên hạt giống muốn xoá đổi`);

  // 1. Kiểm tra Cancel và Rỗng
  if (findSeedName === null) return;
  if (findSeedName.trim() === "") {
    alert(`Tên hẹt giống không được rỗng`);
    return;
  }
  let result = seeds.find(
    (seed) => seed.name.toLowerCase() === findSeedName.toLowerCase(),
  );
  if (result) {
    let resultIndex = seeds.findIndex(
      (seed) => seed.name.toLowerCase() === findSeedName.toLowerCase(),
    );
    let confirm = window.confirm(
      `Are you sure about that !\nBạn có muốn xoá hạt có tên là ${result.name}`,
    );
    if (confirm) {
      seeds.splice(resultIndex, 1);
      alert(`Xoá thành công !`);
      console.table(seeds);
    } else {
      alert(`Thôi không xoá nữa !`);
    }
  }
};
// Cập nhật và xoá
let updateAndDelete = (seeds) => {
  let choice;
  do {
    choice = +prompt(`-----Nhập lựa chọn thao tác-----
          1. Cập nhật
          2. Xoá
          0. Thoát`);
    switch (choice) {
      case 1:
        updateSeedData(seeds);
        break;
      case 2:
        deleteSeed(seeds);
        break;
      case 0:
        console.log(`Thoát`);
        break;
      default:
        break;
    }
  } while (choice !== 0);
};
// Xuất kho
let exportSeed = (seeds) => {
  let findSeedName = prompt(`Nhập tên hạt giống muốn xuất kho`);

  // 1. Kiểm tra Cancel và Rỗng
  if (findSeedName === null) return;
  if (findSeedName.trim() === "") {
    alert(`Tên hẹt giống không được rỗng`);
    return;
  }
  let result = seeds.find(
    (seed) => seed.name.toLowerCase() === findSeedName.toLowerCase(),
  );
  if (result) {
    let resultIndex = seeds.findIndex(
      (seed) => seed.name.toLowerCase() === findSeedName.toLowerCase(),
    );
    let outputQuantity = prompt(
      `Nhập số lượng muốn xuất kho cho ${seeds[resultIndex].name} đang có ${seeds[resultIndex].quantity}`,
    );

    if (outputQuantity.trim() === "") {
      alert("Số lượng rỗng !");
      return;
    } else if (Number(outputQuantity) <= 0) {
      alert(`Số lượng phải > 0`);
      return;
    } else if (isNaN(Number(outputQuantity))) {
      alert(`Số lượng phải là số`);
      return;
    } else if (outputQuantity > seeds[resultIndex].quantity) {
      alert(`Số lượng xuất kho không hợp lệ do lớn hơn số lượng đang có`);
      return;
    } else {
      console.log(
        `Thành tiền: ${outputQuantity * seeds[resultIndex].sellingPrice}`,
      );
      seeds[resultIndex].quantity -= outputQuantity;
    }
  } else {
    alert(`Không tìm thấy hạt giống !`);
    return;
  }
};
// Báo cáo lợi nhuận
let financialReports = (seeds) => {
  let total = 0;
  seeds.forEach((seed) => {
    total += (seed.sellingPrice - seed.importPrice) * seed.quantity;
  });
  return formatData(total);
};
// Cảnh báo sắp hết hàng
let inventoryAlert = (seeds) => {
  let alertSeeds = seeds.filter((seed) => seed.quantity < 5);
  let outputData = "";
  if (alertSeeds.length > 0) {
    alertSeeds.forEach((alertSeed) => {
      outputData += `${alertSeed.name} cần nhập thêm\n`;
    });
  } else {
    outputData = "Không có hạt nào cần nhập thêm";
  }
  return outputData;
};
// Sắp xếp theo mùa
let sortBySeason = (seeds) => {
  let springSeeds = seeds.filter(
    (seed) => seed.season.toLowerCase() === "xuân",
  );
  let summerSeeds = seeds.filter(
    (seed) =>
      seed.season.toLowerCase() === "hè" || seed.season.toLowerCase() === "hạ",
  );
  let fallSeeds = seeds.filter((seed) => seed.season.toLowerCase() === "thu");
  let winterSeeds = seeds.filter(
    (seed) => seed.season.toLowerCase() === "đông",
  );
  console.log(`---Hạt mùa xuân---`);
  console.table(springSeeds);
  console.log(`---Hạt mùa hè (hạ)---`);
  console.table(summerSeeds);
  console.log(`---Hạt mùa thu---`);
  console.table(fallSeeds);
  console.log(`---Hạt mùa đông---`);
  console.table(winterSeeds);
};
let formatData = (input) => {
  if (input / 1000000000 > 1) {
    return (input / 1000000000).toFixed(2) + ` B`;
  }
  if (input / 1000000 > 1) {
    return (input / 1000000).toFixed(2) + ` M`;
  }
  if (input / 1000 > 1) {
    return (input / 1000000000).toFixed(2) + ` K`;
  }
  return input;
};
do {
  condition = +prompt(`-----Lựa chọn chức năng-----
              1. Thêm hạt giống:
              2. Hiển thị & Sắp xếp:
              3. Tìm kiếm nâng cao:
              4. Cập nhật nhà cung cấp
              5. Cập nhật & Xóa:
              6. Nghiệp vụ xuất kho (Bán hàng):
              7. Báo cáo tài chính (Lợi nhuận):
              8. Thống kê cảnh báo kho
              9. Phân loại theo Mùa
              0. Thoát
      `);
  switch (condition) {
    case 1:
      addSeed(seeds);
      break;
    case 0:
      console.log(`Thoát chương trình`);
      break;
    case 2:
      console.log(showSeed(seeds));
      break;
    case 3:
      higherSearch(seeds);
      break;
    case 4:
      updateSupplier(seeds);
      break;
    case 5:
      updateAndDelete(seeds);
      break;
    case 6:
      exportSeed(seeds);
      break;
    case 7:
      console.log(`Doanh thu dự kiến ${financialReports(seeds)}`);
      break;
    case 8:
      console.table(inventoryAlert(seeds));
      break;
    case 9:
      sortBySeason(seeds);
      break;
    default:
      break;
  }
} while (condition !== 0);
// const cars = [
//   { id: "CAR01", brand: "Toyota", year: 2022, price: 25000, electric: false },
//   { id: "CAR02", brand: "Tesla", year: 2024, price: 50000, electric: true },
//   { id: "CAR03", brand: "BMW", year: 2021, price: 42000, electric: false },
//   { id: "CAR04", brand: "Mercedes", year: 2023, price: 48000, electric: false },
//   { id: "CAR05", brand: "Hyundai", year: 2020, price: 20000, electric: false },
//   { id: "CAR06", brand: "Kia", year: 2022, price: 22000, electric: false },
//   { id: "CAR07", brand: "Ford", year: 2019, price: 18000, electric: false },
//   { id: "CAR08", brand: "Honda", year: 2021, price: 23000, electric: false },
//   { id: "CAR09", brand: "Mazda", year: 2023, price: 26000, electric: false },
//   { id: "CAR10", brand: "VinFast", year: 2024, price: 35000, electric: true },
//   { id: "CAR11", brand: "Audi", year: 2022, price: 45000, electric: false },
//   { id: "CAR12", brand: "Porsche", year: 2023, price: 90000, electric: false },
//   {
//     id: "CAR13",
//     brand: "Chevrolet",
//     year: 2018,
//     price: 15000,
//     electric: false,
//   },
//   { id: "CAR14", brand: "Lexus", year: 2022, price: 47000, electric: false },
//   { id: "CAR15", brand: "Nissan", year: 2020, price: 21000, electric: false },
// ];

// const deleteByName = (obj) =>{
//   let findName = prompt(`Nhập tên hãng xe muốn xóa`);
//   return result = obj.filter(del => del.brand.toLowerCase().includes(findName) ? false : true);
// }

// const newCar = deleteByName(cars);
// console.log(newCar);
