import { LiveTeamDisplay } from './_components/live-team-display';
import { Schedule } from './_components/schedule';

const FestivalPage = () => {
  return (
    <div className='flex flex-col gap-[52px] size-full items-center justify-start'>
      <LiveTeamDisplay />
      <Schedule />
    </div>
  );
};

export default FestivalPage;
