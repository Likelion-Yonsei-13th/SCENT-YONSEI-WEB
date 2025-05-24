import {
  Category,
  Day,
  FoodTruckType,
  Section,
} from '@/app/(pages)/booth/types/booth-union.type';

export interface BoothMainInfo {
  boothId: number;
  name: string;
  organization: string;
  photo?: string;
}
export interface FoodTruckMainInfo {
  foodTruckId: number;
  name: string;
  photo?: string;
  foodType?: string;
  menuNames: string[];
}

export interface Booth {
  search?: string;
  day: Day;
  section: Section;
  category: Category;
  booth: BoothMainInfo[];
  foodTruck?: FoodTruckMainInfo[];
}

export interface Menu {
  menu_id: number;
  menu_name?: string;
  price?: number;
  menu_photo?: string;
}

export interface BoothDetail {
  boothId: number;
  foodTruckId: number;
  section: Section;
  location: number;
  name: string;
  organization: string;
  instagram?: string;
  photos?: string[];
  description: string;
  menu?: Menu[];
}

export interface BoothListParams {
  search?: string;
  day: Day;
  section: Section;
  category: Category;
  foodType?: FoodTruckType;
}
export interface BoothDetailParams {
  category: Category;
}
