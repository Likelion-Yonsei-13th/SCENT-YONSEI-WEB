export const revalidate = 360;

import { TabDay } from './_components/booth-main/tab-day';
import { BoothSection } from './_components/booth-main/booth-section';
import { TabBooth } from './_components/booth-main/tab-booth';
import { SearchBar } from './_components/booth-main/search-bar';
import { BoothList } from './_components/booth-main/booth-list';
import {
  type BoothListKey,
  type BoothListRecord,
  categories,
  days,
  foodTruckTypes,
  sections,
} from './types/booth-union.type';
import { getBoothList } from '@/app/_common/apis/booth.api';
import { FoodTruckList } from './_components/booth-main/foodtruck-list';
import { Suspense } from 'react';
import { TopBar } from '@/app/_common/components/top-bar';

export default async function BoothPage() {
  const record: Partial<BoothListRecord> = {};

  // 모든 조합 부스 데이터 Promise 객체 생성
  await Promise.all(
    days.flatMap(day =>
      sections.flatMap(section =>
        categories.flatMap(category =>
          foodTruckTypes.map(async foodType => {
            const key: BoothListKey = `${day}-${section}-${category}-${foodType}`;
            const data = await getBoothList({
              day,
              section,
              category,
              search: '',
              foodType,
            });
            record[key] = data;
          }),
        ),
      ),
    ),
  );
  return (
    <div
      id='booth-page'
      className='relative w-full h-full flex flex-col items-center'
    >
      <TopBar title='부스' bgClassName='backdrop-blur-md bg-white/20' />
      <main className='px-6 pt-28 w-full flex flex-col overflow-y-auto scrollbar-hide scroll-smooth'>
        <Suspense fallback={<></>}>
          <TabDay />
          <BoothSection />
          <TabBooth />
          <SearchBar />
          <BoothList record={record} />
          <FoodTruckList record={record} />
        </Suspense>
      </main>
    </div>
  );
}
