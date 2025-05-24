import { TopBar } from '@/app/_common/components/top-bar';
import { ImgCarousel } from '../_components/booth-detail/img-carousel';
import { BoothInfo } from '../_components/booth-detail/booth-info';
import { BoothLocation } from '../_components/booth-detail/booth-location';
import { MenuList } from '../_components/booth-detail/menu-list';

import { getBoothDetail } from '@/app/_common/apis/booth.api';

export const revalidate = 3600;

export const dynamicParams = true;

export default async function BoothDetailPage({
  params,
}: {
  params: Promise<{ booth_id: string }>;
}) {
  const { booth_id } = await params;
  const boothDetail = await getBoothDetail(booth_id, { category: '부스' });

  return (
    <div className='relative w-full h-full flex flex-col'>
      <TopBar
        hasDepth={true}
        title={boothDetail.name}
        bgClassName='backdrop-blur-md bg-white/20'
      />
      <main className='px-6 pt-37 pb-18 w-full h-full flex flex-col items-center gap-5 overflow-y-auto scrollbar-hide scroll-smooth'>
        <ImgCarousel
          imagesUrl={[]}
          boothName={boothDetail.name}
          organizationName={boothDetail.organization}
        />
        <BoothInfo boothDetail={boothDetail} />
        <BoothLocation section={boothDetail.section} />
        <MenuList menuList={boothDetail.menu} />
      </main>
    </div>
  );
}
