import Link from 'next/link';

export function BoothCard() {
  const booth_id = 1;

  return (
    <Link href={`/booth/${booth_id}`}>
      <li className='w-full h-auto flex flex-col rounded-[10px] shadow-md'>
        {/* Image 드갈부분 */}
        <div className='w-full h-[130px] bg-gray400 rounded-t-[10px]'></div>
        <div className='px-[10px] py-3 w-full h-auto flex flex-col items-start gap-1 bg-white rounded-b-[10px]'>
          <h1 className='text-headline-l text-black000'>번호 부스명</h1>
          <p className='text-label-s text-point'>단체명</p>
        </div>
      </li>
    </Link>
  );
}
