'use server';

import { type Booth, type BoothDetail } from '../interfaces/booth.interface';
import {
  type BoothListParams,
  type BoothDetailParams,
} from '@/app/_common/interfaces/booth.interface';

// booth main page all data api function - 무한 캐싱
export async function getBoothList(params: BoothListParams): Promise<Booth> {
  const { day, section, category, search, foodType } = params;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/booth?search=${search}&section=${section}&category=${category}&day=${day}&foodType=${foodType}`,
      {
        method: 'GET',
        cache: 'force-cache',
        next: { revalidate: false },
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      throw new Error('Failed to fetch booth list');
    }
    const data: Booth = await response
      .json()
      .then(
        (data: {
          status: number;
          success: boolean;
          message: string;
          data: Booth;
        }) => data.data,
      );
    return data;
  } catch (error) {
    throw error;
  }
}

// booth detail page detail data api function
export async function getBoothDetail(
  booth_id: string,
  params: BoothDetailParams,
): Promise<BoothDetail> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/booth/${booth_id}?category=${params.category}`,
      {
        method: 'GET',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      throw new Error('Failed to fetch booth detail');
    }
    const { data }: { data: BoothDetail } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
