import {
  type ShowListResponse,
  type ShowDetailResponse,
} from './festival.types';
import { fetchInstance } from '@/app/_common/apis/fetch-instance';

const festivalCacheKey = 'festival';

class FestivalRepository {
  async getShowList(day: string): Promise<ShowListResponse> {
    const response = await fetchInstance({
      url: `/show?day=${day}`,
      method: 'GET',
      next: {
        revalidate: Infinity,
        tags: [festivalCacheKey, day],
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch show list');
    }

    return response.json();
  }

  async getAllShowList() {
    const [day1, day2, day3] = await Promise.all([
      this.getShowList('1'),
      this.getShowList('2'),
      this.getShowList('3'),
    ]);

    return {
      day1: day1.data.show,
      day2: day2.data.show,
      day3: day3.data.show,
    };
  }

  async getShowDetail(showId: string): Promise<ShowDetailResponse> {
    const response = await fetchInstance({
      url: `/show/${showId}`,
      method: 'GET',
      next: {
        revalidate: Infinity,
        tags: [festivalCacheKey, showId],
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch show detail');
    }

    return response.json();
  }
}

export const festivalRepository = new FestivalRepository();
