import {
  type ShowListResponse,
  type ShowDetailResponse,
} from './festival.types';
import { fetchInstance } from '@/app/_common/apis/fetch-instance';

class FestivalRepository {
  async getShowList(day: string): Promise<ShowListResponse> {
    const response = await fetchInstance({
      url: `/shows?day=${day}`,
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch show list');
    }

    return response.json();
  }

  async getShowDetail(showId: string): Promise<ShowDetailResponse> {
    const response = await fetchInstance({
      url: `/shows/${showId}`,
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch show detail');
    }

    return response.json();
  }
}

export const festivalRepository = new FestivalRepository();
