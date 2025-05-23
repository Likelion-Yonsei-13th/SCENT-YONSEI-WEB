'use client';
import { useMemo } from 'react';
import { useDayTabQueryState } from '../../_hooks/use-day-tab-query-state';
import { type ShowData } from '../../_hooks/use-live-show';
import { timeTable } from '../../_constants/time-table';

export const Calendar = ({ day2, day3, day4 }: ShowData) => {
  const { currentDay } = useDayTabQueryState();
  const currentLocation = "언기도"

  const shows = useMemo(() => {
    if (currentDay === '2') return day2;
    if (currentDay === '3') return day3;
    return day4;
  }, [currentDay, day2, day3, day4]);

  const time = timeTable[currentLocation]!;

  return <div className='rounded-[20px] bg-white000 py-3 relative w-full h-fit'>
    <div className='h-fit w-full flex flex-col items-center gap-[116px]'>
      <TimeLine time='10:00' />
      <TimeLine time='10:15' />
      <TimeLine time='10:30' />
      <TimeLine time='10:45' />
      <TimeLine time='11:00' />
      <TimeLine time='11:15' />
      <TimeLine time='11:30' />
      <TimeLine time='11:45' />
      <TimeLine time='12:00' />
      <TimeLine time='12:15' />
      <TimeLine time='12:30' />
      <TimeLine time='12:45' />
      <TimeLine time='13:00' />
      <TimeLine time='13:15' />
      <TimeLine time='13:30' />
      <TimeLine time='13:45' />
      <TimeLine time='14:00' />
      <TimeLine time='14:15' />
      <TimeLine time='14:30' />
      <TimeLine time='14:45' />
      <TimeLine time='15:00' />
      <TimeLine time='15:15' />
      <TimeLine time='15:30' />
      <TimeLine time='15:45' />
      <TimeLine time='16:00' />
    </div>
  </div>;
};


const TimeLine = ({time}: {time: string}) => {
  return (
    <div className='relative w-full'>
      <hr className='w-full text-gray-200' />
      <div className='text-label-s text-gray500 absolute left-1.5 top-1'>{time}</div>
    </div>
  )
}
