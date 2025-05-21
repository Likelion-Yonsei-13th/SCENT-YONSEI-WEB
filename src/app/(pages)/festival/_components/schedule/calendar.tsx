'use client';
import { useMemo } from 'react';
import { useDayTabQueryState } from '../../_hooks/use-day-tab-query-state';
import { type LiveShow } from '../../_repository/festival.types';

interface CalendarProps {
  day1: LiveShow[];
  day2: LiveShow[];
  day3: LiveShow[];
}

export const Calendar = ({ day1, day2, day3 }: CalendarProps) => {
  const { currentDay } = useDayTabQueryState();

  const shows = useMemo(() => {
    if (currentDay === '1') return day1;
    if (currentDay === '2') return day2;
    return day3;
  }, [currentDay, day1, day2, day3]);

  return <div>{shows.map(show => show.title)}</div>;
};
