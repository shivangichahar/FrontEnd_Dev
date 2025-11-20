
// Q4. Array Performance Analyzer
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const avg = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);
const passed = scores.filter(s => s >= 50).length;

console.log("Scores:", scores);
console.log(`Highest: ${highest}, Lowest: ${lowest}`);
console.log(`Average: ${avg}, Passed: ${passed}`);
