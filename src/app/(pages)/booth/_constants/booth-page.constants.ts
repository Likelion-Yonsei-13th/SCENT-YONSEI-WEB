import {
  Category,
  Day,
  FoodTruckType,
  Section,
} from '../types/booth-union.type';

export const dayList: { label: string; value: Day }[] = [
  {
    label: 'DAY2 28일',
    value: '2',
  },
  {
    label: 'DAY3 29일',
    value: '3',
  },
  {
    label: 'DAY4 30일',
    value: '4',
  },
];

export const sectionList: { label: string; value: Section }[] = [
  {
    label: '백양로',
    value: '백양로',
  },
  {
    label: '한글탑',
    value: '한글탑',
  },
  {
    label: '국제캠',
    value: '국제캠',
  },
];

export const categoryList: { label: string; value: Category }[] = [
  {
    label: '전체',
    value: '전체',
  },
  {
    label: '부스',
    value: '부스',
  },
  {
    label: '푸드트럭',
    value: '푸드트럭',
  },
];

export const foodTruckTypeList: { label: string; value: FoodTruckType }[] = [
  {
    label: '전체',
    value: '전체',
  },
  {
    label: '음식',
    value: '음식',
  },
  {
    label: '디저트',
    value: '디저트',
  },
];
