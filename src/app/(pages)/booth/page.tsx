export const revalidate = 60;

import { TopBar } from '@/app/_common/components/top-bar';
import { TabDay } from './_components/booth-main/tab-day';
import { BoothSection } from './_components/booth-main/booth-section';
import { TabBooth } from './_components/booth-main/tab-booth';
import { SearchBar } from './_components/booth-main/search-bar';
import { BoothList } from './_components/booth-main/booth-list';
import { getBoothList } from '@/app/_common/apis/booth.api';
import { BoothListParams } from '@/app/_common/interfaces/booth.interface';
import { ServerPrefetcher } from '@/app/_common/providers/server-prefetcher';
const defaultParams: BoothListParams = {
  day: '28',
  section: 'baekyang',
  category: 'all',
  search: '',
};

export default async function BoothPage() {
  // const boothList = await getBoothList(defaultParams);

  return (
    <ServerPrefetcher
      queries={[
        {
          queryKey: ['boothList', defaultParams],
          queryFn: () => getBoothList(defaultParams),
        },
      ]}
    >
      <div
        id='booth-page'
        className='relative w-full h-full flex flex-col items-center'
      >
        <TopBar title='부스' bgClassName='backdrop-blur-md bg-white/20' />
        <main className='px-6 pt-37 w-full flex flex-col overflow-y-auto scrollbar-hide scroll-smooth'>
          <TabDay />
          <BoothSection />
          <TabBooth />
          <SearchBar />
          <BoothList />
        </main>
      </div>
    </ServerPrefetcher>
  );
}
