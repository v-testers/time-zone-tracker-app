import { useState } from 'react';
import type { TimeZone } from '../types/timeZone';
import { getTimeZonesWithFlags } from '../data/timeZones';
import './TimeZoneSelector.css';

interface TimeZoneSelectorProps {
  onAddTimeZone: (timeZone: TimeZone) => void;
  selectedTimeZones: TimeZone[];
}

export const TimeZoneSelector: React.FC<TimeZoneSelectorProps> = ({
  onAddTimeZone,
  selectedTimeZones,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const availableTimeZones = getTimeZonesWithFlags();
  const availableToAdd = availableTimeZones.filter(
    tz => !selectedTimeZones.some(selected => selected.id === tz.id)
  );

  const filteredTimeZones = availableToAdd.filter(tz =>
    tz.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tz.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTimeZone = (timeZone: TimeZone) => {
    onAddTimeZone(timeZone);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="timezone-selector">
      <button
        className="add-timezone-button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={availableToAdd.length === 0}
      >
        + Add Time Zone
      </button>

      {isOpen && (
        <div className="timezone-dropdown">
          <div className="dropdown-header">
            <input
              type="text"
              placeholder="Search cities or countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              autoFocus
            />
            <button
              className="close-dropdown"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="timezone-list">
            {filteredTimeZones.length > 0 ? (
              filteredTimeZones.map(timeZone => (
                <button
                  key={timeZone.id}
                  className="timezone-option"
                  onClick={() => handleAddTimeZone(timeZone)}
                >
                  <div className="timezone-option-flag">
                    {timeZone.flag}
                  </div>
                  <div className="timezone-option-info">
                    <span className="timezone-option-city">{timeZone.city}</span>
                    <span className="timezone-option-country">{timeZone.country}</span>
                  </div>
                  <span className="timezone-option-offset">{timeZone.offset}</span>
                </button>
              ))
            ) : (
              <div className="no-results">
                {searchTerm ? 'No matching time zones found' : 'All time zones added'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};