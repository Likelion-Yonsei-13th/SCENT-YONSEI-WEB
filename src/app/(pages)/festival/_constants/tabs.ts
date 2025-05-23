export const dayTabs = [
  { label: 'DAY2 28일', value: '2' },
  { label: 'DAY3 29일', value: '3' },
  { label: 'DAY4 30일', value: '4' },
] as const;

export const dayTabLabels = dayTabs.map(tab => tab.label);
export const dayTabValues = dayTabs.map(tab => tab.value);
