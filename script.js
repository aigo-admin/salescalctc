function formatCurrency(value) {
    return "₹" + value.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function calculate() {

    const price =
        parseFloat(document.getElementById("price").value) || 0;

    const voucherType =
        document.getElementById("voucherType").value;

    const voucherValue =
        parseFloat(document.getElementById("voucherValue").value) || 0;

    const commissionPercent =
        parseFloat(document.getElementById("commission").value) || 0;

    let discountAmount = 0;

    if (voucherType === "percentage") {
        discountAmount = price * (voucherValue / 100);
    } else {
        discountAmount = voucherValue;
    }

    if (discountAmount > price) {
        discountAmount = price;
    }

    const sellingPrice = price - discountAmount;

    const commissionAmount =
        sellingPrice * (commissionPercent / 100);

    const finalRevenue =
        sellingPrice - commissionAmount;

    document.getElementById("originalPrice").textContent =
        formatCurrency(price);

    document.getElementById("discountAmount").textContent =
        formatCurrency(discountAmount);

    document.getElementById("sellingPrice").textContent =
        formatCurrency(sellingPrice);

    document.getElementById("commissionAmount").textContent =
        formatCurrency(commissionAmount);

    document.getElementById("finalRevenue").textContent =
        formatCurrency(finalRevenue);

    document.getElementById("breakdown").innerHTML = `
        <strong>Calculation Breakdown</strong><br><br>

        Original Price = ${formatCurrency(price)}<br>

        Discount = ${formatCurrency(discountAmount)}<br><br>

        Selling Price = Original Price − Discount<br>
        = ${formatCurrency(price)} − ${formatCurrency(discountAmount)}<br>
        = <strong>${formatCurrency(sellingPrice)}</strong><br><br>

        Salesman Commission = ${commissionPercent}% of Selling Price<br>
        = ${formatCurrency(commissionAmount)}<br><br>

        Final Revenue = Selling Price − Commission<br>
        = ${formatCurrency(sellingPrice)} − ${formatCurrency(commissionAmount)}<br>
        = <strong>${formatCurrency(finalRevenue)}</strong>
    `;
}
