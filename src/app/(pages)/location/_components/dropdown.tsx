'use client';

import { cn } from '@/app/_core/utils/cn';
import { ChevronDownIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useTrashLocationQueryState } from '../_hooks/use-trash-location-query-state';
import TrashIcon from '@/public/svg/location/trash.svg';
import WheelchairIcon from '@/public/svg/location/wheelchair.svg';

const locationList = [
  {
    label: '백양로',
    value: '백양로',
    image: '/img/location/trash-백양로.png',
  },
  {
    label: '한글탑',
    value: '한글탑',
    image: '/img/location/trash-한글탑.png',
  },
] as const;

export const DropDown = ({
  category,
}: {
  category: 'trash' | 'wheelchair';
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTrashLocation, handleTrashLocationChange } =
    useTrashLocationQueryState();

  const currentTrashLocationImage = useMemo(
    () =>
      locationList.find(location => location.value === currentTrashLocation)!
        .image,
    [currentTrashLocation],
  );

  return (
    <div className='w-full relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center justify-between py-2.5 px-4 border-1 border-light200 w-full bg-white rounded-[20px]',
        )}
      >
        <span className='flex items-center gap-1.5'>
          {category === 'trash' ? <TrashIcon /> : <WheelchairIcon />}
          <p className='text-label-l font-normal text-black000'>
            {category === 'trash' ? '쓰레기통' : '경사로'}
          </p>
        </span>
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
                {category === 'trash' ? (
                  <>
                    <div className='flex gap-6 w-full items-center justify-center'>
                      {locationList.map(location => (
                        <button
                          key={location.value}
                          onClick={() =>
                            handleTrashLocationChange(location.value)
                          }
                          className={cn(
                            'text-headline-l font-semibold text-gray500 transition-colors duration-300',
                            location.value === currentTrashLocation &&
                              'text-point',
                          )}
                        >
                          {location.label}
                        </button>
                      ))}
                    </div>
                    <Image
                      src={currentTrashLocationImage}
                      alt={currentTrashLocation}
                      width={300}
                      height={300}
                      className='rounded-[10px] w-full h-auto object-cover aspect-[59/47]'
                    />
                  </>
                ) : (
                  <>
                    <span className='w-full flex items-center justify-start gap-2'>
                      <span className='bg-[#FF7F7F] w-6 h-2 rounded-[100px]' />
                      <span className='text-label-s text-black000'>경사로</span>
                    </span>
                    <Image
                      src={'/img/location/fullmap.png'}
                      alt={'경사로 이미지'}
                      width={300}
                      height={300}
                      className='rounded-[10px] w-full h-auto object-cover aspect-[59/47]'
                    />
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
