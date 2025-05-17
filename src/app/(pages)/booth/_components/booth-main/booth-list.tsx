'use client';

import { getBoothList } from '@/app/_common/apis/booth.api';
import { BoothCard } from './booth-card';
import { useQuery } from '@tanstack/react-query';
import { useBoothQueryParams } from '../../_hooks/use-booth-query';
import { useDebounce } from 'use-debounce';
export function BoothList() {
  const { day, section, category, search } = useBoothQueryParams();

  // const { data, isLoading } = useQuery({
  //   queryKey: ['boothList', { day, section, category, search }],
  //   queryFn: () =>
  //     getBoothList({ day, section, category, search }),
  //   staleTime: 1000 * 60 * 60,
  //   placeholderData: previousData => previousData,
  // });

  return (
    <section className='pt-4 pb-12 w-full grid grid-cols-2 gap-x-3 gap-y-4'>
      <BoothCard />
      <BoothCard />
      <BoothCard />
      <BoothCard />
      <BoothCard />
      <BoothCard />
      <BoothCard />
    </section>
  );
}
