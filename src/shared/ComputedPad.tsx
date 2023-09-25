import { count } from 'console'
import { defineComponent, HTMLAttributes, ref, type PropType } from 'vue'
import { Popup, DatePicker } from 'vant'

import { DateIcon } from '../assets/icons/DateIcon'
import s from './ComputedPad.module.scss'

const computedAry = new Array(13).fill(0)
const computedMap = {
  9: '0',
  10: 'clear',
  11: 'ok',
  12: '.'
}
const exchangeDate = (date: Date) => {
  const y = String(date.getFullYear())
  const m = String(date.getMonth() + 1)
  const formatteM = m.length === 1 ? '0' + m : m
  const d = String(date.getDate())
  const formatteD = d.length === 1 ? '0' + d : d

  return [y, formatteM, formatteD]
}

export const ComputedPad = defineComponent({
  props: {
    styles: {
      type: Object as PropType<HTMLAttributes['style']>
    },
    onClick: {
      type: Function as PropType<(e?: MouseEvent) => void>
    }
  },
  setup: (props, context) => {
    const { styles, onClick } = props
    const countRef = ref('0')
    const currentDateRef = ref(exchangeDate(new Date()))
    const openDatePicker = ref(false)

    const addCount = (e: TouchEvent | MouseEvent, num: number) => {
      const sb = String(num)
      const currentCount = countRef.value

      if (sb === '10') {
        countRef.value = '0'
        return
      }

      if (
        currentCount.length >= 12 ||
        sb === '11' ||
        (sb === '11' && currentCount.includes('.')) ||
        (sb === '9' && currentCount === '0')
      ) {
        return
      } else {
        if (currentCount === '0' && sb !== '12') {
          countRef.value = String(num + 1)
        } else {
          countRef.value += computedMap?.[sb] ?? String(num + 1)
        }
      }
    }

    const onOpenDatePicker = () => {
      openDatePicker.value = true
    }

    return () => (
      <div class={s['pad_wrapper']} style={styles} onClick={onClick}>
        <div class={s['pad_input_wrapper']}>
          <div class={s['pad_input_icon']} onTouchstart={onOpenDatePicker} onClick={onOpenDatePicker}>
            <DateIcon />
            <span>{currentDateRef.value.join('-')}</span>
          </div>
          <span>{countRef.value}</span>
        </div>
        <div class={s['pad_grid_wrapper']}>
          {computedAry.map((_, idx) => (
            <button onClick={(e) => addCount(e, idx)} onTouchend={(e) => addCount(e, idx)}>
              {computedMap?.[idx] ?? idx + 1}
            </button>
          ))}
        </div>
        <Popup position="bottom" v-model:show={openDatePicker.value}>
          <DatePicker
            cancelButtonText=" "
            confirmButtonText=" "
            v-model={currentDateRef.value}
          />
        </Popup>
      </div>
    )
  }
})
