import { useWorldClock } from './hooks/useWorldClock';
import { TimeZoneCard } from './components/TimeZoneCard';
import { TimeZoneSelector } from './components/TimeZoneSelector';
import { TimeZoneRow } from './components/TimeZoneRow';
import { StationaryTimeZoneRow } from './components/StationaryTimeZoneRow';
import './App.css';

function App() {
  const {
    selectedTimeZones,
    addTimeZone,
    removeTimeZone,
    getTimeInTimeZone,
    getDateInTimeZone,
    getTimeZoneOffset,
  } = useWorldClock();

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">World Clock</h1>
        <p className="app-subtitle">Track time across different time zones</p>
      </header>

      <main className="app-main">
        <StationaryTimeZoneRow
          getTimeInTimeZone={getTimeInTimeZone}
          getDateInTimeZone={getDateInTimeZone}
          getTimeZoneOffset={getTimeZoneOffset}
        />

        <TimeZoneSelector
          onAddTimeZone={addTimeZone}
          selectedTimeZones={selectedTimeZones}
        />

        {selectedTimeZones.length > 0 && (
          <TimeZoneRow
            timeZones={selectedTimeZones}
            getTimeInTimeZone={getTimeInTimeZone}
            getDateInTimeZone={getDateInTimeZone}
            getTimeZoneOffset={getTimeZoneOffset}
            onRemoveTimeZone={removeTimeZone}
            canRemove={selectedTimeZones.length > 1}
          />
        )}

        <div className="timezone-grid">
          {selectedTimeZones.map((timeZone) => (
            <TimeZoneCard
              key={timeZone.id}
              timeZone={timeZone}
              currentTime={getTimeInTimeZone(timeZone.name)}
              currentDate={getDateInTimeZone(timeZone.name)}
              offset={getTimeZoneOffset(timeZone.name)}
              onRemove={removeTimeZone}
              canRemove={selectedTimeZones.length > 1}
            />
          ))}
        </div>
      </main>

      <footer className="app-footer">
        <p>Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  );
}

export default App;
