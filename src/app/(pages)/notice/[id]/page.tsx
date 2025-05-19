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
        const data = await getNoticeDetail(id as string);
        console.log('‼️공지상세데이터:', data);

        setNotice(data);
      } catch (error) {
        console.error('공지 디테일 조회 실패:', error);
        setNotice(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (!notice) return <div className='p-4'>공지사항을 찾을 수 없습니다.</div>;

  const formatDate = (iso: string) => {
    const date = new Date(iso);
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${month}.${day}`;
  };

  return (
    <div className="min-h-screen bg-[url('/img/main-background.jpg')] bg-cover bg-no-repeat pt-20 pb-10">
      <TopBar title='공지사항' bgClassName='bg-white/20 backdrop-blur-md p-4' />

      <div className='bg-white rounded-3xl mx-4 mt-12 p-7 shadow-xl mb-20'>
        <h2 className='text-lg font-bold mb-1'>{notice.title}</h2>
        <p className='text-sm text-gray-400 mb-4'>
          {formatDate(notice.updated_at)}
        </p>

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
