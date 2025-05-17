import Instagram from '@/public/svg/booth/instagram.svg';
import Location from '@/public/svg/booth/location.svg';
import Watch from '@/public/svg/booth/watch.svg';
import Link from 'next/link';

export function BoothInfo() {
  const boothInfoList = [
    {
      icon: <Instagram />,
      label: 'insta',
      value: '@likelion_yonsei',
    },
    {
      icon: <Location />,
      label: 'location',
      value: '백양로 n번 부스',
    },
    {
      icon: <Watch />,
      label: 'time',
      value: '10:00 ~ 18:00',
    },
  ];
  return (
    <section className='w-80 min-h-80 h-auto px-6 py-8 flex flex-col gap-6 bg-white border border-light200 rounded-[20px] shadow-muted-foreground'>
      <div className='w-full h-auto flex flex-col items-start gap-1'>
        {/* instagram info */}
        <Link
          href={`https://www.instagram.com/${boothInfoList[0].value}`}
          className='flex items-center gap-1 cursor-pointer'
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
      <p className='text-label-l leading-[24px] text-black000 whitespace-pre-line'>
        부스 소개 내용을 적습니다,부스 소개 내용을 적습니다,부스 소개 내용을
        적습니다,부스 소개 내용을 적습니다,부스 소개 내용을 적습니다,부스 소개
        내용을 적습니다,부스 소개 내용을 적습니다,부스 소개 내용을 적습니다,부스
        소개 내용을 적습니다,
      </p>
    </section>
  );
}
