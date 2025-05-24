'use client';

import Image from 'next/image';
import React, { useRef } from 'react';

type Props = {
  image: string;
  onClose: () => void;
};

export default function ImageZoomModal({ image, onClose }: Props) {
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center'
    >
      <div className='relative w-1/2 h-[90%]'>
        {image && (
          <Image
            src={image}
            alt='공지 이미지'
            fill
            className='rounded-md max-w-full max-h-full object-contain'
          />
        )}
      </div>
    </div>
  );
}
