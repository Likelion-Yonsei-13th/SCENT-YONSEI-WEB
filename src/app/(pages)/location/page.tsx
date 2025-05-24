import Image from 'next/image';
import { DropDown } from './_components/dropdown';
import { Suspense } from 'react';
import { TopBar } from '@/app/_common/components/top-bar';

export default function LocationsPage() {
  return (
    <div className='relative main-background w-full min-h-screen flex flex-col'>
      {/* 고정된 TopBar */}
      <TopBar
        title='주요 시설 위치'
        bgClassName='backdrop-blur-md bg-white/20'
      />

      {/* TopBar 아래 컴포넌트들 */}
      <main className='pt-30 pb-6 px-7 w-full flex flex-col scrollbar-hide scroll-smooth space-y-6'>
        {/* 지도 */}
        <div className='relative w-full h-auto aspect-[316/221] rounded-[10px] bg-gray-300 overflow-hidden'>
          <Image
            src='/img/location/fullmap.png'
            alt='전체 지도'
            fill
            className='object-cover'
          />
        </div>

        {/* 주요 위치 컴포넌트 */}
        <Suspense fallback={<></>}>
          <DropDown category='trash' />
          <DropDown category='wheelchair' />
        </Suspense>
      </main>
    </div>
  );
}
