import { getCurrentDay, getCurrentTime, isTimeBetween } from '../_utils/time';
import { type ShowListItem } from '../_repository/festival.types';
import React from 'react';

export interface ShowData {
  day2: ShowListItem[];
  day3: ShowListItem[];
  day4: ShowListItem[];
}

export const useLiveShow = ({ showData }: { showData: ShowData }) => {
  const [currentTime, setCurrentTime] = React.useState(() => getCurrentTime());
  const currentDay = getCurrentDay();

  const currentDayShow =
    showData[`day${currentDay - 26}` as keyof typeof showData] ?? [];

  const liveShows = currentDayShow.filter(show =>
    isTimeBetween(show.start_at, show.finish_at, currentTime),
  );

  const checkIsLiveShow = (showId: ShowListItem['showId']) => {
    return liveShows.some(show => show.showId === showId);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return { liveShows, checkIsLiveShow, currentTime };
};
