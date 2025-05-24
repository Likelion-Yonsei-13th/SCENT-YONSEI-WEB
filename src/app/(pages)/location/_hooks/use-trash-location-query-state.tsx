'use client';

import { useQueryState } from 'nuqs';
import { useCallback } from 'react';

type Location = '백양로' | '한글탑';

export const useTrashLocationQueryState = () => {
  const [currentTrashLocation, setCurrentLocation] = useQueryState(
    'trashLocation',
    {
      defaultValue: '백양로',
      clearOnDefault: false,
      history: 'replace',
    },
  );

  const handleTrashLocationChange = useCallback(
    (location: Location) => {
      setCurrentLocation(location);
    },
    [setCurrentLocation],
  );

  return { currentTrashLocation, handleTrashLocationChange };
};
