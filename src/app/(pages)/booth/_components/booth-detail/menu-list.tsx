import Image from 'next/image';
import { Menu } from '@/app/_common/interfaces/booth.interface';
import { Utensils } from 'lucide-react';

export function MenuList({ menuList }: { menuList: Menu[] | undefined }) {
  return (
    <section className='px-6 py-[26px] w-full h-auto flex flex-col gap-[18px] bg-white000 rounded-[20px]'>
      {menuList?.map((menu, index) => (
        <div key={index} className='flex flex-col gap-[18px]'>
          <div className='w-full flex items-center justify-between'>
            <div className='flex-[80%] flex justify-start items-center gap-3'>
              <Image
                src={menu.menu_photo ?? ''}
                alt='백양로'
                width={52}
                height={52}
                className='w-13 h-13 object-cover rounded-xl bg-gray100'
              />
              <span className='text-headline-l text-black000'>
                {menu.menu_name}
              </span>
            </div>
            <span className='flex-[20%] text-end text-label-l text-black000'>
              {menu.price}원
            </span>
          </div>
          {index !== menuList.length - 1 && (
            <div className='h-[1px] w-full bg-gray300' />
          )}
        </div>
      ))}
      {menuList?.length === 0 && (
        <div className='flex flex-col items-center justify-center gap-2'>
          <Utensils className='size-10 text-gray500' />
          <p className='text-label-l text-gray500'>
            소개된 메뉴가 존재하지 않습니다.
          </p>
        </div>
      )}
    </section>
  );
}
