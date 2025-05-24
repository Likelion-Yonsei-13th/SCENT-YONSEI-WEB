'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/_core/components/sheet';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
import { sheetLink } from '../constants/sheet-link.constants';

export default function TopMenuSheet() {
  return (
    <Sheet>
      <SheetTrigger className='w-20 flex items-center justify-start'>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent side='left' className='w-[80%]'>
        <div
          className='w-full h-full '
          style={{
            backgroundImage: `url(${'/img/top-menu-background.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <SheetHeader className='pt-30 pl-3 flex flex-col'>
            <SheetTitle className='bg-opacity-100 hidden' />
            <SheetDescription className='pl-2'>
              {sheetLink.map(link => (
                <span key={link.href} className='w-full flex flex-col'>
                  <Link
                    href={link.href}
                    className='pl-2 py-4 text-display-m text-point'
                  >
                    {link.label}
                  </Link>
                  <span className='w-full h-[1px] bg-point'></span>
                </span>
              ))}
            </SheetDescription>
          </SheetHeader>
        </div>
      </SheetContent>
    </Sheet>
  );
}
