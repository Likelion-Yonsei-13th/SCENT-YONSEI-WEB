'use client';

import NoticeItem from './NoticeItem';

// 데이터 타입 정의
type Notice = {
  noticeId: number;
  title: string;
  importance: boolean;
  category: string;
  created_at: string;
  updated_at: string;
  thumbnailUrl?: string;
};

// 공지 배열 전체를 props로 받는 타입 정의
type NoticeListProps = {
  noticeList: Notice[];
  selectedCategory: string;
};

export default function NoticeList({
  noticeList,
  selectedCategory,
}: NoticeListProps) {
  // 선택된 카테고리의 공지만 필터링
  const filteredNotices = noticeList.filter(
    notice => notice.category === selectedCategory,
  );

  // 중요 공지는 순서 유지
  const fixedNotices = filteredNotices.filter(n => n.importance);

  // 일반 공지는 생성일 기준 최신순 정렬
  const normalNotices = filteredNotices
    .filter(n => !n.importance)
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );

  // 중요 공지 + 일반 공지를 하나로 병합
  const sortedNotices = [...fixedNotices, ...normalNotices];

  return (
    <div className='flex flex-col gap-3'>
      {sortedNotices.map(notice => (
        <NoticeItem key={notice.noticeId} notice={notice} />
      ))}
    </div>
  );
}
