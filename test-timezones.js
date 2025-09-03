// Test script to verify the representative time zones include the required abbreviations
import { getRepresentativeTimeZonesByCountry } from './src/data/timeZones.ts';

const representativeTimeZones = getRepresentativeTimeZonesByCountry();

// Filter for the required abbreviations
const requiredAbbreviations = ['PST', 'CST', 'MST', 'EST', 'AST'];
const foundTimeZones = representativeTimeZones.filter(tz => 
  requiredAbbreviations.includes(tz.abbreviation)
);

console.log('Required time zones found:');
foundTimeZones.forEach(tz => {
  console.log(`${tz.abbreviation} - ${tz.city}, ${tz.country} (${tz.name})`);
});

console.log(`\nTotal representative time zones: ${representativeTimeZones.length}`);
console.log(`Required time zones found: ${foundTimeZones.length}/5`);

// Check if all required abbreviations are present
const foundAbbreviations = foundTimeZones.map(tz => tz.abbreviation);
const missingAbbreviations = requiredAbbreviations.filter(abbr => 
  !foundAbbreviations.includes(abbr)
);

if (missingAbbreviations.length === 0) {
  console.log('✅ All required time zones (PST, CST, MST, EST, AST) are included!');
} else {
  console.log(`❌ Missing time zones: ${missingAbbreviations.join(', ')}`);
}