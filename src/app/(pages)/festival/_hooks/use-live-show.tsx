import { useDayTabQueryState } from './use-day-tab-query-state';
import {
  getCurrentDay,
  getCurrentMonth,
  getCurrentTime,
  isTimeBetween,
} from '../_utils/time';
import { type ShowListItem } from '../_repository/festival.types';
import React from 'react';

export interface ShowData {
  day2: ShowListItem[];
  day3: ShowListItem[];
  day4: ShowListItem[];
}

const days = [28, 29, 30];

export const useLiveShow = ({ showData }: { showData: ShowData }) => {
  const { currentDay: currentSelectedDay } = useDayTabQueryState();

  // const currentTime = '17:15';
  const currentMonth = getCurrentMonth();
  const currentDay = getCurrentDay();
  const currentTime = getCurrentTime();

  const currentDayShow = React.useMemo(() => {
    // 자바스크립트는 1월을 0으로 표시함
    if (currentMonth !== 4) return [];
    if (!days.includes(currentDay)) return [];

    return showData[`day${currentSelectedDay}` as keyof typeof showData];
  }, [currentMonth, currentDay, showData, currentSelectedDay]);

  const liveShows = currentDayShow.filter(show =>
    isTimeBetween(show.start_at, show.finish_at, currentTime),
  );

  const checkIsLiveShow = (showId: ShowListItem['showId']) => {
    return liveShows.some(show => show.showId === showId);
  };

  return { liveShows, checkIsLiveShow };
};
