<script lang="ts" setup>
import moment from "moment";
import ASubtitleList from "../Atoms/ASubtitleList.vue";
import IconCircleMedium from "~icons/mdi/circle-medium";

// define Props
interface Props {
  description: string | undefined;
  location: string | undefined;
  date: string | undefined;
}
const props = defineProps<Props>();

// function
const formatDate = (date: string | undefined): string => {
  return moment(date).format("DD MMM YYYY");
};
</script>
<template>
  <div class="flex gap-2 justify-start">
    <ASubtitleList :title="props.description" />
    <IconCircleMedium class="text-[18px] font-normal text-gray-300 " />
    <ASubtitleList :title="props.location" />
    <IconCircleMedium class="text-[18px] font-normal text-gray-300 " />
    <ASubtitleList :title="formatDate(date)" font-weight="bold" color="blue-500" />
  </div>
</template>
