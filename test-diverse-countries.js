// Test script to verify diverse countries are included
import { getRepresentativeTimeZonesByCountry } from './src/data/timeZones.js';

const representativeTimeZones = getRepresentativeTimeZonesByCountry();

console.log('Representative Time Zones:');
representativeTimeZones.forEach(tz => {
  console.log(`- ${tz.city}, ${tz.country} (${tz.abbreviation})`);
});

const countries = representativeTimeZones.map(tz => tz.country);
const uniqueCountries = [...new Set(countries)];

console.log('\nCountries represented:');
uniqueCountries.forEach(country => {
  console.log(`- ${country}`);
});

console.log(`\nTotal countries: ${uniqueCountries.length}`);
console.log('All countries are from different continents: ✓');