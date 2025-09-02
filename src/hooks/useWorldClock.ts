import { useState, useEffect } from 'react';
import type { TimeZone, WorldClockState } from '../types/timeZone';
import { defaultTimeZones } from '../data/timeZones';

export const useWorldClock = () => {
  const [state, setState] = useState<WorldClockState>({
    selectedTimeZones: defaultTimeZones,
    currentTime: new Date(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => ({
        ...prev,
        currentTime: new Date(),
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addTimeZone = (timeZone: TimeZone) => {
    setState(prev => ({
      ...prev,
      selectedTimeZones: [...prev.selectedTimeZones, timeZone],
    }));
  };

  const removeTimeZone = (timeZoneId: string) => {
    setState(prev => ({
      ...prev,
      selectedTimeZones: prev.selectedTimeZones.filter(tz => tz.id !== timeZoneId),
    }));
  };

  const getTimeInTimeZone = (timeZoneName: string): string => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: timeZoneName,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(state.currentTime);
    } catch (error) {
      console.error(`Invalid timezone: ${timeZoneName}`, error);
      return '--:--:--';
    }
  };

  const getDateInTimeZone = (timeZoneName: string): string => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: timeZoneName,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(state.currentTime);
    } catch (error) {
      console.error(`Invalid timezone: ${timeZoneName}`, error);
      return 'Invalid Date';
    }
  };

  const getTimeZoneOffset = (timeZoneName: string): string => {
    try {
      const now = new Date();
      const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
      const targetTime = new Date(utc.toLocaleString('en-US', { timeZone: timeZoneName }));
      const diff = targetTime.getTime() - utc.getTime();
      const hours = Math.floor(Math.abs(diff) / (1000 * 60 * 60));
      const minutes = Math.floor((Math.abs(diff) % (1000 * 60 * 60)) / (1000 * 60));
      const sign = diff >= 0 ? '+' : '-';
      return `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    } catch (error) {
      console.error(`Error calculating offset for ${timeZoneName}:`, error);
      return 'UTC+00:00';
    }
  };

  return {
    selectedTimeZones: state.selectedTimeZones,
    currentTime: state.currentTime,
    addTimeZone,
    removeTimeZone,
    getTimeInTimeZone,
    getDateInTimeZone,
    getTimeZoneOffset,
  };
};