'use client';

import { useEffect, useState } from 'react';
import { TopBar } from '@/app/_common/components/top-bar';
import CampusFilter from './_components/CampusFilter';
import NoticeList from './_components/NoticeList';
import { getNoticeList } from '@/app/_common/apis/notice.api';
import { NoticeListItem } from '@/app/_common/interfaces/notice.interface';

const dummyNoticeList: NoticeListItem[] = [
  {
    noticeId: 1,
    title: '블루런 장소 변경 공지',
    importance: true,
    category: '블루런',
    created_at: '2025-05-25T18:30:00',
    updated_at: '2025-05-25T18:30:00',
    photoUrl: '/img/scent-logo.jpg',
  },
  {
    noticeId: 2,
    title: 'test2',
    importance: true,
    category: '블루런',
    created_at: '2025-05-23T18:30:00',
    updated_at: '2025-05-23T18:30:00',
    photoUrl: '/img/scent-logo.jpg',
  },
  {
    noticeId: 3,
    title: 'test3',
    importance: false,
    category: '블루런',
    created_at: '2025-05-22T18:30:00',
    updated_at: '2025-05-22T18:30:00',
    photoUrl: null,
  },
  {
    noticeId: 4,
    title: 'test4',
    importance: false,
    category: '신촌캠',
    created_at: '2025-05-22T18:30:00',
    updated_at: '2025-05-22T18:30:00',
    photoUrl: null,
  },
  {
    noticeId: 5,
    title: 'test5',
    importance: true,
    category: '신촌캠',
    created_at: '2025-05-22T18:30:00',
    updated_at: '2025-05-22T18:30:00',
    photoUrl: null,
  },
];

export default function Notice() {
  const [selectedCategory, setSelectedCategory] = useState('블루런');
  const [noticeList, setNoticeList] = useState<NoticeListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await getNoticeList(selectedCategory);
        setNoticeList(data.notices); // API 연동 시 정상 작동
      } catch (error) {
        console.error('API 연결 안 됨 - 더미데이터로 대체');
        setNoticeList(dummyNoticeList); // 서버 없을 때는 fallback
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, [selectedCategory]);

  return (
    <main>
      <TopBar title='공지사항' bgClassName='bg-white/20 backdrop-blur-md p-4' />
      <section className='p-4'>
        <CampusFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className='mt-6'>
          {loading ? (
            <p className='text-gray-400 text-sm'>불러오는 중...</p>
          ) : (
            <NoticeList
              noticeList={noticeList}
              selectedCategory={selectedCategory}
            />
          )}
        </div>
      </section>
    </main>
  );
}
