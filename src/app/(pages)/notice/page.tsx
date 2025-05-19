'use client';

import { useEffect, useState } from 'react';
import { TopBar } from '@/app/_common/components/top-bar';
import CampusFilter from './_components/CampusFilter';
import NoticeList from './_components/NoticeList';
import { getNoticeList } from '@/app/_common/apis/notice.api';
import { NoticeListItem } from '@/app/_common/interfaces/notice.interface';

export default function Notice() {
  const [selectedCategory, setSelectedCategory] = useState('블루런');
  const [noticeList, setNoticeList] = useState<NoticeListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await getNoticeList(selectedCategory);
        setNoticeList(data.notices); // ✅ 실제 API 연동
      } catch (error) {
        console.error('공지 목록 조회 실패:', error);
        setNoticeList([]); // fallback 제거
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

        <div className='mt-6 min-h-[200px]'>
          {loading ? (
            <div className='flex items-center justify-center min-h-[60vh]'>
              <p className='text-white text-sm'>불러오는 중...</p>
            </div>
          ) : noticeList.length === 0 ? (
            <div className='flex items-center justify-center min-h-[60vh]'>
              <p className='text-sm text-white'>공지사항이 없습니다.</p>
            </div>
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
