export interface FilterContent {
  text: string
  value: string
  icon: string
}

export const filterContent: FilterContent[] = [
  {
    text: 'All',
    value: 'all',
    icon: 'check',
  },
  {
    text: 'Done',
    value: 'done',
    icon: 'check',
  },
  {
    text: 'Undone',
    value: 'undone',
    icon: 'check',
  },
]
