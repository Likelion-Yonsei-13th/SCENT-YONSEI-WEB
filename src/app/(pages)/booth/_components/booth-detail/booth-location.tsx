import Image from 'next/image';
import { type Section } from '@/app/(pages)/booth/types/booth-union.type';

export function BoothLocation({ section }: { section: Section }) {
  const imageUrl = {
    백양로: '/img/booth/baekyang-section.jpg',
    한글탑: '/img/booth/hangeul-section.jpg',
    국제캠: '/img/booth/global-section.jpg',
  };
  return (
    <section className='px-4 py-3 w-full h-auto flex flex-col items-start bg-white000 rounded-[20px] aspect-square'>
      <h1 className='px-2 py-3 text-display-s text-black000'>위치</h1>
      <div className='relative w-full h-[calc(100%-48px)] flex rounded-[10px] aspect-[5/4]'>
        <Image
          src={imageUrl[section] ?? ''}
          alt={section}
          fill
          sizes='100vw'
          className='object-cover rounded-[10px]'
          priority
        />
      </div>
    </section>
  );
}
