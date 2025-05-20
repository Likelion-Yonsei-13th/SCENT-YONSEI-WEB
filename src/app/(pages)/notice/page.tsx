'use client';

import { useEffect, useState } from 'react';
import { TopBar } from '@/app/_common/components/top-bar';
import CampusFilter from './_components/CampusFilter';
import NoticeList from './_components/NoticeList';
import SearchInput from './_components/SearchInput';
import { getNoticeList } from '@/app/_common/apis/notice.api';
import { NoticeListItem } from '@/app/_common/interfaces/notice.interface';

export default function Notice() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [noticeList, setNoticeList] = useState<NoticeListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(prev => (prev === category ? '' : category));
    setSearchKeyword('');
  };

  const handleSearch = (keyword: string) => {
    console.log('입력된 검색어:', keyword);
    setSearchKeyword(keyword);
  };

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await getNoticeList(selectedCategory);
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

  // 클라쪽에서 검색어 필터링
  const filteredList = noticeList.filter(notice =>
    notice.title.toLowerCase().includes(searchKeyword.toLowerCase()),
  );

  return (
    <main>
      <TopBar title='공지사항' bgClassName='bg-white/20 backdrop-blur-md p-4' />
      <section className='p-4'>
        <CampusFilter
          selected={selectedCategory}
          onSelect={handleSelectCategory}
        />

        {/* 선택된 카테고리일 때만 검색 입력 */}
        {selectedCategory && (
          <SearchInput
            value={searchKeyword}
            onChange={setSearchKeyword}
            onSearch={handleSearch}
          />
        )}

        <div className='mt-6 min-h-[200px]'>
          {loading ? (
            <div className='flex items-center justify-center min-h-[60vh]'>
              <p className='text-white text-sm'>불러오는 중...</p>
            </div>
          ) : noticeList.length === 0 ? (
            // 분기) 전체 공지 목록 자체가 비어 있는 경우
            <div className='flex items-center justify-center min-h-[60vh]'>
              <p className='text-sm text-white'>공지사항이 없습니다.</p>
            </div>
          ) : searchKeyword && filteredList.length === 0 ? (
            // 분기) 공지는 있지만, 검색 결과만 없는 경우
            <div className='flex items-center justify-center min-h-[60vh]'>
              <p className='text-sm text-white'>검색 결과가 없습니다.</p>
            </div>
          ) : (
            <NoticeList
              noticeList={filteredList}
              selectedCategory={selectedCategory}
              searchKeyword={searchKeyword}
            />
          )}
        </div>
      </section>
    </main>
  );
}
