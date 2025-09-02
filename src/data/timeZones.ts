import type { TimeZone } from '../types/timeZone';

export const availableTimeZones: TimeZone[] = [
  // Major cities worldwide
  { id: 'america-new_york', name: 'America/New_York', city: 'New York', country: 'United States', offset: 'UTC-5', abbreviation: 'EST' },
  { id: 'america-los_angeles', name: 'America/Los_Angeles', city: 'Los Angeles', country: 'United States', offset: 'UTC-8', abbreviation: 'PST' },
  { id: 'america-chicago', name: 'America/Chicago', city: 'Chicago', country: 'United States', offset: 'UTC-6', abbreviation: 'CST' },
  { id: 'america-denver', name: 'America/Denver', city: 'Denver', country: 'United States', offset: 'UTC-7', abbreviation: 'MST' },
  { id: 'europe-london', name: 'Europe/London', city: 'London', country: 'United Kingdom', offset: 'UTC+0', abbreviation: 'GMT' },
  { id: 'europe-paris', name: 'Europe/Paris', city: 'Paris', country: 'France', offset: 'UTC+1', abbreviation: 'CET' },
  { id: 'europe-berlin', name: 'Europe/Berlin', city: 'Berlin', country: 'Germany', offset: 'UTC+1', abbreviation: 'CET' },
  { id: 'europe-rome', name: 'Europe/Rome', city: 'Rome', country: 'Italy', offset: 'UTC+1', abbreviation: 'CET' },
  { id: 'europe-madrid', name: 'Europe/Madrid', city: 'Madrid', country: 'Spain', offset: 'UTC+1', abbreviation: 'CET' },
  { id: 'asia-tokyo', name: 'Asia/Tokyo', city: 'Tokyo', country: 'Japan', offset: 'UTC+9', abbreviation: 'JST' },
  { id: 'asia-shanghai', name: 'Asia/Shanghai', city: 'Shanghai', country: 'China', offset: 'UTC+8', abbreviation: 'CST' },
  { id: 'asia-hong_kong', name: 'Asia/Hong_Kong', city: 'Hong Kong', country: 'China', offset: 'UTC+8', abbreviation: 'HKT' },
  { id: 'asia-singapore', name: 'Asia/Singapore', city: 'Singapore', country: 'Singapore', offset: 'UTC+8', abbreviation: 'SGT' },
  { id: 'asia-seoul', name: 'Asia/Seoul', city: 'Seoul', country: 'South Korea', offset: 'UTC+9', abbreviation: 'KST' },
  { id: 'asia-mumbai', name: 'Asia/Kolkata', city: 'Mumbai', country: 'India', offset: 'UTC+5:30', abbreviation: 'IST' },
  { id: 'asia-dubai', name: 'Asia/Dubai', city: 'Dubai', country: 'UAE', offset: 'UTC+4', abbreviation: 'GST' },
  { id: 'australia-sydney', name: 'Australia/Sydney', city: 'Sydney', country: 'Australia', offset: 'UTC+10', abbreviation: 'AEST' },
  { id: 'australia-melbourne', name: 'Australia/Melbourne', city: 'Melbourne', country: 'Australia', offset: 'UTC+10', abbreviation: 'AEST' },
  { id: 'pacific-auckland', name: 'Pacific/Auckland', city: 'Auckland', country: 'New Zealand', offset: 'UTC+12', abbreviation: 'NZST' },
  { id: 'america-toronto', name: 'America/Toronto', city: 'Toronto', country: 'Canada', offset: 'UTC-5', abbreviation: 'EST' },
  { id: 'america-vancouver', name: 'America/Vancouver', city: 'Vancouver', country: 'Canada', offset: 'UTC-8', abbreviation: 'PST' },
  { id: 'america-sao_paulo', name: 'America/Sao_Paulo', city: 'São Paulo', country: 'Brazil', offset: 'UTC-3', abbreviation: 'BRT' },
  { id: 'america-mexico_city', name: 'America/Mexico_City', city: 'Mexico City', country: 'Mexico', offset: 'UTC-6', abbreviation: 'CST' },
  { id: 'africa-cairo', name: 'Africa/Cairo', city: 'Cairo', country: 'Egypt', offset: 'UTC+2', abbreviation: 'EET' },
  { id: 'africa-johannesburg', name: 'Africa/Johannesburg', city: 'Johannesburg', country: 'South Africa', offset: 'UTC+2', abbreviation: 'SAST' },
  { id: 'europe-moscow', name: 'Europe/Moscow', city: 'Moscow', country: 'Russia', offset: 'UTC+3', abbreviation: 'MSK' },
  { id: 'europe-stockholm', name: 'Europe/Stockholm', city: 'Stockholm', country: 'Sweden', offset: 'UTC+1', abbreviation: 'CET' },
  { id: 'europe-amsterdam', name: 'Europe/Amsterdam', city: 'Amsterdam', country: 'Netherlands', offset: 'UTC+1', abbreviation: 'CET' },
  { id: 'europe-zurich', name: 'Europe/Zurich', city: 'Zurich', country: 'Switzerland', offset: 'UTC+1', abbreviation: 'CET' },
];

export const defaultTimeZones: TimeZone[] = [
  availableTimeZones.find(tz => tz.id === 'america-new_york')!,
  availableTimeZones.find(tz => tz.id === 'europe-london')!,
  availableTimeZones.find(tz => tz.id === 'asia-tokyo')!,
];