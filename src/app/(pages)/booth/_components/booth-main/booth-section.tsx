'use client';

import { sectionList } from '@/app/(pages)/booth/_constants/booth-page.constants';
import { cn } from '@/app/_core/utils/cn';
import Image from 'next/image';
import { sections } from '../../types/booth-union.type';
import { parseAsStringLiteral, useQueryState } from 'nuqs';

export function BoothSection() {
  const [sectionState, setSectionState] = useQueryState(
    'section',
    parseAsStringLiteral(sections).withDefault('baekyang'),
  );

  return (
    <section className='px-3 pt-4 pb-3 w-full h-auto flex flex-col gap-4 bg-white rounded-[20px] flex-shrink-0'>
      <span className='flex items-center justify-around'>
        {sectionList.map(section => (
          <button
            key={section.value}
            className={cn(
              'transition-all duration-300',
              'text-display-s text-gray500 cursor-pointer',
              sectionState === section.value && 'text-point',
            )}
            onClick={() => setSectionState(section.value)}
          >
            {section.label}
          </button>
        ))}
      </span>
      <div className='relative w-full h-[240px] flex rounded-[10px] bg-gray300'>
        <Image
          src='/img/booth/hangeul-section.jpg'
          alt='백양로'
          fill
          className='object-cover px-1 py-4'
        />
      </div>
    </section>
  );
}
