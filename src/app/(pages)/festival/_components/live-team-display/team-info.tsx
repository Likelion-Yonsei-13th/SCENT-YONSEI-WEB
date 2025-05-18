'use client';
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
        <div className='size-[68px] bg-white rounded-full' />
        <div className='text-center flex flex-col gap-0.5'>
          <p className='text-label-s font-normal text-white000'>{title}</p>
          <p className='text-label-l font-semibold text-white000 max-w-20 text-wrap'>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};
