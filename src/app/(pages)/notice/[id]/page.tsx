'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { TopBar } from '@/app/_common/components/top-bar';
import { getNoticeDetail } from '@/app/_common/apis/notice.api';
import { NoticeDetailResponse } from '@/app/_common/interfaces/notice.interface';

export default function NoticeDetailPage() {
  const { id } = useParams();
  const [notice, setNotice] = useState<NoticeDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchDetail = async () => {
      try {
        // 실제 API 연동 시
        // const data = await getNoticeDetail(id as string);
        // setNotice(data);

        // 🧪 현재는 더미 데이터로 대체
        const dummy: NoticeDetailResponse = {
          noticeId: 1,
          title: '공지 제목',
          content: `[개교 제140주년 무악대동제 (Scent of Blue) 국캠 부스 신청 안내]

안녕하세요, 개교 제140주년 무악대동제 기획단입니다.

💙반짝이는 비눗방울처럼 찰나지만 영원히 기억될 축제,
국캠 부스 신청에 대해 안내드립니다.

📌 국제캠퍼스 전야제 부스 안내
- 일시: 5월 28일 (수) 12:00 ~ 23:00
- 운영 개수: 약 24개
💙반짝이는 비눗방울처럼 찰나지만 영원히 기억될 축제,
국캠 부스 신청에 대해 안내드립니다.

📌 국제캠퍼스 전야제 부스 안내
- 일시: 5월 28일 (수) 12:00 ~ 23:00
- 운영 개수: 약 24개
💙반짝이는 비눗방울처럼 찰나지만 영원히 기억될 축제,
국캠 부스 신청에 대해 안내드립니다.

📌 국제캠퍼스 전야제 부스 안내
- 일시: 5월 28일 (수) 12:00 ~ 23:00
- 운영 개수: 약 24개
💙반짝이는 비눗방울처럼 찰나지만 영원히 기억될 축제,
국캠 부스 신청에 대해 안내드립니다.

📌 국제캠퍼스 전야제 부스 안내
- 일시: 5월 28일 (수) 12:00 ~ 23:00
- 운영 개수: 약 24개
💙반짝이는 비눗방울처럼 찰나지만 영원히 기억될 축제,
국캠 부스 신청에 대해 안내드립니다.

📌 국제캠퍼스 전야제 부스 안내
- 일시: 5월 28일 (수) 12:00 ~ 23:00
- 운영 개수: 약 24개
💙반짝이는 비눗방울처럼 찰나지만 영원히 기억될 축제,
국캠 부스 신청에 대해 안내드립니다.

📌 국제캠퍼스 전야제 부스 안내
- 일시: 5월 28일 (수) 12:00 ~ 23:00
- 운영 개수: 약 24개

📌 신청 안내
- 대상: 연세대학교 학부생 소속 단체
- 기간: 5월 2일 ~ 3일
- 링크: https://forms.gle/8WkkrRoUCYJ2XvkJ7`,
          importance: true,
          category: '블루런',
          created_at: '2025-05-01T18:30:00',
          updated_at: '2025-05-02T09:00:00',
          photo: [
            '/img/scent-logo.jpg',
            '/img/scent-logo.jpg',
            '/img/scent-logo.jpg',
          ],
        };

        setNotice(dummy);
      } catch (error) {
        console.error('공지 디테일 조회 실패:', error);
        setNotice(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) return <div className='p-4'>불러오는 중...</div>;
  if (!notice) return <div className='p-4'>공지사항을 찾을 수 없습니다.</div>;

  // 날짜 포맷 함수
  const formatDate = (iso: string) => {
    const date = new Date(iso);
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${month}.${day}`;
  };

  return (
    <div className="min-h-screen bg-[url('/img/main-background.jpg')] bg-cover bg-no-repeat pt-20 pb-10">
      {/* 🔹 상단 TopBar */}
      <TopBar title='공지사항' bgClassName='bg-white/20 backdrop-blur-md p-4' />

      {/* 🔹 공지 본문 카드 */}
      <div className='bg-white rounded-3xl mx-4 mt-15 p-7 shadow-xl mb-15'>
        <h2 className='text-lg font-bold mb-1'>{notice.title}</h2>
        <p className='text-sm text-gray-400 mb-4'>
          {formatDate(notice.updated_at)}
        </p>

        {/* 이미지 리스트 */}
        {notice.photo && notice.photo.length > 0 && (
          <div className='flex gap-3 overflow-x-auto mb-4'>
            {notice.photo.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`공지 이미지 ${i + 1}`}
                className='w-[100px] h-[100px] rounded-md object-cover'
              />
            ))}
          </div>
        )}

        {/* 공지 본문 */}
        <div
          className='text-sm leading-6 text-gray-800 whitespace-pre-wrap'
          dangerouslySetInnerHTML={{
            __html: notice.content.replace(/\n/g, '<br />'),
          }}
        />
      </div>
    </div>
  );
}
