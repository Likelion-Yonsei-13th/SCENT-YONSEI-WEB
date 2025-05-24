'use client';

import React, { useRef, useState } from 'react';

type Props = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function ImageModal({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    const threshold = 50;

    if (deltaX > threshold && currentIndex > 0) {
      onPrev();
    } else if (deltaX < -threshold && currentIndex < images.length - 1) {
      onNext();
    }

    setTouchStartX(null);
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
        {images.length > 0 && images[currentIndex] && (
          <img
            src={images[currentIndex]}
            alt={`공지 이미지 ${currentIndex + 1}`}
            className='rounded-md max-w-full max-h-full object-contain'
          />
        )}

        {/* 닫기 버튼
        <button
          className='absolute top-2 right-2 text-white text-3xl bg-black/50 rounded-full w-9 h-9 flex items-center justify-center'
          onClick={onClose}
        >
          ×
        </button> */}
      </div>
    </div>
  );
}
