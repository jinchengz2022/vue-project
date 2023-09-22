<script setup>
import { inject } from 'vue'

const msg = inject('father_message');
</script>

<template>
<div @click="() => {msg()}">111</div>
  <!-- <h3>{{ msg }}</h3> -->
</template>

<style></style>
