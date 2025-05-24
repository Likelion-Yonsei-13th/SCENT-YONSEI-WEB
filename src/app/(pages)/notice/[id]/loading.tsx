// app/notice/[id]/loading.tsx
//참고로 next.js에서는 loading.tsx는 자동으로 인식되고 처리된다고함

import { Loader } from '@/app/_common/components/loader';

export default function Loading() {
  return (
    <div className='p-6 size-full flex items-center justify-center text-sm text-gray-500'>
      <Loader />
    </div>
  );
}
