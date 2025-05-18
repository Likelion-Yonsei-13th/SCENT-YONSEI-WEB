import Image from 'next/image';
import { festivalRepository } from '../_repository/festival.repository';
import {
  CalendarIcon,
  InstagramIcon,
  LocationIcon,
  TimeIcon,
} from '../_assets/icons';
import { InstagramInfoBadge } from './_components/instagram-info-badge';

const FestivalShowPage = async ({
  params,
}: {
  params: Promise<{ show_id: string }>;
}) => {
  const { show_id } = await params;

  const result = await festivalRepository.getShowDetail(show_id);

  return (
    <div className='flex flex-col gap-5 size-full items-center justify-start pt-10 px-6'>
      <div
        // src={data.data.photo || ''}
        // alt='festival-show-image'
        // width={400}
        // height={400}
        className='rounded-[10px] w-full h-auto bg-gray300 aspect-square'
      />
      <div className='rounded-[20px] bg-white000 px-6 py-8 flex flex-col gap-6 w-full'>
        <div className='flex flex-col gap-1'>
          <InstagramInfoBadge instagram={result.data.instagram} />
          <div className='flex items-center gap-1'>
            <CalendarIcon />
            <p className='text-label-l text-gray600 !font-semibold leading-[18px]'>
              DAY2 28일
            </p>
          </div>
          <div className='flex items-center gap-1'>
            <TimeIcon />
            <p className='text-label-l text-gray600 !font-semibold leading-[18px]'>
              {result.data.start_at} ~ {result.data.finish_at}
            </p>
          </div>
          <div className='flex items-center gap-1'>
            <LocationIcon />
            <p className='text-label-l text-gray600 !font-semibold leading-[18px]'>
              {result.data.section}
            </p>
          </div>
        </div>
        <hr className='border-gray300' />
        <p className='text-label-l text-black000 font-normal leading-[18px]'>
          {result.data.description}
        </p>
      </div>
    </div>
  );
};

export default FestivalShowPage;
