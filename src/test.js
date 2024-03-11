// Define today's date
const today = new Date();

// Extract year, month, and day
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const tomorrow = today.getDate() + 1;
const yesterday = today.getDate() -1;

// Format the date
const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

// Print the formatted date
console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(tomorrow);
console.log(yesterday);

