'use client';

import React, { useRef, useState } from 'react';

type Props = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
};

export default function ImageModal({ images, currentIndex, onClose }: Props) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(currentIndex);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    // 슬라이드 감지
    if (deltaX > 50) {
      setIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    } else if (deltaX < -50) {
      setIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }

    touchStartX.current = null;
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center'
    >
      <div
        className='relative max-w-[90%] max-h-[90%]'
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[index]}
          alt={`공지 이미지 ${index + 1}`}
          className='rounded-md max-w-full max-h-full object-contain'
        />

        {/* 닫기 버튼 */}
        {/* <button
          className='absolute top-2 right-2 text-white text-3xl bg-black/50 rounded-full w-9 h-9 flex items-center justify-center'
          onClick={onClose}
        >
          ×
        </button>  */}
      </div>
    </div>
  );
}
