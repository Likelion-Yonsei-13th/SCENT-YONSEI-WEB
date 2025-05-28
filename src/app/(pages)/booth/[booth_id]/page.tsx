import { TopBar } from '@/app/_common/components/top-bar';
import { ImgCarousel } from '../_components/booth-detail/img-carousel';
import { BoothInfo } from '../_components/booth-detail/booth-info';
import { BoothLocation } from '../_components/booth-detail/booth-location';
import { MenuList } from '../_components/booth-detail/menu-list';

import { getBoothDetail } from '@/app/_common/apis/booth.api';
import { getBoothList } from '@/app/_common/apis/booth.api';
import {
  type BoothListKey,
  type BoothListRecord,
  categories,
  days,
  foodTruckTypes,
  sections,
} from '../types/booth-union.type';

export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
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

  const allIds = Object.values(record).flatMap(data => {
    const boothIds = data?.booth?.map(b => b.boothId.toString()) ?? [];
    return [...boothIds];
  });

  const uniqueIds = Array.from(new Set(allIds));

  return uniqueIds.map(booth_id => ({ booth_id }));
}

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
      <main className='px-6 pt-30 pb-18 w-full h-full flex flex-col items-center gap-5 overflow-y-auto scrollbar-hide scroll-smooth'>
        <ImgCarousel
          imagesUrl={boothDetail.photos}
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
