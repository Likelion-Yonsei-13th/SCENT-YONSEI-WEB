'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/app/_core/components/carousel';
import Image from 'next/image';
import * as React from 'react';

export function ImgCarousel({
  imagesUrl,
  boothName,
  organizationName,
}: {
  imagesUrl: string[] | undefined;
  boothName: string;
  organizationName?: string;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className='relative w-full'>
      <CarouselContent className='rounded-[20px]'>
        {/* 이미지가 있는 경우 이미지 표시 */}
        {imagesUrl?.map((url, index) => (
          <CarouselItem key={index}>
            <div className='relative w-full h-auto flex aspect-[3/4] items-center justify-center p-6 bg-gray200 rounded-[20px]'>
              {url && (
                <Image
                  src={url}
                  alt={`booth-image-${index}`}
                  fill
                  sizes='100vw'
                  className='object-contain rounded-[20px]'
                />
              )}
            </div>
          </CarouselItem>
        ))}

        {/* 이미지가 없는 경우 대체 이미지 표시 */}
        {imagesUrl?.length === 0 && (
          <CarouselItem>
            <div className='relative w-full h-auto flex aspect-[3/4] items-center justify-center p-6 bg-gray500 rounded-[20px]'>
              <Image
                src={'/img/booth/main-image.jpg'}
                alt={`not-found-image`}
                fill
                className='object-contain rounded-[20px]'
              />
            </div>
          </CarouselItem>
        )}
      </CarouselContent>
      {/* booth name, organization name */}
      <span className='z-20 absolute bottom-8 left-10 pr-6 h-auto flex flex-col items-start gap-1 bg-inherit text-white000'>
        <h2 className='text-display-m line-clamp-1'>{boothName}</h2>
        <p className='text-label-l line-clamp-1'>{organizationName}</p>
      </span>
      {/* 그라데이션 효과 */}
      <div className='z-10 absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-b-[20px] pointer-events-none'></div>
      {/* current, total slide count */}
      {imagesUrl && imagesUrl.length > 0 && (
        <div className='absolute top-5 right-5 px-4 py-2 flex-center bg-white/70 rounded-[20px]'>
          <p className='text-gray600 text-label-l'>
            {current} / {count}
          </p>
        </div>
      )}
    </Carousel>
  );
}
