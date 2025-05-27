'use client';
import ImageZoomModal from '@/app/_common/components/image-zoom-modal';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function MapSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='relative w-full h-auto aspect-[316/221] rounded-[10px] bg-gray-300 overflow-hidden'>
      <img
        src='/img/location/fullmap.png'
        alt='전체 지도'
        className='object-cover w-full h-full'
      />
      <span
        className='absolute bottom-2 right-2 bg-white000 rounded-full p-2 shadow-xl cursor-pointer hover:bg-light400 border border-point transition-all duration-300'
        onClick={() => setIsModalOpen(true)}
      >
        <Plus className='size-6 text-point' />
      </span>
      {isModalOpen && (
        <ImageZoomModal
          image='/img/location/fullmap.png'
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
