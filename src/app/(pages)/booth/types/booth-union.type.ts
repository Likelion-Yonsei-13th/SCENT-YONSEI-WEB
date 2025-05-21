import { Booth } from '@/app/_common/interfaces/booth.interface';

export const days = ['1', '2', '3'] as const;
export type Day = (typeof days)[number];

export const sections = ['백양로', '한글탑', '국제캠'] as const;
export type Section = (typeof sections)[number];

export const categories = ['전체', '부스', '푸드트럭'] as const;
export type Category = (typeof categories)[number];

export const searches = [''] as const;
export type SearchType = (typeof searches)[number];

export type BoothListKey = `${Day}-${Section}-${Category}`; // 조합 키

export type BoothListRecord = Record<BoothListKey, Booth>; // Record 형태
