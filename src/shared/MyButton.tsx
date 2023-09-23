import { defineComponent, HTMLAttributes, type PropType } from 'vue'

import s from './Button.module.scss'

export const Button = defineComponent({
  props: {
    styles: {
      type: Object as PropType<HTMLAttributes['style']>
    }
  },
  setup: (props, context) => {
    const { styles } = props;
    
    return () => (
      <button class={s['my_button']} style={styles}>
        {context.slots.default?.()}
      </button>
    )
  }
})
