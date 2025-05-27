'use client';

import { sectionList } from '@/app/(pages)/booth/_constants/booth-page.constants';
import { cn } from '@/app/_core/utils/cn';
import Image from 'next/image';
import { sections } from '../../types/booth-union.type';
import { parseAsStringLiteral, useQueryState } from 'nuqs';
import { useEffect, useState, useMemo } from 'react';
import ImageZoomModal from '@/app/_common/components/image-zoom-modal';
import { Plus } from 'lucide-react';
import { useBoothQueryParams } from '../../_hooks/use-booth-query';

export function BoothSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { day } = useBoothQueryParams();
  const [sectionState, setSectionState] = useQueryState(
    'section',
    parseAsStringLiteral(sections).withDefault('백양로'),
  );
  // day에 따라 섹션 리스트 필터링
  const filteredSectionList = useMemo(() => {
    if (day === '2') {
      return sectionList.filter(section => section.value === '국제캠');
    } else if (day === '3' || day === '4') {
      return sectionList.filter(section => section.value !== '국제캠');
    }
    return sectionList;
  }, [day]);

  const imageUrl = useMemo(() => {
    if (sectionState === '백양로') {
      return '/img/booth/baekyang-section.jpg';
    } else if (sectionState === '한글탑') {
      return '/img/booth/hangeul-section.jpg';
    } else if (sectionState === '국제캠') {
      return '/img/booth/global-section.jpg';
    }
    return null;
  }, [sectionState]);

  useEffect(() => {
    const isCurrentSectionValid = filteredSectionList.some(
      section => section.value === sectionState,
    );

    if (!isCurrentSectionValid && filteredSectionList.length > 0) {
      setSectionState(filteredSectionList[0].value);
    }
  }, [day, filteredSectionList, sectionState, setSectionState]);

  return (
    <section className='px-3 pt-4 pb-3 w-full h-auto flex flex-col gap-4 bg-white rounded-[20px] flex-shrink-0 '>
      <span className='flex items-center justify-around text-display-s'>
        {filteredSectionList.map(section => (
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
          <img
            src={imageUrl ?? ''}
            alt='백양로'
            sizes='100vw'
            className='object-cover rounded-[10px] w-full h-auto aspect-[159/127]'
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
