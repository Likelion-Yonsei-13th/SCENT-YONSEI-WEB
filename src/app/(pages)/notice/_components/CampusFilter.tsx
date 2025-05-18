'use client';

import { useState } from 'react';

const campuses = ['블루런', '국제캠', '신촌캠'];

export default function CampusFilter() {
  const [selected, setSelected] = useState('블루런');
  return (
    <div className='flex gap-[12px] mt-[150px] ml-[25.5px] w-[324px] h-[44px]'>
      {campuses.map(campus => (
        <button
          key={campus}
          onClick={() => setSelected(campus)}
          className={`w-[100px] rounded-[100px] px-[16px] pt-[10px] pb-[10px]  transition
            ${
              selected === campus
                ? 'bg-[rgba(7,98,173,1)] text-[rgba(255,255,255,1)]'
                : 'bg-[rgba(223,244,255,1)] text-[rgba(25,29,31,1)]'
            }`}
        >
          {campus}
        </button>
      ))}
    </div>
  );
}
