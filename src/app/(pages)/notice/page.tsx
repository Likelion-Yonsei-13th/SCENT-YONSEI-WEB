'use client';

import { useEffect, useState } from 'react';
import { TopBar } from '@/app/_common/components/top-bar';
import CampusFilter from './_components/CampusFilter';
import NoticeList from './_components/NoticeList';
import { getNoticeList } from '@/app/_common/apis/notice.api';
import { NoticeListItem } from '@/app/_common/interfaces/notice.interface';

export default function Notice() {
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // 초기에는 전체 카테고리 의미로 빈 문자열
  const [noticeList, setNoticeList] = useState<NoticeListItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 카테고리 클릭 시 토글 방식으로 설정
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(prev => (prev === category ? '' : category));
  };

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await getNoticeList(selectedCategory); // 카테고리 없이도 호출 가능해야 함
        setNoticeList(data.notices);
      } catch (error) {
        console.error('공지 목록 조회 실패:', error);
        setNoticeList([]);
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
          onSelect={handleSelectCategory} //필터 토글기능
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
              selectedCategory={selectedCategory} // 이 값이 빈 문자열이면 전체 출력됨
            />
          )}
        </div>
      </section>
    </main>
  );
}
