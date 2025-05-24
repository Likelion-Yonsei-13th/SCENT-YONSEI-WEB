'use client';

import { useQueryState } from 'nuqs';
import { useCallback } from 'react';

type Location = '언기도' | '동문광장' | '노천극장';

export const useLocationQueryState = () => {
  const [currentLocation, setCurrentLocation] = useQueryState('location', {
    defaultValue: '언기도',
    clearOnDefault: false,
    history: 'replace',
  });

  const handleLocationChange = useCallback(
    (location: Location) => {
      setCurrentLocation(location);
    },
    [setCurrentLocation],
  );

  return { currentLocation, handleLocationChange };
};
