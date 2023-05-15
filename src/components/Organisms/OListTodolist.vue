<script lang="ts" setup>
// import type { todolistStore } from "~~/store/todolist";

import type { List } from "@/types/todolist";
import ATitleList from "../Atoms/ATitleList.vue";
import MChecked from "../Molecules/MChecked.vue";
import MSubtitleList from "../Molecules/MSubtitleList.vue";
import { todolistStore } from "@/stores/todolist";

//  define Props
interface Props {
  datas: List[];
}
const props = defineProps<Props>();


// define Store
const listStore = todolistStore();





// function

var str2bool = (value: string): boolean => {

  if (value.toLowerCase() === "1") return true
  else return false


}
const changeStatus = (val: string, id: number) => {
  listStore.changeStatus(str2bool(val), id)

};
</script>
<template>
  <template v-if="datas.length">
    <ul>
      <li v-for="(item, i) in props.datas" :key="i"
        class="flex items-center gap-4 hover:bg-slate-100 p-2 border border-none rounded-[8px] transition-color duration-300 ease">
        <input type="checkbox" :checked="(item?.is_active as boolean)" :value="item?.is_active ? 0 : 1"
          className="outline-none focus:outline-none focus:ring-0 text-primary w-5 h-5 border cursor-pointer border-[#C7C7C7]"
          @change="(e) => changeStatus((e.target as HTMLInputElement).value, item.id as number)" />
        <div class="flex flex-col">
          <ATitleList :title="item.name" />
          <MSubtitleList :description="item.description" :location="item.location" :date="item.date" />
        </div>
      </li>
    </ul>
  </template>
  <template v-else>
    <div class="flex items-center justify-center grow-[1]">
      <img src="/img/Empty.svg" alt="" />
    </div>
  </template>
</template>
