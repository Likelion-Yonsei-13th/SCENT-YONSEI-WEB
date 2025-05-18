'use client';

import { useState } from 'react';
import TopBar from '@/app/_common/components/top-bar';
import CampusFilter from './_components/CampusFilter';
import NoticeList from './_components/NoticeList';

const dummyNoticeList = [
  {
    noticeId: 1,
    title: '블루런 장소 변경 공지',
    importance: true,
    category: '블루런',
    created_at: '2025-05-25T18:30:00',
    updated_at: '2025-05-25T18:30:00',
  },
  {
    noticeId: 2,
    title: '블루런 메달 공지 공지',
    importance: true,
    category: '블루런',
    created_at: '2025-05-26T18:30:00',
    updated_at: '2025-05-27T13:30:00',
  },
  {
    noticeId: 3,
    title: '블루런 운영 장소 변경 공지',
    importance: false,
    category: '블루런',
    created_at: '2025-05-26T18:30:00',
    updated_at: '2025-05-27T14:30:00',
    thumbnailUrl: '/img/scent-logo.jpg',
  },
  {
    noticeId: 4,
    title: 'test',
    importance: false,
    category: '블루런',
    created_at: '2025-05-26T18:30:00',
    updated_at: '2025-05-27T14:30:00',
  },
  {
    noticeId: 5,
    title: 'test-신촌',
    importance: false,
    category: '신촌캠',
    created_at: '2025-05-26T18:30:00',
    updated_at: '2025-05-27T14:30:00',
    thumbnailUrl: 'https://via.placeholder.com/40',
  },
  {
    noticeId: 6,
    title: 'test-국제',
    importance: true,
    category: '국제캠',
    created_at: '2025-05-26T18:30:00',
    updated_at: '2025-05-27T14:30:00',
  },
  {
    noticeId: 7,
    title: 'test-국제2',
    importance: false,
    category: '국제캠',
    created_at: '2025-05-25T18:30:00',
    updated_at: '2025-05-25T14:30:00',
  },
];

export default function Notice() {
  const [selectedCategory, setSelectedCategory] = useState('블루런'); // 기본값

  return (
    <main>
      <TopBar title='공지사항' bgClassName='bg-white/20 backdrop-blur-md p-4' />
      <section className='p-4'>
        <CampusFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className='mt-6'>
          <NoticeList
            noticeList={dummyNoticeList}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>
    </main>
  );
}
