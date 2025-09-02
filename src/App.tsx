import { useWorldClock } from './hooks/useWorldClock';
import { TimeZoneCard } from './components/TimeZoneCard';
import { TimeZoneSelector } from './components/TimeZoneSelector';
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
        <TimeZoneSelector
          onAddTimeZone={addTimeZone}
          selectedTimeZones={selectedTimeZones}
        />

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
