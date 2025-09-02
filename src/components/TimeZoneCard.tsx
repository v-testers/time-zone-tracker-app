import type { TimeZone } from '../types/timeZone';
import './TimeZoneCard.css';

interface TimeZoneCardProps {
  timeZone: TimeZone;
  currentTime: string;
  currentDate: string;
  offset: string;
  onRemove: (timeZoneId: string) => void;
  canRemove: boolean;
}

export const TimeZoneCard: React.FC<TimeZoneCardProps> = ({
  timeZone,
  currentTime,
  currentDate,
  offset,
  onRemove,
  canRemove,
}) => {
  return (
    <div className="timezone-card">
      <div className="timezone-header">
        <div className="timezone-location">
          <h3 className="timezone-city">{timeZone.city}</h3>
          <p className="timezone-country">{timeZone.country}</p>
        </div>
        {canRemove && (
          <button
            className="remove-button"
            onClick={() => onRemove(timeZone.id)}
            aria-label={`Remove ${timeZone.city} from world clock`}
            title={`Remove ${timeZone.city}`}
          >
            ×
          </button>
        )}
      </div>
      
      <div className="timezone-time">
        <div className="time-display">{currentTime}</div>
        <div className="date-display">{currentDate}</div>
      </div>
      
      <div className="timezone-info">
        <span className="timezone-offset">{offset}</span>
        <span className="timezone-abbreviation">{timeZone.abbreviation}</span>
      </div>
    </div>
  );
};