// interfaces/notice.interface.ts

export interface NoticeListItem {
  noticeId: number;
  title: string;
  importance: boolean;
  category: string;
  created_at: string;
  updated_at: string;
  photoUrl: string | null;
}

export interface NoticeListResponse {
  search: string;
  category: string;
  notices: NoticeListItem[];
}

export interface NoticeDetailResponse {
  noticeId: number;
  title: string;
  content: string;
  importance: boolean;
  category: string;
  created_at: string;
  updated_at: string;
  photo: string[];
}
