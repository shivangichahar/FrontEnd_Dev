
// Q4. Academic Performance Evaluator
const marks = [85, 78, 90, 88, 92];
const avg = marks.reduce((a, b) => a + b, 0) / marks.length;
const hasFail = marks.some(m => m < 35);

if (hasFail) console.log("Detained due to failing subject.");
else if (avg >= 85) console.log("Promoted with Distinction");
else if (avg >= 50) console.log("Promoted");
else console.log("Detained");
