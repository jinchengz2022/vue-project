import { defineComponent, HTMLAttributes, type PropType } from 'vue'

import s from './Icon.module.scss'

export const Icon = defineComponent({
  props: {
    styles: {
      type: Object as PropType<HTMLAttributes['style']>
    },
    onClick: {
      type: Function as PropType<(e?: MouseEvent) => void>
    }
  },
  setup: (props, context) => {
    const { styles, onClick } = props;
    
    return () => (
      <div class={s.icon} style={styles} onClick={onClick}>
        {context.slots.default?.()}
      </div>
    )
  }
})
