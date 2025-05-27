'use client';
import Image from 'next/image';
import Link from 'next/link';

export const ShowInfo = ({
  showId,
  title,
  photo,
}: {
  showId: number;
  title: string;
  photo?: string;
}) => {
  return (
    <Link href={`/festival/${showId}`}>
      <div className='flex flex-col items-center justify-center gap-2.5'>
        <div className='relative size-[68px] border-1 border-white000 rounded-full overflow-hidden flex items-center justify-center'>
          {photo ? (
            <img
              src={photo}
              alt={title}
              className='object-contain size-[68px]'
            />
          ) : (
            <div className='size-full bg-[#D9D9D9] rounded-full' />
          )}
        </div>
        <div className='text-center flex flex-col gap-0.5'>
          <p className='text-label-s font-normal text-white000'>
            {title.slice(0, 6)}
          </p>
          <p className='text-headline-l !font-semibold text-white000 max-w-20'>
            {title.slice(0, 7)}
            {title.length > 7 && '...'}
          </p>
        </div>
      </div>
    </Link>
  );
};
