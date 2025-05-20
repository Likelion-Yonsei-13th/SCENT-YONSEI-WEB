import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export function BoothLocation() {
  return (
    <section className='px-4 py-3 w-full h-auto flex flex-col items-start bg-white000 rounded-[20px] aspect-square'>
      <h1 className='px-2 py-3 text-display-s text-black000'>위치</h1>
      <div className='relative w-full h-[calc(100%-48px)] flex rounded-[10px] aspect-[5/4]'>
        <Image
          src='/img/booth/baekyang-section.jpg'
          alt='백양로'
          fill
          sizes='100vw'
          className='object-cover rounded-[10px]'
          priority
        />
      </div>
      {/* <Zoom>
      </Zoom> */}
    </section>
  );
}
