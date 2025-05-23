import { Deco1, Deco2, Deco3 } from '../_assets/deco';

export const MainBackgroundDeco = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
      <div className='absolute top-[150px] -left-1 w-fit h-fit z-20'>
        <Deco1 />
      </div>
      <div className='absolute top-[125px] right-4 w-fit h-fit'>
        <Deco2 />
      </div>
      <div className='absolute top-[270px] right-6 w-fit h-fit z-20'>
        <Deco3 />
      </div>
    </div>
  );
};
