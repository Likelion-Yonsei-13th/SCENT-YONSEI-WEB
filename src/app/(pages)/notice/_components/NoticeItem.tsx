'use client';

import Link from 'next/link';

type Notice = {
  noticeId: number;
  title: string;
  importance: boolean;
  category: string;
  created_at: string;
  updated_at: string;
  photoUrl?: string | null;
};

type NoticeItemProps = {
  notice: Notice;
};

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${month}.${day}`;
};

export default function NoticeItem({ notice }: NoticeItemProps) {
  const formattedDate = formatDate(notice.updated_at);

  const hasImage =
    typeof notice.photoUrl === 'string' && notice.photoUrl !== '';
  const isTextOnly = !hasImage && !notice.importance;

  return (
    <Link href={`/notice/${notice.noticeId}`}>
      <div
        className={`flex items-center justify-between w-full border border-[rgba(223,244,255,1)] ${
          hasImage ? 'h-[76px]' : 'h-[54px]'
        } bg-white rounded-2xl px-4 py-3 shadow-md`}
      >
        {/* 아이콘 or 이미지 */}
        {(hasImage || notice.importance) && (
          <div className='w-10 h-10 rounded-md flex items-center justify-center shrink-0'>
            {hasImage ? (
              <img
                src={notice.photoUrl!}
                alt='공지 이미지'
                width={40}
                height={40}
                className='rounded-md object-cover'
              />
            ) : (
              <img
                src='/svg/notice/bell.svg'
                alt='공지아이콘'
                className='w-6 h-6'
              />
            )}
          </div>
        )}

        {/* 텍스트 */}
        <p
          className={`${
            isTextOnly ? 'ml-2 flex-1' : 'flex-1 mx-4'
          } text-[16px] leading-[20px] font-medium ${
            notice.importance ? 'text-[rgba(34,166,232,1)]' : 'text-black'
          }`}
        >
          {notice.title}
        </p>

        {/* 날짜는 항상 표시 */}
        <span className='text-sm text-gray-400'>{formattedDate}</span>
      </div>
    </Link>
  );
}
