import { defineComponent, HTMLAttributes, type PropType } from 'vue'

import s from './FooterButton.module.scss'

export const FooterButton = defineComponent({
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

    return () => (
      <div class={s['footer-button']} style={styles} onClick={onClick}>
        +
      </div>
    )
  }
})
