export interface SortContent {
  text: string
  value: string
  icon: string
}

export const sortContent: SortContent[] = [
  {
    text: 'Newest',
    value: 'sort-latest',
    icon: 'latest',
  },
  {
    text: 'Oldest',
    value: 'sort-oldest',
    icon: 'oldest',
  },
  {
    text: 'A-Z',
    value: 'sort-az',
    icon: 'az',
  },
  {
    text: 'Z-A',
    value: 'sort-za',
    icon: 'za',
  },
  {
    text: 'Unfinished',
    value: 'sort-unfinished',
    icon: 'unfinished',
  },
]
