<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div>
    <p>slot sibling1</p>
    <slot name="slot_sibling2" />
    <slot />
    <p>slot sibling3</p>
    <slot name="slot_sibling4" />
  </div>
</template>
