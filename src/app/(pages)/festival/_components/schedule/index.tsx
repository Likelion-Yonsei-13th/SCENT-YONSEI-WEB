import { Calendar } from './calendar';
import { LocationDropdown } from './location-dropdown';
import { Tabs } from './tabs';

export const Schedule = () => {
  return (
    <div className='h-full w-full flex flex-col items-center rounded-t-[30px] bg-gradient-to-b from-[rgba(230,243,255,0.4)] to-[rgba(10,169,233,0)] backdrop-blur-[2.5px] px-3 pt-7'>
      <div className='h-full w-fit flex flex-col gap-6'>
        <Tabs />
        <LocationDropdown />
        <Calendar />
      </div>
    </div>
  );
};
