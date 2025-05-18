import { TopBar } from '@/app/_common/components/top-bar';
import { LiveShowDisplay } from './_components/live-team-display';
import { Schedule } from './_components/schedule';
import { festivalRepository } from './_repository/festival.repository';

const FestivalPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ tab: string; location: string }>;
}) => {
  const { tab: initialTab } = await searchParams;
  const tab = initialTab || '1';

  const result = await festivalRepository.getShowList(tab);

  return (
    <div className='flex flex-col gap-[52px] size-full items-center justify-start pt-[148px]'>
      <TopBar title='공연' bgClassName='backdrop-blur-md bg-white/20' />
      <LiveShowDisplay shows={result.data.live} />
      <Schedule />
    </div>
  );
};

export default FestivalPage;
