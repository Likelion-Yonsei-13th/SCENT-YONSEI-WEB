import { TopBar } from '@/app/_common/components/top-bar';
import LionLogo from '@/public/svg/lion-logo.svg';
import LikelionBrandlogo from '@/public/svg/likelion-brandlogo.svg';
import Footer from '@/app/_common/components/underbar';
import Review from './_components/review';
import Liked from './_components/liked';
import Image from 'next/image';

export default function ReviewPage() {
  return (
    <div className='relative main-background w-full min-h-screen flex-col'>
      <TopBar
        title='후기 남기기'
        bgClassName='backdrop-blur-[4px] bg-white/20'
      />
      <main className='pt-14 pb-20 z-10 w-full h-full flex-1 flex flex-col items-center overflow-y-auto scrollbar-hide'>
        {/* main logo section */}
        <section className='pt-8 w-full h-full flex flex-col items-center gap-4 text-white'>
          <div className='pt-[37.13px] pb-6'>
            <LionLogo />
          </div>
          <Image
            src='/img/likelion-logo.png'
            alt='likelion-brandlogo'
            width={100}
            height={100}
            className='flex-shrink-0 w-[231.585px] h-[18px]'
          />
          <div className='flex justify-center pb-[44px]'>
            <p className='text-display-m text-white'>
              멋쟁이사자처럼 연세 13기
            </p>
          </div>
        </section>

        <div>
          <p className='pb-12 flex justify-center text-label-s text-white text-center'>
            멋쟁이사자처럼이 올해 새롭게 대동제 웹사이트를 제작했습니다.
            <br />
            따뜻한 후기를 남겨주시면
            <br />
            웹사이트 개선과 멋쟁이들에게 큰 도움이 됩니다 :)
          </p>
        </div>

        <Review />
        <Liked />

        <div className='dancing-icon'>
          <div className='hearts-animations'>
            <div className='heart'> </div>
            <div className='heart'> </div>
            <div className='heart'> </div>
          </div>
        </div>
      </main>
      <footer className='flex items-center justify-center'>
        <Footer />
      </footer>
    </div>
  );
}
