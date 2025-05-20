'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { TopBar } from '@/app/_common/components/top-bar';
import { getNoticeDetail } from '@/app/_common/apis/notice.api';
import { NoticeDetailResponse } from '@/app/_common/interfaces/notice.interface';
import ImageModal from './_components/ImageModal';

export default function NoticeDetailPage() {
  const { id } = useParams();
  const [notice, setNotice] = useState<NoticeDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // 이미지 모달 state 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!id) return;

    const fetchDetail = async () => {
      try {
        const data = await getNoticeDetail(id as string);
        console.log('‼공지상세데이터:', data);

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

  if (!notice)
    return (
      <div className='text-sm text-[rgba(255,255,255,1)] text-center py-10'>
        공지사항을 찾을 수 없습니다.
      </div>
    );

  const formatDate = (iso: string) => {
    const date = new Date(iso);
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${month}.${day}`;
  };

  //이미지 열람
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePrev = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? (notice?.photo.length ?? 1) - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentImageIndex(prev =>
      prev === (notice?.photo.length ?? 1) - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="min-h-screen bg-[url('/img/main-background.jpg')] bg-cover bg-no-repeat pt-20 pb-10">
      <TopBar
        title='공지사항'
        bgClassName='bg-[rgba(255,255,255,0.2)] backdrop-blur-md p-4'
      />

      <div className='bg-white rounded-3xl mx-4 mt-12 p-7 shadow-xl mb-20'>
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
                className='w-[110px] h-[110px] rounded-md object-cover cursor-pointer'
                onClick={() => openModal(i)}
              />
            ))}
          </div>
        )}

        {/* 공지 내용 */}
        <div
          className='text-sm leading-6 text-gray-800 whitespace-pre-wrap'
          dangerouslySetInnerHTML={{
            __html: notice.content.replace(/\n/g, '<br />'),
          }}
        />
      </div>

      {/* 이미지 모달 */}
      {isModalOpen && notice.photo && (
        <ImageModal
          images={notice.photo}
          currentIndex={currentImageIndex}
          onClose={closeModal}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
