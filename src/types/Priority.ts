export type Priority = {
  id: string;
  name: string;
  gradientColors: string[];
  title: string;
};

export const priorities: Priority[] = [
  {
    id: 'wlu',
    name: 'WLU',
    title: 'Wilfrid Laurier University',
    gradientColors: ['#4A90E2', '#67B26F'],
  },
  {
    id: 'wgu',
    name: 'WGU/ISC2',
    title: 'Western Governors University',
    gradientColors: ['#764BA2', '#667EEA'],
  },
  {
    id: 'shopify',
    name: 'Shopify',
    title: 'Shopify Development',
    gradientColors: ['#2E7D32', '#81C784'],
  },
  {
    id: 'konfer',
    name: 'Konfer',
    title: 'Konfer Project',
    gradientColors: ['#FF9A9E', '#FAD0C4'],
  },
  {
    id: 'jobs',
    name: 'Jobs',
    title: 'Job Search',
    gradientColors: ['#6B8DD6', '#8E37D7'],
  },
  {
    id: 'lcs',
    name: 'LCS',
    title: 'LCS Engineering',
    gradientColors: ['#48C6EF', '#6F86D6'],
  },
  {
    id: 'misc',
    name: 'Misc',
    title: 'Miscellaneous Tasks',
    gradientColors: ['#A8C0FF', '#3F2B96'],
  },
]; 