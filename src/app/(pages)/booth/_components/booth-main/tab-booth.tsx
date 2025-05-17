'use client';

import { categoryList } from '@/app/(pages)/booth/_constants/booth-page.constants';
import { cn } from '@/app/_core/utils/cn';
import { categories } from '../../types/booth-union.type';
import { parseAsStringLiteral, useQueryState } from 'nuqs';

export function TabBooth() {
  const [categoryState, setCategoryState] = useQueryState(
    'category',
    parseAsStringLiteral(categories).withDefault('all'),
  );

  return (
    <div className='pt-8 pb-4 w-full flex items-center justify-start gap-3'>
      {categoryList.map(category => (
        <button
          key={category.value}
          className={cn(
            'px-4 py-[10px] rounded-[100px] shadow-md cursor-pointer transition-all duration-300',
            categoryState === category.value
              ? 'bg-point !text-white000 text-label-l'
              : ' bg-white text-black text-label-l',
          )}
          onClick={() => setCategoryState(category.value)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
