'use client';

import { dayList } from '@/app/(pages)/booth/_constants/booth-page.constants';
import { cn } from '@/app/_core/utils/cn';
import { days } from '../../types/booth-union.type';
import { parseAsStringLiteral, useQueryState } from 'nuqs';

export function TabDay() {
  const [dayState, setDayState] = useQueryState(
    'day',
    parseAsStringLiteral(days).withDefault('2'),
  );

  return (
    <div className='flex-shrink-0 min-w-0 pb-8 w-full flex items-center justify-around gap-3'>
      {dayList.map(dayBtn => (
        <button
          key={dayBtn.value}
          className={cn(
            'flex-1 px-3 py-[10px] rounded-full shadow-md cursor-pointer transition-all duration-300 bg-white text-black font-normal text-label-l',
            dayState === dayBtn.value && 'bg-point !text-white000 !font-bold',
            'shadow-[0px_0px_8px_0px_rgba(27,165,225,0.50)]',
          )}
          onClick={() => setDayState(dayBtn.value)}
        >
          {dayBtn.label}
        </button>
      ))}
    </div>
  );
}
