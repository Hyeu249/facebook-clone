//Create date
let dates = [];
for (let i = 1; i <= 31; i++) {
  dates.push({ id: i, date: i });
}

//Create month
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
months = months.map((month) => {
  return { id: month, month };
});

//Create year
let years = [];

for (let i = 2021; i >= 1905; i--) {
  years.push(i);
}
years = years.map((year) => {
  return { id: year, year };
});

export { dates, months, years };
