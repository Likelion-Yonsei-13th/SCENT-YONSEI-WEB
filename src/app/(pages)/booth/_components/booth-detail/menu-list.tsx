import Image from 'next/image';

export function MenuList() {
  return (
    <section className='px-6 py-[26px] w-80 h-auto flex flex-col gap-[18px] bg-white000 rounded-[20px]'>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className='flex flex-col gap-[18px]'>
          <div className='flex items-center justify-between'>
            <div className='flex justify-start items-center gap-3'>
              <Image
                src='/img/booth/hangeul-section.jpg'
                alt='백양로'
                width={52}
                height={52}
                className='w-13 h-13 object- rounded-xl bg-gray100'
              />
              <span className='text-headline-l text-black000'>메뉴명</span>
            </div>
            <span className='text-label-l text-black000'>10,000원</span>
          </div>
          {index !== 4 && <div className='h-[1px] w-full bg-gray300' />}
        </div>
      ))}
    </section>
  );
}
