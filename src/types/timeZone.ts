export interface TimeZone {
  id: string;
  name: string;
  city: string;
  country: string;
  offset: string;
  abbreviation: string;
}

export interface WorldClockState {
  selectedTimeZones: TimeZone[];
  currentTime: Date;
}