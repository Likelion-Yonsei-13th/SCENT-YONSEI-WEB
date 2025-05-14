import { TeamInfo } from './team-info';

export const LiveTeamDisplay = () => {
  return (
    <div className='w-full shrink-0 flex items-center justify-center px-6 h-[176px] '>
      <div className='size-full flex flex-col items-center justify-center relative rounded-full bg-gradient-to-r from-[rgba(196,228,255,0.50)] from-[14.21%] to-[rgba(108,180,239,0.50)] to-[84.39%] backdrop-blur-[2.5px]'>
        <div className='z-1 flex items-center justify-center gap-[30px]'>
          <TeamInfo />
          <TeamInfo />
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[calc(100%-6px)] rounded-full border-[0.5px] border-solid border-[#C2DBFF] backdrop-blur-[2.5px]' />
      </div>
    </div>
  );
};
