import type { TimeZone } from '../types/timeZone';
import './TimeZoneRow.css';

interface TimeZoneRowProps {
  timeZones: TimeZone[];
  getTimeInTimeZone: (timeZoneName: string) => string;
  getDateInTimeZone: (timeZoneName: string) => string;
  getTimeZoneOffset: (timeZoneName: string) => string;
  onRemoveTimeZone: (timeZoneId: string) => void;
  canRemove: boolean;
}

export const TimeZoneRow: React.FC<TimeZoneRowProps> = ({
  timeZones,
  getTimeInTimeZone,
  getDateInTimeZone,
  getTimeZoneOffset,
  onRemoveTimeZone,
  canRemove,
}) => {
  if (timeZones.length === 0) {
    return null;
  }

  return (
    <div className="timezone-row-container">
      <h2 className="timezone-row-title">Time Zones</h2>
      <div className="timezone-row">
        {timeZones.map((timeZone) => (
          <div key={timeZone.id} className="timezone-row-item">
            <div className="timezone-row-header">
              <div className="timezone-row-location">
                <h3 className="timezone-row-city">{timeZone.city}</h3>
                <p className="timezone-row-country">{timeZone.country}</p>
              </div>
              {canRemove && (
                <button
                  className="timezone-row-remove"
                  onClick={() => onRemoveTimeZone(timeZone.id)}
                  aria-label={`Remove ${timeZone.city} from world clock`}
                  title={`Remove ${timeZone.city}`}
                >
                  ×
                </button>
              )}
            </div>
            
            <div className="timezone-row-time">
              <div className="timezone-row-time-display">
                {getTimeInTimeZone(timeZone.name)}
              </div>
              <div className="timezone-row-date-display">
                {getDateInTimeZone(timeZone.name)}
              </div>
            </div>
            
            <div className="timezone-row-info">
              <span className="timezone-row-offset">
                {getTimeZoneOffset(timeZone.name)}
              </span>
              <span className="timezone-row-abbreviation">
                {timeZone.abbreviation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};