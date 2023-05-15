import { ref, type ComputedRef, computed, type WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { List } from '@/types/todolist'

export const todolistStore = defineStore('todolist', () => {
  const list = ref<List[]>([])
  const filterBy = ref<string>('All')

  const changeStatus = (val: boolean, id: number): void => {
    const index = list.value.findIndex((item) => item.id === id)
    if (index != -1) {
      list.value[index].is_active = val
    }
  }

  const filterList: WritableComputedRef<List[]> = computed(() => {
    let filtered: List[]
    switch (filterBy.value) {
      case 'All':
        return list.value
      case 'Done':
        filtered = list.value.filter((item) => item.is_active === true)
        return filtered
      case 'Undone':
        filtered = list.value.filter((item) => item.is_active === false)
        return filtered
      default:
        return list.value
    }
  })
  // const sortList = (value: string): void => {
  //   switch (value) {
  //     case 'sort-oldest':
  //       sortBy.value = value

  //       list.value?.sort((a, b) => {
  //         let fa = a?.id,
  //           fb = b?.id
  //         if (fa && fb) {
  //           if (fa < fb) {
  //             return -1
  //           }
  //           if (fa > fb) {
  //             return 1
  //           }
  //         }
  //         return 0
  //       })
  //       return
  //     case 'sort-latest':
  //       sortBy.value = value

  //       list.value?.sort((a, b) => {
  //         let fa = a?.id,
  //           fb = b?.id
  //         if (fa && fb) {
  //           if (fa > fb) {
  //             return -1
  //           }
  //           if (fa < fb) {
  //             return 1
  //           }
  //         }
  //         return 0
  //       })
  //       return
  //     case 'sort-az':
  //       sortBy.value = value

  //       list.value?.sort((a, b) => {
  //         let fa = a?.name?.toLowerCase(),
  //           fb = b?.name?.toLowerCase()
  //         if (fa && fb) {
  //           if (fa < fb) {
  //             return -1
  //           }
  //           if (fa > fb) {
  //             return 1
  //           }
  //         }
  //         return 0
  //       })
  //       return
  //     case 'sort-za':
  //       sortBy.value = value

  //       list.value?.sort((a, b) => {
  //         let fa = a?.name?.toLowerCase(),
  //           fb = b?.name?.toLowerCase()

  //         if (fa && fb) {
  //           if (fa > fb) {
  //             return -1
  //           }
  //           if (fa < fb) {
  //             return 1
  //           }
  //         }
  //         return 0
  //       })
  //       return
  //     case 'sort-unfinished':
  //       sortBy.value = value
  //       // @ts-ignore
  //       list.value?.sort((a, b) => {
  //         if (a && b) {
  //           // @ts-ignore
  //           return a?.is_active - b?.is_active
  //         }
  //       })
  //   }
  // }
  return {
    list,
    filterBy,
    changeStatus,
    filterList,
  }
})
