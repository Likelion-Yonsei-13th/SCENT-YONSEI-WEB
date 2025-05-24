'use client';

import Link from 'next/link';
import Image from 'next/image';
import TopMenuSheet from './top-menu-sheet';
import { cn } from '@/app/_core/utils/cn';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function TopBar({
  title,
  bgClassName,
  hasDepth = false,
}: {
  title: string;
  bgClassName?: string;
  hasDepth?: boolean;
}) {
  const router = useRouter();

  return (
    <nav className='fixed top-0 z-20 w-full max-w-[500px] mx-auto'>
      <div className={cn('absolute inset-0 z-[-1]', bgClassName)} />

      <div className='px-6 py-5 w-full flex justify-between items-center text-white'>
        {!hasDepth ? (
          <TopMenuSheet />
        ) : (
          <div className='w-20 flex items-center justify-start'>
            <ChevronLeft onClick={() => router.back()} />
          </div>
        )}
        <p className='text-display-m'>{title}</p>
        <Link
          href='/'
          className='cursor-pointer w-20 flex items-center justify-end'
        >
          <Image
            src={'/img/scent-logo.jpg'}
            alt='scent-logo'
            width={41}
            height={32}
            priority
          />
        </Link>
      </div>
    </nav>
  );
}
