// Simple test script to count unique countries
const { availableTimeZones } = require('./src/data/timeZones.ts');

const countries = new Set();
availableTimeZones.forEach(tz => {
  countries.add(tz.country);
});

console.log('Total number of unique countries:', countries.size);
console.log('Sample countries:');
const sortedCountries = Array.from(countries).sort().slice(0, 10);
sortedCountries.forEach(country => console.log(' -', country));
if (countries.size > 10) {
  console.log('... and', countries.size - 10, 'more');
}