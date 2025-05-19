'use server';

import {
  NoticeListResponse,
  NoticeDetailResponse,
} from '@/app/_common/interfaces/notice.interface';

export async function getNoticeList(
  category: string,
): Promise<NoticeListResponse> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/notice?category=${category}&search=`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      },
    );

    if (!res.ok) throw new Error('공지 목록 조회 실패');

    const json = await res.json();

    // photoUrl이 null인 경우 빈 문자열로 보완
    const mappedNotices = json.data.notices.map((notice: any) => ({
      ...notice,
      photoUrl: notice.photoUrl ?? '', // null-safe 처리
    }));

    return {
      search: json.data.search,
      category: json.data.category,
      notices: mappedNotices,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getNoticeDetail(
  noticeId: string,
): Promise<NoticeDetailResponse> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/notice/${noticeId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      },
    );

    if (!res.ok) throw new Error('공지 상세 조회 실패');

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
