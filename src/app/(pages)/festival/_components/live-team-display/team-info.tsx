export const TeamInfo = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2.5'>
      <div className='size-[68px] bg-white rounded-full' />
      <div className='text-center flex flex-col gap-0.5'>
        <p className='text-label-s font-normal text-white000'>학생 공연</p>
        <p className='text-label-l font-semibold text-white000 max-w-20 text-wrap'>
          공연팀
        </p>
      </div>
    </div>
  );
};
