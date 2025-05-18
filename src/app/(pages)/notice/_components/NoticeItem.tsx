'use client';

import Link from 'next/link';
import { Bell } from 'lucide-react';

type Notice = {
  noticeId: number;
  title: string;
  importance: boolean;
  category: string;
  created_at: string;
  updated_at: string;
};

type NoticeItemProps = {
  notice: Notice;
};

// 날짜 포맷 함수
const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${month}.${day}`; // 예: 05.18
};

export default function NoticeItem({ notice }: NoticeItemProps) {
  const formattedDate = formatDate(notice.updated_at);

  return (
    <Link href={`/notice/${notice.noticeId}`}>
      <div className='flex items-center justify-between  w-[327px] h-[54px] ml-[30px] bg-white rounded-2xl px-4 py-3 shadow-md'>
        {/* 왼쪽 아이콘 or 이미지 */}
        <div className='w-10 h-10 rounded-md flex items-center justify-center shrink-0'>
          {notice.importance ? (
            <Bell className='w-5 h-5 text-blue-500' />
          ) : (
            <div className='w-6 h-6 bg-gray-300 rounded' />
          )}
        </div>

        {/* 가운데 텍스트 */}
        <p
          className={`flex-1 mx-4 text-base ${
            notice.importance
              ? 'text-[rgba(34,166,232,1)] font-semibold'
              : 'text-black'
          }`}
        >
          {notice.title}
        </p>

        {/* 오른쪽 날짜 */}
        <span className='text-sm text-gray-400'>{formattedDate}</span>
      </div>
    </Link>
  );
}
