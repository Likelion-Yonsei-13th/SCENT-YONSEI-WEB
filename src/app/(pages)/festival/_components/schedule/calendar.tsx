'use client';
import React, { useMemo } from 'react';
import { useDayTabQueryState } from '../../_hooks/use-day-tab-query-state';
import { type ShowData } from '../../_hooks/use-live-show';
import { timeTable } from '../../_constants/time-table';
import { type ShowListItem } from '../../_repository/festival.types';
import { formatTime } from '../../_utils/time';
import { parseTime } from '../../_utils/time';
import { cn } from '@/app/_core/utils/cn';

export const Calendar = ({ day2, day3, day4 }: ShowData) => {
  const { currentDay } = useDayTabQueryState();
  const [currentLocation, setCurrentLocation] =
    React.useState<keyof typeof timeTable>('언기도');

  const timeRange = timeTable[currentLocation]!;

  const tabs: (keyof typeof timeTable)[] = React.useMemo(() => {
    if (currentDay === '2') return ['언기도'];
    return ['동문광장', '노천극장'];
  }, [currentDay]);

  const shows = useMemo(() => {
    if (currentDay === '2') return day2;
    if (currentDay === '3') return day3;
    return day4;
  }, [currentDay, day2, day3, day4]);

  const timeLines = React.useMemo(() => {
    const timeLines = [];

    const startMinutes = parseTime(timeRange.startTime);
    const endMinutes = parseTime(timeRange.endTime);

    for (let minutes = startMinutes; minutes <= endMinutes; minutes += 15) {
      timeLines.push(<TimeLine key={minutes} time={formatTime(minutes)} />);
    }

    return timeLines;
  }, [timeRange]);

  React.useEffect(() => {
    if (currentDay === '2') {
      setCurrentLocation('언기도');
    } else {
      setCurrentLocation('동문광장');
    }
  }, [currentDay]);

  return (
    <div className='rounded-[20px] bg-white000 py-3 relative w-full h-fit'>
      <div className='h-fit w-full flex flex-col items-center gap-[116px] py-11'>
        {timeLines}
      </div>
      <TimeBlocks
        shows={shows}
        tabs={tabs}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
    </div>
  );
};

const TimeLine = ({ time }: { time: string }) => {
  return (
    <div className='relative w-full'>
      <hr className='w-full text-gray-200' />
      <div className='text-label-s text-gray500 absolute left-1.5 top-1'>
        {time}
      </div>
    </div>
  );
};

const TimeBlocks = ({
  shows,
  tabs,
  currentLocation,
  setCurrentLocation,
}: {
  shows: ShowListItem[];
  tabs: (keyof typeof timeTable)[];
  currentLocation: keyof typeof timeTable;
  setCurrentLocation: (location: keyof typeof timeTable) => void;
}) => {
  return (
    <div className='absolute size-full pl-20 flex flex-col top-0 left-0'>
      <div className='flex gap-2 items-center justify-around h-14 w-full'>
        {tabs.map(tab => (
          <p
            key={tab}
            className={cn(
              'text-headline-l text-gray500 !font-semibold',
              currentLocation === tab && 'text-point',
            )}
            onClick={() => setCurrentLocation(tab)}
          >
            {timeTable[tab].label}
          </p>
        ))}
      </div>
    </div>
  );
};

const TimeBlock = ({
  startTime,
  endTime,
}: {
  startTime: string;
  endTime: string;
  show: ShowListItem;
}) => {
  return <div></div>;
};
