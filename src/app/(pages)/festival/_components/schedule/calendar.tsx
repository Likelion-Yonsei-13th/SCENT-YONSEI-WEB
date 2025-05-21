'use client';
import { useMemo } from 'react';
import { useDayTabQueryState } from '../../_hooks/use-day-tab-query-state';
import { type ShowData } from '../../_hooks/use-live-show';

export const Calendar = ({ day2, day3, day4 }: ShowData) => {
  const { currentDay } = useDayTabQueryState();

  const shows = useMemo(() => {
    if (currentDay === '2') return day2;
    if (currentDay === '3') return day3;
    return day4;
  }, [currentDay, day2, day3, day4]);

  return <div>{shows.map(show => show.title)}</div>;
};
