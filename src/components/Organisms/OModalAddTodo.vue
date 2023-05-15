<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import MModalVue from "../Molecules/MModal.vue";
import ATitleList from "../Atoms/ATitleList.vue";
import IconClose from "~icons/mdi/close";
import AButton from "../Atoms/AButton.vue";
import AInput from "../Atoms/AInput.vue";
import { Form as VeeForm } from 'vee-validate'
import * as yup from 'yup'
import { todolistStore } from "@/stores/todolist";
import { storeToRefs } from "pinia";

// define emit
const emit = defineEmits(["change", "update:modelValue"]);


// define Store
const listStore = todolistStore();
const { list } = storeToRefs(listStore);

// define props
interface Props {
  modelValue: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
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


// Validation

// validator schema
const schema = yup.object({
  name: yup.string().required('Nama tidak boleh kosong'),
  location: yup.string().required('Lokasi tidak boleh kosong'),
  description: yup.string().required('Deskripsi tidak boleh kosong'),
})


// submit
const form = ref<typeof VeeForm>()
const onSubmit = (values: Record<string, unknown>) => {
  list.value.push({ ...values, is_active: false, id: list.value.length + 1, date: today() })
  value.value = false
  form?.value?.resetForm()
}

const today = () => {
  return new Date(Date.now()).toISOString()
}

</script>
<template>
  <MModalVue v-model="value" :auto-height="true">
    <div class="flex justify-between items-center">
      <ATitleList title="Add Todo" font-weight="bold" font-size="24" />
      <div class="cursor-pointer" @click="value = false">
        <IconClose class="text-20" />
      </div>
    </div>
    <div class="flex flex-col gap-2 mb-2">
      <vee-form ref="form" :validation-schema="schema" @submit="onSubmit" v-slot="{ meta }">
        <div>
        </div>
        <AInput name="name" type="text" field-style="normal" label="Todo Name" placeholder="Menghapus jejakmu" required />
        <AInput name="location" type="text" field-style="normal" label="Location" placeholder="Wonosari" required />
        <AInput name="description" type="text" field-style="normal" label="Description"
          placeholder="I want to be superman" required />

        <div class="mt-6 flex justify-end gap-4">
          <AButton color="text-gray-600" bg="bg-gray-200" type="reset" @click="value = false">
            <span>Cancel</span>
          </AButton>
          <AButton color="text-blue-600" bg="bg-blue-200" type="submit" :disabled="!meta.touched">
            <span>Save</span>
          </AButton>
        </div>
      </vee-form>
    </div>
  </MModalVue>
</template>
