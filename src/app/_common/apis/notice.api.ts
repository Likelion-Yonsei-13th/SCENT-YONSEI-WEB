'use server';

import {
  type NoticeListResponse,
  type NoticeDetailResponse,
} from '@/app/_common/interfaces/notice.interface';

/**
 * 공지 목록 조회 API 호출
 * @param category - 필터링할 카테고리 (ex. '블루런', '신촌캠', '국제캠', '')
 * @param search - 검색 키워드 (기본값: '')
 */
export async function getNoticeList(
  category: string,
  search: string = '',
): Promise<NoticeListResponse> {
  try {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/notice?category=${category}&search=${search}`;

    console.log('[getNoticeList] 요청 주소:', endpoint);
    console.log('[api호출]카테고리: ', category, '검색어', search);

    const res = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('공지 목록 조회 실패');

    const json = await res.json();

    const mappedNotices = json.data.notices.map((notice: any) => ({
      ...notice,
      photoUrl: notice.photoUrl ?? '',
    }));

    return {
      search: json.data.search,
      category: json.data.category,
      notices: mappedNotices,
    };
  } catch (error) {
    throw error;
  }
}

/**
 * 공지 상세 조회 API 호출
 * @param noticeId - 공지 ID
 */
export async function getNoticeDetail(
  noticeId: string,
): Promise<NoticeDetailResponse> {
  try {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/notice/${noticeId}`;

    const res = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('공지 상세 조회 실패');

    const json = await res.json();

    // console.log('[getNoticeDetail] 응답 데이터:', json);

    return json.data;
  } catch (error) {
    throw error;
  }
}
