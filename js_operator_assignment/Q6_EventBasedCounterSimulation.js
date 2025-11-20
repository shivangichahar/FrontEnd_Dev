
// Q6. Event-Based Counter Simulation
let count = 0;
function counter() {
  function increment() { count++; console.log(`Count: ${count}`); }
  function decrement() { count--; console.log(`Count: ${count}`); }
  increment();
  increment();
  decrement();
}
counter();
