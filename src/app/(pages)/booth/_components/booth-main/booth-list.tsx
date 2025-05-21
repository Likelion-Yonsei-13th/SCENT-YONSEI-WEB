'use client';

import { BoothCard } from './booth-card';
import { useBoothQueryParams } from '../../_hooks/use-booth-query';
import { BoothListKey, BoothListRecord } from '../../types/booth-union.type';

export function BoothList({ record }: { record: Partial<BoothListRecord> }) {
  const { day, section, category, search } = useBoothQueryParams();

  const key: BoothListKey = `${day}-${section}-${category}`;
  const boothData = record[key];

  const filteredBoothData =
    boothData?.booth?.filter(booth => {
      if (search && search === '') return true;

      const keyword = search.toLowerCase();
      return (
        booth.name?.toLowerCase().includes(keyword) ||
        booth.organization?.toLowerCase().includes(keyword)
      );
    }) ?? [];

  return (
    <section className='pt-4 pb-12 w-full grid grid-cols-2 gap-x-3 gap-y-4'>
      {filteredBoothData.map(booth => (
        <BoothCard key={booth.boothId} booth={booth} />
      ))}
    </section>
  );
}
