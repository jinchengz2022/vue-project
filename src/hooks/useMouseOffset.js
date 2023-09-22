import { ref } from 'vue';

import { useListener } from './useListener'

export function useMouseOffset() {
  const x = ref(0);
  const y = ref(0);

  useListener(window, "mousemove", (e) => {
    x.value = e.pageX;
    y.value = e.pageY;
  })

  return { x, y };
}