<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import MHeaderModal from "./MHeaderModal.vue";

// state

// define emit
const emit = defineEmits(["change", "update:modelValue"]);

// define props
interface Props {
  modelValue: boolean;
  title?: string;
  autoHeight?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: "Enter Title",
  autoHeight: false,
});

// v-model
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emit("update:modelValue", value);
  },
});

const isOpen = ref<boolean>(props.modelValue)

watch(() => props.modelValue, () => {
  if (!props.modelValue) {
    setTimeout(() => {
      isOpen.value = props.modelValue
    }, 500)
  } else {
    isOpen.value = props.modelValue
  }

})


// function
</script>
<template>
  <div
    :class="`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]
    md:h-full bg-[rgba(0,0,0,0.5)] transition-opacity duration-500 ${value ? 'opacity-100' : 'opacity-0'} ${isOpen ? 'translate-y-0' : 'translate-y-full'}`">
    <div class="relative w-full h-full flex items-center justify-center">
      <!-- content -->
      <div
        :class="`transition-all duration-500 ease-in-out relative flex flex-col gap-2 w-full max-w-[706px] ${autoHeight ? '' : 'h-full'
          } max-h-[604px] bg-white rounded-lg shadow py-2 px-5 ${modelValue ? 'translate-y-0 scale-100' : 'translate-y-full scale-0'}`">

        <slot />
      </div>
    </div>
  </div>
</template>
