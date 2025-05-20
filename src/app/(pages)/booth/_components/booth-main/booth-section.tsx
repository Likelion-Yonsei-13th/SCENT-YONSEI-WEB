'use client';

import { sectionList } from '@/app/(pages)/booth/_constants/booth-page.constants';
import { cn } from '@/app/_core/utils/cn';
import Image from 'next/image';
import { sections } from '../../types/booth-union.type';
import { parseAsStringLiteral, useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export function BoothSection() {
  const [sectionState, setSectionState] = useQueryState(
    'section',
    parseAsStringLiteral(sections).withDefault('baekyang'),
  );
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (sectionState === 'baekyang') {
      setImageUrl('/img/booth/baekyang-section.jpg');
    } else if (sectionState === 'hangeul') {
      setImageUrl('/img/booth/hangeul-section.jpg');
    } else if (sectionState === 'global') {
      setImageUrl('/img/booth/global-section.jpg');
    }
  }, [sectionState]);

  return (
    <section className='px-3 pt-4 pb-3 w-full h-auto flex flex-col gap-4 bg-white rounded-[20px] flex-shrink-0 '>
      <span className='flex items-center justify-around text-display-s'>
        {sectionList.map(section => (
          <button
            key={section.value}
            className={cn(
              'transition-all duration-300',
              ' text-gray500 cursor-pointer',
              sectionState === section.value && 'text-point',
            )}
            onClick={() => setSectionState(section.value)}
          >
            {section.label}
          </button>
        ))}
      </span>
      <Zoom>
        <div className='relative w-full h-auto flex rounded-[10px] bg-gray300 aspect-[159/127]'>
          {imageUrl !== '' && imageUrl !== null && (
            <Image
              src={imageUrl}
              alt='백양로'
              fill
              sizes='100vw'
              className='object-cover rounded-[10px]'
              priority
            />
          )}
        </div>
      </Zoom>
    </section>
  );
}
