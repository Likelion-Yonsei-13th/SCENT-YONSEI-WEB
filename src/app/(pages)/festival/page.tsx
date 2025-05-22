import { TopBar } from '@/app/_common/components/top-bar';
import { LiveShowDisplay } from './_components/live-team-display';
import { Schedule } from './_components/schedule';
import { festivalRepository } from './_repository/festival.repository';
import { MainBackgroundDeco } from './_components/main-background-deco';
const FestivalPage = async () => {
  const { day2, day3, day4 } = await festivalRepository.getAllShowList();
  return (
    <div className='flex flex-col gap-[52px] size-full items-center justify-start pt-[148px] relative'>
      <TopBar title='공연' bgClassName='backdrop-blur-md bg-white/20' />
      <LiveShowDisplay showData={{ day2, day3, day4 }} />
      <Schedule />
      <MainBackgroundDeco />
    </div>
  );
};

export default FestivalPage;
