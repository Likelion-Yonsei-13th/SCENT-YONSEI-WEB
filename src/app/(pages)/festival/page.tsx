import { TopBar } from '@/app/_common/components/top-bar';
import { LiveShowDisplay } from './_components/live-team-display';
import { Schedule } from './_components/schedule';
import { festivalRepository } from './_repository/festival.repository';

const FestivalPage = async () => {
  const { day1, day2, day3 } = await festivalRepository.getAllShowList();
  return (
    <div className='flex flex-col gap-[52px] size-full items-center justify-start pt-[148px]'>
      <TopBar title='공연' bgClassName='backdrop-blur-md bg-white/20' />
      <LiveShowDisplay showData={{ day1, day2, day3 }} />
      <Schedule />
    </div>
  );
};

export default FestivalPage;
