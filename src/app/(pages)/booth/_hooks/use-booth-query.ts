'use client';

import { parseAsStringLiteral, useQueryState } from 'nuqs';
import {
  days,
  sections,
  categories,
  searches,
} from '../types/booth-union.type';

export function useBoothQueryParams() {
  const [day] = useQueryState(
    'day',
    parseAsStringLiteral(days).withDefault('1'),
  );
  const [section] = useQueryState(
    'section',
    parseAsStringLiteral(sections).withDefault('백양로'),
  );
  const [category] = useQueryState(
    'category',
    parseAsStringLiteral(categories).withDefault('전체'),
  );
  const [search] = useQueryState(
    'search',
    parseAsStringLiteral(searches).withDefault(''),
  );

  return { day, section, category, search };
}
