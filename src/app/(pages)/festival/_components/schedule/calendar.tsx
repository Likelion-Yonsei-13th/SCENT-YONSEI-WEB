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

  const rawShows = useMemo(() => {
    if (currentDay === '2') return day2;
    if (currentDay === '3')
      return day3.filter(show => show.section === currentLocation);
    return day4.filter(show => show.section === currentLocation);
  }, [currentDay, day2, day3, day4, currentLocation]);

  const preProcessedShows = React.useMemo(() => {
    const startMinutes = parseTime(timeRange.startTime);
    const endMinutes = parseTime(timeRange.endTime);
    const processedShows: ShowListItem[] = [];

    const sortedShows = [...rawShows].sort(
      (a, b) => parseTime(a.start_at) - parseTime(b.start_at),
    );

    let currentTime = startMinutes;

    for (const show of sortedShows) {
      const showStartMinutes = parseTime(show.start_at);
      const showEndMinutes = parseTime(show.finish_at);

      if (currentTime < showStartMinutes) {
        const dummyShow: ShowListItem = {
          showId: -Math.abs(currentTime),
          title: '',
          start_at: formatTime(currentTime),
          finish_at: formatTime(showStartMinutes),
          section: currentLocation,
          photo: undefined,
        };
        processedShows.push(dummyShow);
      }

      processedShows.push(show);

      currentTime = showEndMinutes;
    }

    if (currentTime < endMinutes) {
      const dummyShow: ShowListItem = {
        showId: -Math.abs(currentTime),
        title: '',
        start_at: formatTime(currentTime),
        finish_at: formatTime(endMinutes),
        section: currentLocation,
        photo: undefined,
      };
      processedShows.push(dummyShow);
    }

    return processedShows;
  }, [rawShows, timeRange, currentLocation]);

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
        shows={preProcessedShows}
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
    <div className='absolute size-full pl-20 flex flex-col top-0 left-0 gap-[0.5px]'>
      <div className='flex gap-2 items-center justify-around h-14 w-full shrink-0'>
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
      <div className='flex flex-col'>
        {shows.map((show, idx) => (
          <TimeBlock key={idx} show={show} />
        ))}
      </div>
    </div>
  );
};

const TimeBlock = ({ show }: { show: ShowListItem }) => {
  const height = React.useMemo(() => {
    const startMinutes = parseTime(show.start_at);
    const endMinutes = parseTime(show.finish_at);

    return ((endMinutes - startMinutes) / 15) * 117.02;
  }, [show]);

  const isDummyShow = show.title === '';

  if (isDummyShow) {
    return <div className='w-full' style={{ height: `${height}px` }} />;
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-[20px] border-1 border-gray100 bg-white shadow-[0px_0px_5px_0px_rgba(209,214,220,0.50)] w-full',
        false &&
          'shadow-[0px_0px_8px_0px_rgba(170,207,248,0.50)] border-light500',
      )}
      style={{ height: `${height}px` }}
    >
      <div className='flex flex-col gap-4 items-center justify-center'>
        <p className='text-headline-m text-black000 !font-semibold'>
          {show.title}
        </p>
        <p className='text-label-s text-main100'>상세 정보</p>
        <div className='flex items-center justify-center gap-2'>
          <p className='text-label-s text-gray500'>{show.start_at}</p>
          <p className='text-label-s text-gray500'>{show.finish_at}</p>
        </div>
      </div>
    </div>
  );
};
