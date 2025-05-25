'use client';

type CampusFilterProps = {
  selected: string;
  onSelect: (campus: string) => void;
};

const campuses = ['전체', '블루런', '국제캠', '신촌캠'];

export default function CampusFilter({
  selected,
  onSelect,
}: CampusFilterProps) {
  return (
    <div className='flex justify-center gap-2 w-full'>
      {campuses.map(campus => {
        const isSelected =
          campus === '전체' ? selected === '' : selected === campus;

        return (
          <button
            key={campus}
            onClick={() => onSelect(campus === '전체' ? '' : campus)}
            className={`
              w-[109px] h-[42px] px-3 py-2 rounded-full transition
              text-sm leading-[18px] font-[Pretendard]
              truncate text-center mt-[42px]
              ${
                isSelected
                  ? 'font-semibold bg-[rgba(7,98,173,1)] text-white'
                  : 'font-normal bg-white text-[rgba(25,29,31,1)] border border-[rgba(223,244,255,1)]'
              }
            `}
          >
            {campus}
          </button>
        );
      })}
    </div>
  );
}
