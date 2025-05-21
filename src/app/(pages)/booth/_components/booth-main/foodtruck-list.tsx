// 'use client';

// import { BoothCard } from './booth-card';
// import { useBoothQueryParams } from '../../_hooks/use-booth-query';
// import { BoothListKey, BoothListRecord } from '../../types/booth-union.type';

// export function FoodTruckList({ record }: { record: Partial<BoothListRecord> }) {
//   const { day, section, category, search } = useBoothQueryParams();

//   const key: BoothListKey = `${day}-${section}-${category}`;
//   const foodtruckData = record[key];

//   const filteredBoothData =
//   foodtruckData?.foodTruck?.filter(foodtruck => {
//       if (search && search === '') return true;

//       const keyword = search.toLowerCase();
//       return (
//         foodtruck.name?.toLowerCase().includes(keyword) ||
//         foodtruck.organization?.toLowerCase().includes(keyword)
//       );
//     }) ?? [];

//   return (
//     <section className='pt-4 pb-12 w-full grid grid-cols-2 gap-x-3 gap-y-4'>
//       {filteredBoothData.map(booth => (
//         <BoothCard key={booth.boothId} booth={booth} />
//       ))}
//     </section>
//   );
// }
