import { defineComponent, onMounted, onUnmounted, Transition, computed, ref, type Ref } from 'vue'

type Point = { x: number; y: number };
type Options = {
  beforeStartPrev?: (e: TouchEvent) => void;
  afterStartPrev?: (e: TouchEvent) => void;
  beforeMovePrev?: (e: TouchEvent) => void;
  afterMovePrev?: (e: TouchEvent) => void;
  beforeEndPrev?: (e: TouchEvent) => void;
  afterEndPrev?: (e: TouchEvent) => void;
}

export const useSwipe = (element: Ref<HTMLElement | null>, options?: Options) => {
  
  const start = ref<Point>()
  const end = ref<Point>()
  const swiping = ref<boolean>(false)

  const distance = computed(() => {
  if (!end.value || !start.value) {
      return undefined
    }
    
    return {
      x: end.value.x - start.value.x,
      y: end.value.y - start.value.y
    }
  })

  
  const direction = computed(() => {
    if (!distance.value) {
      return undefined
    }

    const { x, y } = distance.value

    if (Math.abs(x) - Math.abs(y) > 0) {
      return x > 0 ? 'right' : 'left'
    } else {
      return y > 0 ? 'down' : 'up'
    }
  })

  const touchStart = (e: TouchEvent) => {
    options?.beforeStartPrev?.(e);

    start.value = {
      x: e?.touches?.[0]?.clientX ?? 0,
      y: e?.touches?.[0]?.clientY ?? 0
    }
    swiping.value = true

    options?.afterStartPrev?.(e);
  }

  const touchMove = (e: TouchEvent) => {
    options?.beforeMovePrev?.(e);

    end.value = {
      x: e?.touches?.[0]?.clientX ?? 0,
      y: e?.touches?.[0]?.clientY ?? 0
    }

    options?.afterMovePrev?.(e);
  }

  const touchEnd = (e: TouchEvent) => {
    options?.beforeEndPrev?.(e);

    swiping.value = false;
    start.value = null;
    end.value = null;

    options?.afterEndPrev?.(e);
  }

  onMounted(() => {
    if (!element) {
      return
    }

    element.value.addEventListener('touchstart', touchStart)
    element.value.addEventListener('touchmove', touchMove)
    element.value.addEventListener('touchend', touchEnd)
  })

  onUnmounted(() => {
    if (!element) {
      return
    }

    element.value?.removeEventListener?.('touchstart', touchStart)
    element.value?.removeEventListener?.('touchmove', touchMove)
    element.value?.removeEventListener?.('touchend', touchEnd)
  })

  return { direction, distance, swiping, start, end }
}
