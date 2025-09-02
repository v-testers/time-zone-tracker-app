import { getRepresentativeTimeZonesByCountry } from '../data/timeZones';
import './StationaryTimeZoneRow.css';

interface StationaryTimeZoneRowProps {
  getTimeInTimeZone: (timeZoneName: string) => string;
  getDateInTimeZone: (timeZoneName: string) => string;
  getTimeZoneOffset: (timeZoneName: string) => string;
}

export const StationaryTimeZoneRow: React.FC<StationaryTimeZoneRowProps> = ({
  getTimeInTimeZone,
  getDateInTimeZone,
  getTimeZoneOffset,
}) => {
  const representativeTimeZones = getRepresentativeTimeZonesByCountry();

  return (
    <div className="stationary-timezone-row-container">
      <h2 className="stationary-timezone-row-title">Global Time Zones (One per Country)</h2>
      <div className="stationary-timezone-row">
        {representativeTimeZones.map((timeZone) => (
          <div key={timeZone.id} className="stationary-timezone-row-item">
            <div className="stationary-timezone-row-header">
              <div className="stationary-timezone-row-location">
                <h3 className="stationary-timezone-row-city">{timeZone.city}</h3>
                <p className="stationary-timezone-row-country">{timeZone.country}</p>
              </div>
            </div>
            
            <div className="stationary-timezone-row-time">
              <div className="stationary-timezone-row-time-display">
                {getTimeInTimeZone(timeZone.name)}
              </div>
              <div className="stationary-timezone-row-date-display">
                {getDateInTimeZone(timeZone.name)}
              </div>
            </div>
            
            <div className="stationary-timezone-row-info">
              <span className="stationary-timezone-row-offset">
                {getTimeZoneOffset(timeZone.name)}
              </span>
              <span className="stationary-timezone-row-abbreviation">
                {timeZone.abbreviation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};