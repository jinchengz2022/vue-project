<script setup>
import { defineProps } from 'vue'

import DeepChild from '../practice/DeepChild.vue'

const props = defineProps(['title'])
const emit = defineEmits(['testEmit'])

const sendInfo = () => {
  emit('testEmit', '112233')
}
</script>

<template>
  <h2>child: {{ props.title }}</h2>
  <button @click="sendInfo">emit - test1</button>
  <button @click="$emit('testEmit', 'emit - test2')">emit - test2</button>

  <DeepChild/>
</template>

<style></style>
