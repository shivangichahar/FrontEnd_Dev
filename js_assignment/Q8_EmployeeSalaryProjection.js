
// Q8. Employee Salary Projection
let currentSalary = 400000;
const incrementRate = 0.10;
const salaryTable = [];

for (let year = 1; year <= 5; year++) {
  currentSalary += currentSalary * incrementRate;
  salaryTable.push({ Year: year, Salary: Math.round(currentSalary) });
}

console.table(salaryTable);
