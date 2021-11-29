//Create date
let date = [];
for (let i = 1; i <= 31; i++) {
  date.push({ id: i, date: i });
}

//Create month
let month = [
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
month = month.map((month) => {
  return { id: month, month };
});

//Create year
let year = [];

for (let i = 2021; i >= 1905; i--) {
  year.push(i);
}
year = year.map((year) => {
  return { id: year, year };
});

export { date, month, year };
