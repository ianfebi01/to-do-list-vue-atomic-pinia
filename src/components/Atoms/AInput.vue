<script lang="ts" setup>
import { computed, onMounted, ref, toRef } from 'vue';
import { useField } from 'vee-validate'
import IconAlert from "~icons/mdi/alert-circle-outline";

const emit = defineEmits(["input", "blur", "update:modelValue"]);

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  isPassword: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  sideLabel: {
    type: String,
    required: false,
    default: '',
  },
  fieldStyle: {
    type: String,
    required: false,
    default: 'normal',
  },
})

const isPasswordShow = ref<boolean>(false)

const fieldType = computed(() => {
  if (props.isPassword && isPasswordShow.value) return 'text'

  return props.type
})

const toggleVisible = () => {
  isPasswordShow.value = !isPasswordShow.value
}

const { value, handleBlur, errors } = useField(toRef(props, 'name'), undefined)

onMounted(() => {
  if (props.fieldStyle === 'gender') {
    value.value = 'male'
  }
})
</script>
<template>
  <template v-if="fieldStyle === 'normal'">
    <label :for="name" class="text-14 font-weight-medium">
      {{ label }}
      <span v-if="required" class="required">*</span>
    </label>
    <input :id="name" v-model="value" v-types="type" :class="`mt-1 z-20 transition-all ease-in-out duration-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-white ${errors[0]
      ? 'dark:border-red-500 dark:focus:border-red-500 '
      : 'dark:border-gray-300 dark:focus:border-gray-400 '
      } dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-gray-600 outline-none`" :placeholder="placeholder"
      :type="fieldType" @blur="handleBlur" />

    <div
      :class="`flex items-center gap-[5px] transition-all duration-300 ease-in-out ${errors[0] ? 'opacity-100 translate-y-0 mt-1' : 'opacity-0 translate-y-[-30px]'}`">
      <IconAlert class="text-12 text-red-600" />
      <span class="text-12 text-red-600">
        {{ errors[0] }}
      </span>
    </div>

  </template>
</template>
