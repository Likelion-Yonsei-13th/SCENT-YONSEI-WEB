'use client';

import { BoothCard } from './booth-card';
import { useBoothQueryParams } from '../../_hooks/use-booth-query';
import { BoothListKey, BoothListRecord } from '../../types/booth-union.type';
import { cn } from '@/app/_core/utils/cn';

export function BoothList({ record }: { record: Partial<BoothListRecord> }) {
  const { day, section, category, search, foodType } = useBoothQueryParams();

  const key: BoothListKey = `${day}-${section}-${category}-${foodType}`;
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

  if (category === '푸드트럭' || filteredBoothData.length === 0) return null;
  return (
    <section
      className={cn(
        'pt-4 w-full grid grid-cols-2 gap-x-3 gap-y-4',
        category === '부스' && 'pb-12',
      )}
    >
      {filteredBoothData.map(booth => (
        <BoothCard key={booth.boothId} booth={booth} />
      ))}
    </section>
  );
}
