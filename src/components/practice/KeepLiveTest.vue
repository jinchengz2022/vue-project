<script setup>
import { ref } from 'vue'

const count = ref(0);
const isChange = ref(true);


const addCount = () => {
  count.value++
}
</script>

<template>
  <div>
    <KeepLive>
      <input type="radio" value="A" v-model="isChange" />
      <input type="radio" value="B" v-model="isChange" />
      <!-- <component :is="isChange ? <div></div> :  <p></p>" /> -->
      <p>change</p>
      <button @click="addCount">+</button> <span> {{ count }}</span>
    </KeepLive>
  </div>
</template>
