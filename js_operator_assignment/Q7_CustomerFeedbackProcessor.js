
// Q7. Customer Feedback Processor
const feedback = "Great product! Fast delivery and amazing sound quality!";
const words = feedback.split(" ").length;
const negative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");
console.log(`Words: ${words}`);
console.log(negative ? "Needs Improvement" : "Positive Feedback");
