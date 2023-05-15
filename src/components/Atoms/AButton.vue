<script lang="ts" setup>
import { computed, type ComputedRef } from "vue";
import ALoader from "./ALoader.vue";

const emit = defineEmits(["click"]);

// Props
interface Props {
  color?: string;
  bg?: string;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  loading?: boolean;
  border?: boolean;
  fontWeight?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: "text-white",
  bg: "bg-blue-600",
  type: "button",
  disabled: false,
  loading: false,
  border: false,
  fontWeight: "font-bold",
});

// `h-[44px] px-4 hover:brightness-[0.95] transition-all duration-300 font-${props.fontWeight
//   } text-[14px] border ${props.border ? `border-${props.color}` : "border-none"
//   } rounded-lg ${background} text-${props.color}`


const buttonClass: ComputedRef<string[]> = computed((): string[] => {
  const result: string[] = [];
  result.push(
    "h-[44px] px-4 transition-all duration-300 text-[14px] border rounded-lg font-bold"
  );
  result.push(props.fontWeight);
  result.push(`${props.border ? `border-${props.color}` : "border-none"}`);
  result.push(props.color);
  result.push(props.disabled ? `brightness-[0.9] ${props.bg}` : `hover:brightness-[0.95] ${props.bg}`);
  return result;
});
</script>

<template>
  <button :type="props.type" :class="buttonClass" :disabled="props.disabled" @click="emit('click')">
    <slot v-if="!props.loading" />
    <ALoader v-else />
  </button>
</template>
