const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Finance", start: 1989, end: 2010 },
  { name: "Company Five", category: "Retail", start: 2009, end: 2014 },
  { name: "Company Six", category: "Technology", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [22, 44, 55, 33, 16, 5, 21, 61, 70, 13, 15, 45, 25, 64, 32];
//     FOREACH METHOD

/* using for loop

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}
        using function
companies.forEach(function (company) {
  console.log(company.start);
  console.log(company.end);
});

ages.forEach(function (age) {
  console.log(age);
});

       using arrow function
companies.forEach((company) => console.log(company.category));*/

//         FILTER METHOD

/*     using for loop

let canDrive = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrive.push(ages[i]);
  }
}
       using arrow function
const canDrive = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});
console.log(canDrive);

       using arrow function

const canDrive = ages.filter((age) => age >= 21);

console.log(canDrive);

      filter in retails companies

const retailsCompanies = companies.filter(function (company) {
  if (company.category === "Retail") {
    return true;
  }
});
console.log(retailsCompanies);

const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);
console.log(retailCompanies);

const eightiesCompanies = companies.filter(
  (company) => company.start > 1980 && company.start < 1990
);
console.log(eightiesCompanies);

const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(lastedTenYears);*/

//        MAP METHOD

/*
const companyNames = companies.map(function (company) {
  return company.name;
});

const textMap = companies.map(function (company) {
  return `${company.name} [${company.start}-${company.end}]`;
});

const textMap = companies.map(
  (company) => `${company.name} [${company.start}-${company.end}]`
);

const agesSquare = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

console.log(agesSquare);
console.log(agesTwoTimes);
*/

//       SORT

// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);
