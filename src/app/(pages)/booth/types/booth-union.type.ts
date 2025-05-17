export const days = ['28', '29', '30'] as const;
export type Day = (typeof days)[number];

export const sections = ['baekyang', 'hangeul', 'global'] as const;
export type Section = (typeof sections)[number];

export const categories = ['all', 'booth', 'foodtruck'] as const;
export type Category = (typeof categories)[number];
