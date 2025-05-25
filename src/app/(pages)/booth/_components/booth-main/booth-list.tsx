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

  const sortedBoothData = filteredBoothData.sort((a, b) => {
    const aHasPhoto = a.photo && a.photo.length > 0;
    const bHasPhoto = b.photo && b.photo.length > 0;

    if (aHasPhoto && !bHasPhoto) return -1;
    if (!aHasPhoto && bHasPhoto) return 1;
    return 0;
  });

  if (category === '푸드트럭' || sortedBoothData.length === 0) return null;
  return (
    <section
      className={cn('pt-4 w-full grid grid-cols-2 gap-x-3 gap-y-4', 'pb-12')}
    >
      {sortedBoothData.map(booth => (
        <BoothCard key={booth.boothId} booth={booth} />
      ))}
    </section>
  );
}
