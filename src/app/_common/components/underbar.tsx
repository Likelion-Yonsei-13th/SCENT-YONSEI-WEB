import LionLogoBlue from '@/public/svg/lion-logo-blue.svg';
import GithubLogo from '@/public/svg/github-logo.svg';
import InstaLogo from '@/public/svg/insta-logo.svg';

export default function UnderBar() {
  return (
    <div className='w-full h-auto bg-light200 flex justify-center items-center flex-col'>
      <p className='pt-[20px] pb-[16px] text-label-s text-main200 text-center'>
        연세대학교 멋쟁이사자처럼 13기 Likelion_Yonsei 13th
      </p>
      <div className='flex justify-center flex-row gap-[24px]'>
        <LionLogoBlue />
        <GithubLogo />
        <InstaLogo />
      </div>
      <p className='pt-[16px] pb-[32px] text-label-s text-main200 text-center'>
        Copyrightⓒ2025. Likelion_Yonsei. All rights reserved.
      </p>
    </div>
  );
}
