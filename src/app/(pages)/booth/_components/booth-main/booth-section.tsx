'use client';

import { sectionList } from '@/app/(pages)/booth/_constants/booth-page.constants';
import { cn } from '@/app/_core/utils/cn';
import Image from 'next/image';
import { sections } from '../../types/booth-union.type';
import { parseAsStringLiteral, useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';
import ImageZoomModal from '@/app/_common/components/image-zoom-modal';
import { Plus } from 'lucide-react';

export function BoothSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sectionState, setSectionState] = useQueryState(
    'section',
    parseAsStringLiteral(sections).withDefault('백양로'),
  );
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (sectionState === '백양로') {
      setImageUrl('/img/booth/baekyang-section.jpg');
    } else if (sectionState === '한글탑') {
      setImageUrl('/img/booth/hangeul-section.jpg');
    } else if (sectionState === '국제캠') {
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
      {imageUrl ? (
        <div className='relative w-full h-auto flex rounded-[10px] bg-gray300 aspect-[159/127]'>
          <Image
            src={imageUrl ?? ''}
            alt='백양로'
            fill
            sizes='100vw'
            className='object-cover rounded-[10px]'
            priority
          />
          <span
            className='absolute bottom-2 right-2 bg-white000 rounded-full p-2 shadow-xl cursor-pointer hover:bg-light400 border border-point transition-all duration-300'
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className='size-6 text-point' />
          </span>
        </div>
      ) : (
        <div className='relative w-full h-auto flex rounded-[10px] bg-gray300 aspect-[159/127]' />
      )}
      {isModalOpen && imageUrl && (
        <ImageZoomModal
          image={imageUrl}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}
