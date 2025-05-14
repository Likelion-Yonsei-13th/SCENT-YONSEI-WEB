'use client';

import { useQueryState } from 'nuqs';
import { tabs, tabValues } from '../constants/tabs';
import { useCallback } from 'react';

export const useTabQueryState = () => {
  const [tab, setTab] = useQueryState('tab', {
    defaultValue: tabs[0].value,
    history: 'replace',
  });

  const handleTabChange = useCallback(
    (value: (typeof tabValues)[number]) => {
      setTab(value);
    },
    [setTab],
  );

  return { currentTab: tab, handleTabChange };
};
