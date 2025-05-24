'use client';

import { useQueryState } from 'nuqs';
import { dayTabs, type dayTabValues } from '../_constants/tabs';
import { useCallback } from 'react';

export const useDayTabQueryState = () => {
  const [day, setDay] = useQueryState('day', {
    defaultValue: dayTabs[0].value,
    clearOnDefault: false,
    history: 'replace',
  });

  const handleDayChange = useCallback(
    (value: (typeof dayTabValues)[number]) => {
      setDay(value);
    },
    [setDay],
  );

  return { currentDay: day, handleDayChange };
};
