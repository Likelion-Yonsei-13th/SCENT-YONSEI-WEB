import { Category, Day, Section } from '../types/booth-union.type';

export const dayList: { label: string; value: Day }[] = [
  {
    label: 'DAY1 28일',
    value: '28',
  },
  {
    label: 'DAY2 29일',
    value: '29',
  },
  {
    label: 'DAY3 30일',
    value: '30',
  },
];

export const sectionList: { label: string; value: Section }[] = [
  {
    label: '백양로',
    value: 'baekyang',
  },
  {
    label: '한글탑',
    value: 'hangeul',
  },
  {
    label: '국제캠',
    value: 'global',
  },
];

export const categoryList: { label: string; value: Category }[] = [
  {
    label: '전체',
    value: 'all',
  },
  {
    label: '부스',
    value: 'booth',
  },
  {
    label: '푸드트럭',
    value: 'foodtruck',
  },
];
