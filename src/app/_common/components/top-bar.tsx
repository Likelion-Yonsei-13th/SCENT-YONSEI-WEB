import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import TopMenuSheet from './top-menu-sheet';
import { cn } from '@/app/_core/utils/cn';

export function TopBar({
  title,
  bgClassName,
}: {
  title: string;
  bgClassName?: string;
}) {
  return (
    <nav className='absolute top-0 z-20 w-full'>
      <div className={cn('absolute inset-0 z-[-1]', bgClassName)} />

      <div className='px-6 pt-16 pb-3 w-full flex justify-between items-center text-white'>
        <TopMenuSheet />
        <p className='text-display-m'>{title}</p>
        <Link href='/' className='cursor-pointer'>
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
