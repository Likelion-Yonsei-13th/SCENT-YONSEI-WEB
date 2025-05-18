'use client';

import { useQueryState } from 'nuqs';
import { useCallback } from 'react';

type Location = 'library' | 'dormitory' | 'outdoor';

export const useLocationQueryState = () => {
  const [currentLocation, setCurrentLocation] = useQueryState('location', {
    defaultValue: 'library',
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
