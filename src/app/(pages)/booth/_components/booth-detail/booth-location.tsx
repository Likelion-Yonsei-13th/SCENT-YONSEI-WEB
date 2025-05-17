import Image from 'next/image';

export function BoothLocation() {
  return (
    <section className='px-4 py-3 size-80 flex flex-col items-start bg-white000 rounded-[20px]'>
      <h1 className='px-2 py-3 text-display-s text-black000'>위치</h1>
      <div className='relative w-full h-60 flex rounded-[10px] bg-gray300 flex-shrink-0'>
        <Image
          src='/img/booth/hangeul-section.jpg'
          alt='백양로'
          fill
          className='object-cover px-1 py-4'
        />
      </div>
    </section>
  );
}
