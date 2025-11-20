
// Q2. Multi-Type Data Summary
const sampleData = {
  name: "Aditya",
  age: 21,
  isStudent: true,
  hobbies: ["coding", "cricket"],
  details: { university: "GLA", course: "B.Tech" },
  emptyValue: null,
  unknown: undefined
};

const summary = Object.entries(sampleData).map(([key, value]) => ({
  Label: key,
  Value: value,
  Type: Array.isArray(value) ? "array" : typeof value
}));

console.table(summary);
