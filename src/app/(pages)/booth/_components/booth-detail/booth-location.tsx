'use client';

import { type Section } from '@/app/(pages)/booth/types/booth-union.type';
import ImageZoomModal from '@/app/_common/components/image-zoom-modal';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export function BoothLocation({ section }: { section: Section }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageUrl = {
    백양로: '/img/booth/baekyang-section.jpg',
    한글탑: '/img/booth/hangeul-section.jpg',
    국제캠: '/img/booth/global-section.jpg',
  };
  return (
    <section className='px-4 py-3 w-full h-auto flex flex-col items-start bg-white000 rounded-[20px] aspect-square'>
      <h1 className='px-2 py-3 text-display-s text-black000'>위치</h1>
      <div className='relative w-full h-[calc(100%-48px)] flex rounded-[10px] aspect-[5/4]'>
        <img
          src={imageUrl[section] ?? ''}
          alt={section}
          className='object-cover rounded-[10px] w-full h-full'
        />
        <span
          className='absolute bottom-2 right-2 bg-white000 rounded-full p-2 shadow-xl cursor-pointer hover:bg-light400 border border-point transition-all duration-300'
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className='size-6 text-point' />
        </span>
      </div>
      {isModalOpen && imageUrl[section] && (
        <ImageZoomModal
          image={imageUrl[section]}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}
