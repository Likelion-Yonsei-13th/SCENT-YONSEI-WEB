'use client';

import { BoothCard } from './booth-card';
import { useBoothQueryParams } from '../../_hooks/use-booth-query';
import {
  BoothListKey,
  BoothListRecord,
  foodTruckTypes,
} from '../../types/booth-union.type';
import { parseAsStringLiteral, useQueryState } from 'nuqs';
import { foodTruckTypeList } from '../../_constants/booth-page.constants';
import { cn } from '@/app/_core/utils/cn';

export function FoodTruckList({
  record,
}: {
  record: Partial<BoothListRecord>;
}) {
  const { day, section, category, search } = useBoothQueryParams();
  const [foodTruckType, setFoodTruckType] = useQueryState(
    'foodTruckType',
    parseAsStringLiteral(foodTruckTypes).withDefault('전체'),
  );

  const key: BoothListKey = `${day}-${section}-${category}-${foodTruckType}`;
  const foodtruckData = record[key];

  const filteredFoodTruckData =
    foodtruckData?.foodTruck?.filter(foodtruck => {
      if (search && search === '') return true;

      const keyword = search.toLowerCase();
      return (
        foodtruck.name?.toLowerCase().includes(keyword) ??
        foodtruck.foodType?.toLowerCase().includes(keyword) ??
        foodtruck.menuNames.some(menu => menu.toLowerCase().includes(keyword))
      );
    }) ?? [];

  if (category === '부스' || filteredFoodTruckData.length === 0) return null;

  return (
    <section className='mt-4 mb-12 px-[22px] py-[26px] w-full h-auto flex flex-col gap-6 bg-white000 border border-light200 rounded-[20px] shadow-md'>
      <nav className='flex items-center justify-start gap-6'>
        {foodTruckTypeList.map(type => (
          <button
            key={type.value}
            className={cn(
              'transition-all duration-300',
              ' text-gray500 cursor-pointer',
              foodTruckType === type.value && 'text-point',
            )}
            onClick={() => setFoodTruckType(type.value)}
          >
            {type.label}
          </button>
        ))}
      </nav>
      {filteredFoodTruckData.map(foodtruck => (
        <div
          key={foodtruck.foodTruckId}
          className='w-full h-auto flex flex-col gap-[18px]'
        >
          <div className='w-full h-auto flex items-center justify-between'>
            <span className='flex flex-col justify-start gap-1'>
              <h4 className='text-label-s text-gray500'>
                {foodtruck.foodType}
              </h4>
              <h2 className='text-headline-l text-black000'>
                {foodtruck.name}
              </h2>
            </span>
            <span className='h-full flex items-end'>
              {foodtruck.menuNames?.map((menu, index) => (
                <span key={menu} className='text-label-l text-gray600'>
                  {menu}
                  {index !== foodtruck.menuNames.length - 1 ? ', ' : ''}
                </span>
              ))}
            </span>
          </div>
          <div className='w-full h-[1px] bg-gray300' />
        </div>
      ))}
    </section>
  );
}
