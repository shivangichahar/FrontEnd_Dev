
// Q8. Dynamic Discount Evaluator
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

let total = 0;
cart.forEach(i => {
  let discount = 0;
  if (i.category === "electronics") discount = 0.10;
  else if (i.category === "fashion") discount = 0.05;
  i.final = i.price - i.price * discount;
  total += i.final;
});
if (total > 50000) total *= 0.95;
console.table(cart);
console.log(`Final Total: ₹${total.toFixed(2)}`);
