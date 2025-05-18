// app/notice/page.tsx

import TopBar from '@/app/_common/components/top-bar';
import CampusFilter from './_components/CampusFilter';
import NoticeList from './_components/NoticeList'; // 경로는 실제 위치에 맞게 조정

const dummyNoticeList = [
  {
    noticeId: 1,
    title: '블루런 장소 변경 공지',
    importance: true,
    category: '블루런',
    created_at: '05.25.18:30',
    updated_at: '05.25.18:30',
  },
  {
    noticeId: 2,
    title: '블루런 메달 공지 공지',
    importance: true,
    category: '블루런',
    created_at: '05.26.18:30',
    updated_at: '05.27.13:30',
  },
  {
    noticeId: 3,
    title: '블루런 운영 장소 변경 공지',
    importance: false,
    category: '블루런',
    created_at: '05.26.18:30',
    updated_at: '05.27.14:30',
  },
];

export default function Notice() {
  return (
    <main>
      <TopBar title='공지사항' bgClassName='bg-white/20 backdrop-blur-md p-4' />
      <section className='p-4'>
        <CampusFilter />

        {/* 공지 리스트 추가 */}
        <div className='mt-6'>
          <NoticeList noticeList={dummyNoticeList} />
        </div>
      </section>
    </main>
  );
}
