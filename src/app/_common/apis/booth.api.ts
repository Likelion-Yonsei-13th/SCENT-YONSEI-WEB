'use server';

import { Booth, BoothDetail } from '../interfaces/booth.interface';
import { axiosInstance } from '../utils/axios-instance';
import {
  BoothListParams,
  BoothDetailParams,
} from '@/app/_common/interfaces/booth.interface';

// booth main page all data api function
export async function getBoothList(params: BoothListParams): Promise<Booth> {
  const response = await axiosInstance.get('/booth', { params });
  return response.data;
}

// booth detail page detail data api function
export async function getBoothDetail(
  booth_id: string,
  params: BoothDetailParams,
): Promise<BoothDetail> {
  const response = await axiosInstance.get(`/booth/${booth_id}`, { params });
  return response.data;
}
