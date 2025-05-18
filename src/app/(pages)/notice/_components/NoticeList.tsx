'use client';

import NoticeItem from './NoticeItem';

//데이터타입 정의
type Notice = {
  noticeId: number;
  title: string;
  importance: boolean;
  category: string;
  created_at: string;
  updated_at: string;
};

//공지 배열 전체를 props로 받는 타입 정의
type NoticeListProps = {
  noticeList: Notice[];
};

export default function NoticeList({ noticeList }: NoticeListProps) {
  const fixedNotices = noticeList.filter(n => n.importance);
  const normalNotices = noticeList.filter(n => !n.importance);
  const sortedNotices = [...fixedNotices, ...normalNotices];

  return (
    <div className='flex flex-col gap-3'>
      {sortedNotices.map(notice => (
        <NoticeItem key={notice.noticeId} notice={notice} />
      ))}
    </div>
  );
}
