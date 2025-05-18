'use client';

import { useQueryState } from 'nuqs';
import { dayTabs, dayTabValues } from '../constants/tabs';
import { useCallback } from 'react';

export const useDayTabQueryState = () => {
  const [tab, setTab] = useQueryState('tab', {
    defaultValue: dayTabs[0].value,
    clearOnDefault: false,
    history: 'replace',
  });

  const handleTabChange = useCallback(
    (value: (typeof dayTabValues)[number]) => {
      setTab(value);
    },
    [setTab],
  );

  return { currentTab: tab, handleTabChange };
};
