import { festivalRepository } from '../_repository/festival.repository';
import { LocationIcon, TimeIcon } from '../_assets/icons';
import { InstagramInfoBadge } from './_components/instagram-info-badge';
import { TopBar } from '@/app/_common/components/top-bar';
import { ImgCarousel } from '../../booth/_components/booth-detail/img-carousel';
import { parseTime } from '../_utils/time';

export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
  const { day2, day3, day4 } = await festivalRepository.getAllShowList();

  return [...day2, ...day3, ...day4].map(show => ({
    show_id: show.showId.toString(),
  }));
}

const FestivalShowPage = async ({
  params,
}: {
  params: Promise<{ show_id: string }>;
}) => {
  const { show_id } = await params;

  const result = await festivalRepository.getShowDetail(show_id);

  console.log('start_at', result.data.start_at);
  console.log('finish_at', result.data.finish_at);

  return (
    <div className='flex flex-col gap-5 size-full items-center justify-start pt-28 px-6'>
      <TopBar
        title={result.data.title}
        bgClassName='backdrop-blur-md bg-white/20'
        hasDepth
      />
      <ImgCarousel
        imagesUrl={[...result.data.photo]}
        boothName={result.data.title}
      />
      <div className='rounded-[20px] bg-white000 px-6 py-8 flex flex-col gap-6 w-full'>
        <div className='flex flex-col gap-1'>
          {result.data.instagram && (
            <InstagramInfoBadge instagram={result.data.instagram} />
          )}
          <div className='flex items-center gap-1'>
            <TimeIcon />
            <p className='text-label-l text-gray600 !font-semibold leading-[18px]'>
              {result.data.start_at} ~ {result.data.finish_at}
            </p>
          </div>
          {result.data.section && (
            <div className='flex items-center gap-1'>
              <LocationIcon />
              <p className='text-label-l text-gray600 !font-semibold leading-[18px]'>
                {result.data.section}
              </p>
            </div>
          )}
        </div>
        <hr className='border-gray300' />
        {result.data.description && (
          <p className='text-label-l text-black000 font-normal leading-[18px] whitespace-pre-line'>
            {result.data.description}
          </p>
        )}
      </div>
      <div className='h-8' />
    </div>
  );
};

export default FestivalShowPage;
