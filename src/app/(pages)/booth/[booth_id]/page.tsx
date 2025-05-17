// export const revalidate = 60;

import { TopBar } from '@/app/_common/components/top-bar';
import { ImgCarousel } from '../_components/booth-detail/img-carousel';
import { BoothInfo } from '../_components/booth-detail/booth-info';
import { BoothLocation } from '../_components/booth-detail/booth-location';
import { MenuList } from '../_components/booth-detail/menu-list';
import { ServerPrefetcher } from '@/app/_common/providers/server-prefetcher';
import { getBoothDetail } from '@/app/_common/apis/booth.api';
interface BoothDetailPageProps {
  params: {
    booth_id: string;
  };
}
export default async function BoothDetailPage({
  params,
}: BoothDetailPageProps) {
  const { booth_id } = await params;
  //   const boothDetail = await getBoothDetail(booth_id, { category: 'booth' });

  return (
    <ServerPrefetcher
      queries={[
        {
          // category 임시. 추후 쿼리파라미터 로직 추가할예정
          queryKey: ['boothDetail', booth_id],
          queryFn: () => getBoothDetail(booth_id, { category: 'booth' }),
        },
      ]}
    >
      <div className='relative w-full h-full flex flex-col'>
        <TopBar title='부스명' bgClassName='backdrop-blur-md bg-white/20' />
        <main className='px-6 pt-37 pb-18 w-full h-full flex flex-col items-center gap-5 overflow-y-auto scrollbar-hide scroll-smooth'>
          <ImgCarousel />
          <BoothInfo />
          <BoothLocation />
          <MenuList />
        </main>
      </div>
    </ServerPrefetcher>
  );
}
