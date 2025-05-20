import Link from 'next/link';
import { BoothMainInfo } from '@/app/_common/interfaces/booth.interface';
import Image from 'next/image';
export function BoothCard({ booth }: { booth: BoothMainInfo }) {
  return (
    <Link href={`/booth/${booth.boothId}`}>
      <li className='w-full h-auto flex flex-col rounded-[10px] shadow-md'>
        <div className='w-full h-[130px] bg-gray400 rounded-t-[10px]'>
          <Image
            src={booth.photo ?? ''}
            alt={booth.name}
            fill
            className='object-contain rounded-t-[10px]'
          />
        </div>
        <div className='px-[10px] py-3 w-full h-auto flex flex-col items-start gap-1 bg-white rounded-b-[10px]'>
          <h1 className='text-headline-l text-black000'>{booth.name}</h1>
          <p className='text-label-s text-point'>{booth.organization}</p>
        </div>
      </li>
    </Link>
  );
}
