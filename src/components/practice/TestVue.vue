<script setup>
import { ref, provide } from 'vue'
import CustomInput from '../CustomInput.vue'
import ChildComponent from '../ChildComponent.vue'
import SlotComponent from '../SlotComponent.vue'
import TeleportTest from '../TeleportTest.vue'
// import SuccessComponent from './../components/SuccessComponent.vue'
// import ErrorComponent from './../components/ErrorComponent.vue'
import { useMouseOffset } from '../../hooks/useMouseOffset'

const firstName = ref('xiaoxixi')
const fullName = ref('lehehe')
const { x, y } = useMouseOffset()

const childEvent = () => {
  console.log('child - event ~')
}

provide('father_message', childEvent)

// const AsyncCom = defineAsyncComponent(() => new Promise((res) => res(SuccessComponent)))

// const AsyncComponent = defineAsyncComponent({
//   loader: () => { console.log('loading~');},
//   loadingComponent: AsyncCom,
//   delay: 2000,
//   errorComponent: ErrorComponent,
//   timeout: 3000
// })
</script>

<template>
  <!-- <AsyncComponent /> -->
  <h1>{{ firstName }} - {{ fullName }}</h1>
  <CustomInput
    v-model:firstName="firstName"
    v-model:fullNameProps="fullName"
    class="attr-wrapper"
  />
  <SlotComponent>
    <template #slot_sibling2>
      <h3>slot content2</h3>
    </template>
    <h3>default slot content</h3>
    <template v-slot:slot_sibling4>
      <h3>slot content4</h3>
    </template>
  </SlotComponent>
  <ChildComponent />
  <p>{{ x }} - {{ y }}</p>
  <p>translate: {{ $translate('getting.hello') }}</p>
  <TeleportTest/>
</template>

<style></style>
