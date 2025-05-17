'use client';

import { parseAsStringLiteral, useQueryState } from 'nuqs';
import { days, sections, categories } from '../types/booth-union.type';

export function useBoothQueryParams() {
  const [day] = useQueryState(
    'day',
    parseAsStringLiteral(days).withDefault('28'),
  );
  const [section] = useQueryState(
    'section',
    parseAsStringLiteral(sections).withDefault('baekyang'),
  );
  const [category] = useQueryState(
    'category',
    parseAsStringLiteral(categories).withDefault('all'),
  );
  const [search] = useQueryState(
    'search',
    parseAsStringLiteral(['']).withDefault(''),
  );

  return { day, section, category, search };
}
