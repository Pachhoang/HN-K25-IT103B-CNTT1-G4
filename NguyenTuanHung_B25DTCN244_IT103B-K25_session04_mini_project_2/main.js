let names = ["iPhone 15", "Samsung S23", "Oppo Reno", "Xiaomi 13", "Nokia C20"];
let prices = [1200, 900, 450, 600, 80];
let stocks = [10, 5, 0, 8, 15];

function showPremiumProducts(names, prices, minPrice) {
  let premiumList = names.filter((_, i) => prices[i] > minPrice);
  alert(
    `Sản phẩm cao cấp (>${minPrice} USD):\n` +
      (premiumList.join(", ") || "Không có"),
  );
}

function checkStockAndPrice(stocks, prices, minPrice) {
  let anyOutOfStock = stocks.some((qty) => qty === 0);
  let allAboveMin = prices.every((p) => p > minPrice);
  alert(
    `Kiểm tra kho:
- Có sản phẩm hết hàng: ${anyOutOfStock ? "Có" : "Không"}
- Tất cả giá > ${minPrice} USD: ${allAboveMin ? "Đúng" : "Sai"}`,
  );
}

function showTotalValue(prices, stocks) {
  let totalValue = prices.reduce((sum, price, i) => sum + price * stocks[i], 0);
  alert(`Tổng giá trị hàng trong kho: ${totalValue.toLocaleString()} USD`);
}

function applyDiscount(prices) {
  prices.forEach((price, i) => (prices[i] = price * 0.9));
  alert(`Đã giảm giá 10% cho tất cả sản phẩm!`);
}

function searchProduct(names, prices, stocks, keyword) {
  let found = names
    .map((name, i) => ({ name, price: prices[i], stock: stocks[i] }))
    .filter((p) => p.name.toLowerCase().includes(keyword.toLowerCase()))
    .map((p) => `${p.name} - Giá: ${p.price} - Kho: ${p.stock}`);
  alert(
    found.length > 0
      ? "Kết quả:\n" + found.join("\n")
      : "Không tìm thấy sản phẩm nào.",
  );
}

function showStockReport(names, stocks) {
  let report = stocks.map(
    (qty, i) => `${names[i]}: ${qty > 0 ? "Còn hàng" : "Hết hàng"} (${qty})`,
  );
  alert("Báo cáo tồn kho:\n" + report.join("\n"));
}

function showMenu() {
  return prompt(
    `--- HỆ THỐNG QUẢN LÝ KHO HÀNG ---
1. Lọc sản phẩm cao cấp (>500)
2. Kiểm tra hết hàng / giá sàn
3. Tính tổng giá trị kho
4. Giảm giá 10% toàn bộ
5. Tìm sản phẩm theo tên
6. Báo cáo tồn kho
7. Thoát
Nhập lựa chọn (1-7):`,
  );
}

let choice;

do {
  choice = showMenu();

  switch (Number(choice)) {
    case 1:
      showPremiumProducts(names, prices, 500);
      break;
    case 2:
      checkStockAndPrice(stocks, prices, 100);
      break;
    case 3:
      showTotalValue(prices, stocks);
      break;
    case 4:
      applyDiscount(prices);
      break;
    case 5:
      let keyword = prompt("Nhập tên sản phẩm cần tìm:");
      searchProduct(names, prices, stocks, keyword);
      break;
    case 6:
      showStockReport(names, stocks);
      break;
    case 7:
      alert("Đã thoát. Hẹn gặp lại!");
      break;
    default:
      alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 7.");
  }
} while (choice !== null && Number(choice) !== 7);
