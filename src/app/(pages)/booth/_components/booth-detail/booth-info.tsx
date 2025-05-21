import Instagram from '@/public/svg/booth/instagram.svg';
import Location from '@/public/svg/booth/location.svg';
import Watch from '@/public/svg/booth/watch.svg';
import Link from 'next/link';
import { BoothDetail } from '@/app/_common/interfaces/booth.interface';
import { FileText } from 'lucide-react';

export function BoothInfo({ boothDetail }: { boothDetail: BoothDetail }) {
  const boothInfoList = [
    {
      icon: <Instagram />,
      label: 'insta',
      value: boothDetail.instagram ?? '@yonsei_studentcouncil',
    },
    {
      icon: <Location />,
      label: 'location',
      value: `${boothDetail.section} ${boothDetail.location}번 부스`,
    },
    {
      icon: <Watch />,
      label: 'time',
      value: '17:00 ~ 23:00',
    },
  ];
  return (
    <section className='w-full h-auto px-6 py-8 flex flex-col gap-6 bg-white border border-light200 rounded-[20px] shadow-muted-foreground aspect-square'>
      <div className='w-full h-auto flex flex-col items-start gap-1'>
        {/* instagram info */}
        <Link
          href={`https://www.instagram.com/${boothInfoList[0].value.split('@')[1]}`}
          className='flex items-center gap-1 cursor-pointer'
          target='_blank'
        >
          <span className='size-5 flex items-center justify-center'>
            <Instagram />
          </span>
          <p className='px-2 py-1 text-gray600 text-label-s bg-gray300 rounded-full'>
            {boothInfoList[0].value}
          </p>
        </Link>

        {/* location info */}
        <div className='flex items-center gap-1 cursor-pointer'>
          <span className='size-5 flex items-center justify-center'>
            <Location />
          </span>
          <p className='text-label-l font-bold text-gray600'>
            {boothInfoList[1].value}
          </p>
        </div>

        {/* time info */}
        <div className='flex items-center gap-1 cursor-pointer'>
          <span className='size-5 flex items-center justify-center'>
            <Watch />
          </span>
          <p className='text-label-l text-gray600'>{boothInfoList[2].value}</p>
        </div>
      </div>
      <div className='w-full h-[1px] bg-gray300' />

      {/* booth introduce info */}

      {boothDetail.description ? (
        <p className='text-label-l leading-[24px] text-black000 whitespace-pre-line'>
          {boothDetail.description}
        </p>
      ) : (
        <div className='h-full w-full flex flex-col items-center justify-center gap-2'>
          <FileText className='size-10 text-gray500' />
          <span className='text-label-l text-gray500'>
            부스 소개글이 존재하지 않습니다.
          </span>
        </div>
      )}
    </section>
  );
}
