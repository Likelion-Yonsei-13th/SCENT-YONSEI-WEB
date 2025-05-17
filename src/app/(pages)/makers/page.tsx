import TopBar from '@/app/_common/components/top-bar';
import { MAKERS_INFO } from '@/app/_common/constants/makers-info';
import { MakersInfo } from '@/app/_common/interfaces/makers.interface';
import LionLogo from '@/public/svg/lion-logo.svg';
import LikelionBrandlogo from '@/public/svg/likelion-brandlogo.svg';
import Link from 'next/link';
import UnderBar from '@/app/_common/components/underbar';

export default function MakersPage() {
  return (
    <div className='relative main-background w-full min-h-screen flex-col'>
      <TopBar title='만든이들' bgClassName='backdrop-blur-[4px] bg-white/20' />
      <main className='pt-14 pb-20 z-10 w-full h-full flex-1 flex flex-col items-center overflow-y-auto scrollbar-hide'>
        {/* main logo section */}
        <section className='py-16 w-full h-full flex flex-col items-center gap-4 text-white'>
          <div className='pt-[37.13px] pb-[49.95px]'>
            <LionLogo />
          </div>
          <LikelionBrandlogo />
          <p className='text-display-m text-white'>멋쟁이사자처럼 연세 13기</p>
          <p className='text-headlint-l'>05.01 ~ 05.23</p>
        </section>

        {/* main content section - plan/design, frontend, backend */}
        <section className='flex flex-col items-center gap-10'>
          {MAKERS_INFO.map(({ title, info }: MakersInfo) => (
            <div key={title} className='flex flex-col items-center gap-10'>
              <h2 className='px-2 py-1 w-[125px] h-[36px] flex items-center justify-center text-center bg-white/80 shadow-[0px_0px_4px_0px_rgba(27,165,225,0.5)] backdrop-blur-[40px] rounded-[20px] text-point text-display-s'>
                {title}
              </h2>
              <div className='grid grid-cols-2 gap-15'>
                {info.map(({ id, major, name }) => (
                  <div
                    key={id}
                    className='flex flex-col items-center gap-1 text-white'
                  >
                    <p className='text-label-s'>{major}</p>
                    <p className='text-headline-l'>{name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <div className='pt-[100px] flex justify-center items-center gap-[12px] flex-col'>
          <p className='text-body-s text-white text-600'>
            이용 후기를 남겨주세요!
          </p>
          <Link href='/review'>
            <button className='px-[16px] py-[10px] text-point text-[14px] leading-[24px] font-[700] rounded-[100px] border border-[#DFF4FF] bg-white shadow-[0_0_8px_0_rgba(27,165,225,0.5)]'>
              후기 남기기
            </button>
          </Link>
        </div>

        <div className='pt-[36px] flex justify-center items-center gap-[12px] flex-col'>
          <p className='text-body-s text-white text-600'>
            멋쟁이들이 궁금하다면?
          </p>
          <Link
            href='https://www.instagram.com/likelion_yonsei/'
            target='_blank'
          >
            <button className='px-[16px] py-[10px] text-point text-[14px] leading-[24px] font-[700] rounded-[100px] border border-[#DFF4FF] bg-white shadow-[0_0_8px_0_rgba(27,165,225,0.5)]'>
              인스타그램 바로가기
            </button>
          </Link>
        </div>
      </main>
      <footer className='flex items-center justify-center'>
        <UnderBar />
      </footer>
    </div>
  );
}
