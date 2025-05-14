'use client';

import { useTabQueryState } from '@/app/(pages)/festival/_hooks/use-tab-query-state';
import { tabs } from '../../constants/tabs';
import { cn } from '@/app/_core/utils/cn';

const tabButtonClassName =
  'text-label-s font-normal rounded-full py-2.5 px-4 shadow-[0px_0px_8px_0px_rgba(27,165,225,0.50)]';
const activeTabButtonClassName =
  'text-white000 font-semibold bg-point border-1 border-point';
const inactiveTabButtonClassName =
  'text-black000 font-normal bg-white000 border-1 border-light200';

export const Tabs = () => {
  const { currentTab, handleTabChange } = useTabQueryState();

  return (
    <div className='flex justify-center gap-3 items-center text-label-l w-full'>
      {tabs.map(tab => (
        <button
          key={tab.value}
          onClick={() => handleTabChange(tab.value)}
          className={cn(
            tabButtonClassName,
            currentTab === tab.value && activeTabButtonClassName,
            currentTab !== tab.value && inactiveTabButtonClassName,
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
