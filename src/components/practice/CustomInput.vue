<script setup>
import { computed } from 'vue'

const props = defineProps(['firstName', 'fullNameProps'])
const emit = defineEmits(['update:firstName', 'update:fullNameProps'])

const fullName = computed({
  get() {
    return props['fullNameProps']
  },
  set(value) {
    emit('update:fullNameProps', value)
  }
})

</script>

<template>
  <div v-bind="$attr">
    <input :value="firstName" @input="$emit('update:firstName', $event.target.value)" />
    <input v-model="fullName" />
  </div>
</template>
