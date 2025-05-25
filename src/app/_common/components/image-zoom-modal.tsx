'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { XIcon } from 'lucide-react';

type Props = {
  image: string;
  onClose: () => void;
};

export default function ImageZoomModal({ image, onClose }: Props) {
  const backdropRef = useRef<HTMLDivElement>(null);

  // 모달이 열렸을 때 배경 스크롤 방지
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

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
      <div className='relative w-[90%] h-[80vh]'>
        {image && (
          <Image
            src={image}
            alt='공지 이미지'
            fill
            sizes='50vw'
            className='rounded-md min-w-full min-h-full'
          />
        )}
        <button
          className='z-10 absolute top-2 right-2 text-point size-10 rounded-full bg-white/50 cursor-pointer'
          onClick={onClose}
        >
          <XIcon className='size-10' />
        </button>
      </div>
    </div>
  );
}
