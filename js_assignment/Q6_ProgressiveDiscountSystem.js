
// Q6. Progressive Discount System
const total = 6500;
let discountRate = 0;

if (total >= 10000) discountRate = 25;
else if (total >= 5000) discountRate = 15;
else if (total >= 2000) discountRate = 5;

const discount = (total * discountRate) / 100;
const finalPrice = Math.round(total - discount);

console.log(`Original: ₹${total}`);
console.log(`Discount: ${discountRate}%`);
console.log(`Final Price: ₹${finalPrice}`);
