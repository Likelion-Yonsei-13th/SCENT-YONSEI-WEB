// app/notice/[id]/loading.tsx
//참고로 next.js에서는 loading.tsx는 자동으로 인식되고 처리된다고함
export default function Loading() {
  return (
    <div className='p-6 text-center text-sm text-gray-500'>
      공지사항을 불러오는 중입니다...
    </div>
  );
}
