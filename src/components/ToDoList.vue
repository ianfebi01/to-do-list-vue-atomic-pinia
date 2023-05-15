<script lang="ts" setup>
import type { List } from "@/types/todolist";
import OListTodolist from "./Organisms/OListTodolist.vue";
import { ref } from "vue";
import { todolistStore } from "../stores/todolist";
import { storeToRefs } from "pinia";
import moment from "moment";
import MHeaderTodolist from "./Molecules/MHeaderTodolist.vue";
import OModalAddTodo from "./Organisms/OModalAddTodo.vue";

// define Store
const store = todolistStore();

const { filterList } = storeToRefs(store);


// Modal
const modal = ref<boolean>(false);

const changeStatus = () => { };
</script>
<template>
  <MHeaderTodolist :date="moment(new Date()).format('MMMM YYYY')" @click-button="modal = true" />
  <div class="container text-40 flex flex-col grow-[1] py-4">
    <OListTodolist :datas="filterList" @change-status="changeStatus()" />
  </div>
  <OModalAddTodo v-model="modal" />
</template>
