'use client';

import Link from 'next/link';
import { InstagramIcon } from '../../_assets/icons';

export const InstagramInfoBadge = ({ instagram }: { instagram: string }) => {
  return (
    <Link href={`https://www.instagram.com/${instagram}`} target='_blank'>
      <div className='flex items-center gap-1'>
        <InstagramIcon />
        <p className='text-label-s text-gray600 font-normal leading-[18px] px-2 py-0.5 bg-gray300 rounded-full'>
          @{instagram}
        </p>
      </div>
    </Link>
  );
};
