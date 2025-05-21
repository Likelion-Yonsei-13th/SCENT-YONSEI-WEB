import { useDayTabQueryState } from './use-day-tab-query-state';
import { isTimeBetween } from '../_utils/time';
import { type ShowListItem } from '../_repository/festival.types';

export interface ShowData {
  day2: ShowListItem[];
  day3: ShowListItem[];
  day4: ShowListItem[];
}

export const useLiveShow = ({ showData }: { showData: ShowData }) => {
  const { currentDay } = useDayTabQueryState();
  const currentDayShow = showData[`day${currentDay}` as keyof typeof showData];

  const currentTime = '17:15';
  // const currentTime = getCurrentTime();

  const liveShows = currentDayShow.filter(show =>
    isTimeBetween(show.start_at, show.finish_at, currentTime),
  );

  const checkIsLiveShow = (showId: ShowListItem['showId']) => {
    return liveShows.some(show => show.showId === showId);
  };

  return { liveShows, checkIsLiveShow };
};
