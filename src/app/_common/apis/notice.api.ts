'use server';

import {
  NoticeListResponse,
  NoticeDetailResponse,
} from '../interfaces/notice.interface';

// 공지사항 목록 조회 API
export async function getNoticeList(
  category: string,
  search: string = '',
): Promise<NoticeListResponse> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/notice?category=${category}&search=${search}`,
      {
        method: 'GET',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!res.ok) {
      throw new Error('공지 목록 조회 실패');
    }

    const json = await res.json();
    return json.data; // ✅ data 안에 notices 배열 존재
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 공지사항 디테일 조회 API
export async function getNoticeDetail(
  id: string,
): Promise<NoticeDetailResponse> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notice/${id}`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('공지 디테일 조회 실패');
    }

    const json = await res.json();
    return json.data; // ✅ data 안에 notice 정보 있음
  } catch (error) {
    console.error(error);
    throw error;
  }
}
