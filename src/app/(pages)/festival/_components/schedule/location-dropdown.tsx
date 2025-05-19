'use client';

import { cn } from '@/app/_core/utils/cn';
import { ChevronDownIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocationQueryState } from '../../_hooks/use-location-query-state';
import Image from 'next/image';

const locationList = [
  {
    label: '언기도 앞',
    value: '언기도',
    image: '/img/festival/언기도.png',
  },
  {
    label: '동문광장',
    value: '동문광장',
    image: '/img/festival/동문광장.png',
  },
  {
    label: '노천극장',
    value: '노천극장',
    image: '/img/festival/노천극장.png',
  },
] as const;

export const LocationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLocation, handleLocationChange } = useLocationQueryState();

  const currentLocationImage = useMemo(
    () =>
      locationList.find(location => location.value === currentLocation)!.image,
    [currentLocation],
  );

  return (
    <div className='w-full relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center justify-between py-2.5 px-4 border-1 border-light200 w-full bg-white rounded-[20px]',
        )}
      >
        <p className='text-label-l font-normal text-black000'>공연 위치</p>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.645, 0.045, 0.355, 1],
          }}
          className={cn('text-main500')}
        >
          <ChevronDownIcon className='size-8' strokeWidth={1.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            <motion.hr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              exit={{ opacity: 0 }}
              className='w-full border-gray300 absolute top-13'
            />
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: 'calc(100% - 36px)',
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.3,
                    ease: [0.645, 0.045, 0.355, 1],
                  },
                  opacity: {
                    duration: 0.2,
                    delay: 0.1,
                    ease: [0.645, 0.045, 0.355, 1],
                  },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.3,
                    ease: [0.645, 0.045, 0.355, 1],
                  },
                  opacity: {
                    duration: 0.2,
                    delay: 0.1,
                    ease: [0.645, 0.045, 0.355, 1],
                  },
                },
              }}
              className='bg-white -mt-5 pt-9 overflow-hidden border-1 border-light200 rounded-b-[20px] border-t-0 p-4'
            >
              <div className='w-full flex flex-col items-center justify-center gap-5'>
                <div className='flex gap-6 w-full items-center justify-center'>
                  {locationList.map(location => (
                    <button
                      key={location.value}
                      onClick={() => handleLocationChange(location.value)}
                      className={cn(
                        'text-headline-l font-semibold text-gray500 transition-colors duration-300',
                        location.value === currentLocation && 'text-point',
                      )}
                    >
                      {location.label}
                    </button>
                  ))}
                </div>
                <Image
                  src={currentLocationImage}
                  alt={currentLocation}
                  width={300}
                  height={300}
                  className='rounded-[10px] w-full h-auto object-cover'
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
