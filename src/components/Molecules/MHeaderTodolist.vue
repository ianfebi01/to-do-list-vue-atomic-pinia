<script lang="ts" setup>
import AButton from "../Atoms/AButton.vue";
import { ref } from "vue";
import { sortContent } from "@/utils/sort";
import { todolistStore } from "@/stores/todolist";
import { storeToRefs } from "pinia";
import { filterContent } from "@/utils/filter";
import MFilterList from "./MFilterList.vue";


interface Props {
  date: string;
}

const props = withDefaults(defineProps<Props>(), {
  date: "set your date",
});

// define emit
const emit = defineEmits(["clickButton"]);


// Show filter
const show = ref<boolean>(false)
</script>
<template>
  <div class="flex justify-between items-center container py-4 border-b-[1px] border-gray-200">
    <div class="flex flex-col">
      <span class="text-[18px] font-bold text-gray-800">To Do List</span>
      <span class="text-[12px] font-normal text-gray-500">{{
        props.date
      }}</span>
    </div>
    <div class="flex gap-4">
      <MFilterList />
      <AButton color="text-blue-600" bg="bg-blue-200" @click="emit('clickButton')">
        <template #default>
          <!-- <Icon name="mdi:plus" class="translate-y-[-1px] mr-1 font-bold" /> -->
          <span>New Task</span>
        </template>
      </AButton>
    </div>
  </div>
</template>
