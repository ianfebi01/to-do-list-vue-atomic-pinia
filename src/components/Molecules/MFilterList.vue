<script lang="ts" setup>
import { todolistStore } from '@/stores/todolist';
import { filterContent } from '@/utils/filter';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import IconMenuUp from "~icons/mdi/menu-up";
import IconCheck from "~icons/mdi/check";
import { Vue3SlideUpDown } from "vue3-slide-up-down";

// define Store
const listStore = todolistStore();
const { filterBy } = storeToRefs(listStore);


// show filter dropdown
const show = ref<boolean>(false)

const handleFilter = (val: string) => {
  filterBy.value = val
  show.value = false
}

</script>

<template>
  <div class="relative h-[44px] z-10">
    <div
      className="absolute top-0 right-0 border rounded-[8px] border-blue-200 overflow-hidden  focus:border-primary cursor-pointer">

      <button type="button"
        :class="`flex justify-between w-[205px]  px-4 h-[44px] font-bold text-blue-600 text-14 items-center transition-all duration-300 ease-in-out rounded-tl-[4px] rounded-tr-[4px] ${show ? 'border-b-[1px] border-blue-200 bg-blue-200' : 'border border-none'} `"
        @click="show = !show">
        <span>{{ show ? 'Filter By?' : filterBy }}</span>
        <IconMenuUp
          :class="`text-18 transition-transform duration-300 ease-in-out ${show ? 'rotate-0' : 'rotate-180'}`" />
      </button>

      <Vue3SlideUpDown v-model="show" class="cursor-pointer">
        <div class=" border border-none rounded-[8px] bg-white h-auto w-[205px] shadow-card">
          <ul class="w-full  z-10">
            <li v-for="(item, index) in filterContent" :key="index"
              class="flex justify-between cursor-pointer text-gray-600 items-center w-full px-4 h-[44px] hover:bg-blue-100 transition-colors duration-300 ease-in-out border-blue-200 border-b-[1px] last:border-none"
              @click="handleFilter(item.text)">
              <span class="text-14"> {{ item.text }}</span>
              <IconCheck
                :class="`transition-opacity duration-300 ease-in-out ${filterBy === item.text ? 'opacity-100' : 'opacity-0'}`" />
            </li>
          </ul>
        </div>
      </Vue3SlideUpDown>

    </div>
  </div>
</template>
