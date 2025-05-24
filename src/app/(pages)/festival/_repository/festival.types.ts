export interface ShowListRequest {
  day: string;
}

export interface ShowDetailRequest {
  showId: string;
}

export interface ApiResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data: T;
}

export interface LiveShow {
  showId: number;
  title: string;
  photo?: string;
}

export interface ShowListItem {
  showId: number;
  title: string;
  start_at: string;
  finish_at: string;
  photo?: string;
  section: string;
}

export interface ShowListData {
  live: LiveShow[];
  show: ShowListItem[];
}

export type ShowListResponse = ApiResponse<ShowListData>;

export interface ShowDetail {
  showId: number;
  title: string;
  name: string;
  instagram: string;
  section: string;
  start_at: string;
  finish_at: string;
  description: string;
  photo: string[];
}

export type ShowDetailResponse = ApiResponse<ShowDetail>;

export interface ShowModel {
  showId: number;
  title: string;
  name: string;
  instagram: string;
  section: string;
  start_at: string;
  finish_at: string;
  description: string;
  photo: string;
  day: number;
  isLive: boolean;
}
