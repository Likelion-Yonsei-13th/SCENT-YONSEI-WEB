'use client';

import { useDayTabQueryState } from '@/app/(pages)/festival/_hooks/use-day-tab-query-state';
import { dayTabs } from '../../constants/tabs';
import { cn } from '@/app/_core/utils/cn';

const tabButtonClassName =
  'text-label-s font-normal rounded-full py-2.5 px-4 shadow-[0px_0px_8px_0px_rgba(27,165,225,0.50)] w-[105px] transition-all duration-300';
const activeTabButtonClassName =
  'text-white000 font-semibold bg-point border-1 border-point';
const inactiveTabButtonClassName =
  'text-black000 font-normal bg-white000 border-1 border-light200';

export const Tabs = () => {
  const { currentDay, handleDayChange } = useDayTabQueryState();

  return (
    <div className='flex justify-around gap-3 items-center text-label-l w-full'>
      {dayTabs.map(tab => (
        <button
          key={tab.value}
          onClick={() => handleDayChange(tab.value)}
          className={cn(
            tabButtonClassName,
            currentDay === tab.value && activeTabButtonClassName,
            currentDay !== tab.value && inactiveTabButtonClassName,
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
