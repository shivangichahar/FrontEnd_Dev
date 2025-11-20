
// Q3. Monthly Expense Tracker
const expenses = [12000, 3000, 8000, 2000, 1500];
const total = expenses.reduce((sum, val) => sum + val, 0);
const average = total / expenses.length;
const finalAmount = (total * 1.10).toFixed(2);

console.log(`Total: ₹${total}`);
console.log(`Average: ₹${average.toFixed(2)}`);
console.log(`After Tax: ₹${finalAmount}`);
