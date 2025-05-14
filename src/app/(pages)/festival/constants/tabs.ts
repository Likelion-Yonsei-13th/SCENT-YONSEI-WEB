export const tabs = [
  { label: 'DAY2 28일', value: 'day2-28' },
  { label: 'DAY3 29일', value: 'day3-29' },
  { label: 'DAY4 30일', value: 'day4-30' },
] as const;

export const tabLabels = tabs.map(tab => tab.label);
export const tabValues = tabs.map(tab => tab.value);
