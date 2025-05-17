import TopBar from '@/app/_common/components/top-bar';
import { MAKERS_INFO } from '@/app/_common/constants/makers-info';
import { MakersInfo } from '@/app/_common/interfaces/makers.interface';
import LionLogo from '@/public/svg/lion-logo.svg';
import LikelionBrandlogo from '@/public/svg/likelion-brandlogo.svg';
import UnderBar from '@/app/_common/components/underbar';

export default function ReviewPage() {
  return (
    <div className='relative main-background w-full min-h-screen flex-col'>
      <TopBar
        title='후기 남기기'
        bgClassName='backdrop-blur-[4px] bg-white/20'
      />
      <main className='pt-14 pb-20 z-10 w-full h-full flex-1 flex flex-col items-center overflow-y-auto scrollbar-hide'>
        {/* main logo section */}
        <section className='py-16 w-full h-full flex flex-col items-center gap-4 text-white'>
          <div className='pt-[37.13px] pb-[49.95px]'>
            <LionLogo />
          </div>
          <div>
            <LikelionBrandlogo />
          </div>
          <div className='flex justify-center pb-[44px]'>
            <p className='text-display-m text-white'>
              멋쟁이사자처럼 연세 13기
            </p>
          </div>
        </section>

        <div>
          <p className='flex justify-center text-label-s text-white text-400 text-center'>
            멋쟁이사자처럼이 올해 새롭게 대동제 웹사이트를 제작하였습니다.
            <br />
            따뜻한 후기를 남겨주시면
            <br />
            웹사이트 개선과 멋쟁이들에게 큰 도움이 됩니다 :)
          </p>
        </div>

        <div className='w-[280px] h-[185px] rounded-[20px] mt-[76px] bg-white'>
          입력란
        </div>

        <div className='pt-[30px] pb-[53px]'>
          <button className='px-[16px] py-[10px] text-point text-[14px] leading-[24px] font-[700] rounded-[100px] border border-[#DFF4FF] bg-white shadow-[0_0_8px_0_rgba(27,165,225,0.5)]'>
            제출하기
          </button>
        </div>

        <div>
          <button className='px-2 py-1 w-[99px] h-[68px] text-point text-[14px] leading-[24px] font-[700] rounded-[20px] border border-[#DFF4FF] bg-white shadow-[0_0_8px_0_rgba(27,165,225,0.5)]'>
            응원하기
          </button>
        </div>
      </main>
      <footer className='flex items-center justify-center'>
        <UnderBar />
      </footer>
    </div>
  );
}
