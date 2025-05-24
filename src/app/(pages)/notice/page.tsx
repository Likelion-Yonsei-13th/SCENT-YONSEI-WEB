'use client';

import { useEffect, useState } from 'react';
import { TopBar } from '@/app/_common/components/top-bar';
import CampusFilter from './_components/CampusFilter';
import NoticeList from './_components/NoticeList';
import SearchInput from './_components/SearchInput';
import { getNoticeList } from '@/app/_common/apis/notice.api';
import { type NoticeListItem } from '@/app/_common/interfaces/notice.interface';
import { Loader } from '@/app/_common/components/loader';

export default function Notice() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [noticeList, setNoticeList] = useState<NoticeListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');

  const [searchFailed, setSearchFailed] = useState(false);

  const fetchNotices = async (category: string, keyword: string = '') => {
    setLoading(true);
    try {
      const data = await getNoticeList(category, keyword);
      setNoticeList(data.notices);
      setSearchFailed(false);
    } catch (error: any) {
      console.error('공지 목록 조회 실패:', error);
      setNoticeList([]);
      if (error.message.includes('404')) {
        setSearchFailed(true);
      }
    } finally {
      setLoading(false);
    }
  };

  //검색어 필터링링
  const handleSelectCategory = (category: string) => {
    const newCategory = selectedCategory === category ? '' : category;
    setSelectedCategory(newCategory);
    setSearchKeyword('');
    setSearchFailed(false);
  };

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
    if (selectedCategory) {
      fetchNotices(selectedCategory, keyword);
    }
  };

  // 최초 진입 시 전체 목록
  useEffect(() => {
    fetchNotices(selectedCategory);
  }, [selectedCategory]);

  return (
    <main>
      <TopBar title='공지사항' bgClassName='bg-white/20 backdrop-blur-md p-4' />
      <section className='p-4 size-full pt-28'>
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
            <div className='flex items-center justify-center min-h-[7vh]'>
              <Loader />
            </div>
          ) : noticeList.length === 0 ? (
            <div className='flex items-center justify-center min-h-[7vh]'>
              <p className='text-sm text-white'>
                {searchKeyword && searchFailed
                  ? '검색 결과가 없습니다.'
                  : '공지사항이 없습니다.'}
              </p>
            </div>
          ) : (
            <NoticeList
              noticeList={noticeList}
              selectedCategory={selectedCategory}
              searchKeyword={searchKeyword}
            />
          )}
        </div>
      </section>
    </main>
  );
}
