import { defineComponent, HTMLAttributes, type PropType } from 'vue'

import s from './NavBar.module.scss'

export const NavBar = defineComponent({
  props: {
    styles: {
      type: Object as PropType<HTMLAttributes['style']>
    }
  },
  setup: (props, context) => {
    const { styles } = props
    const { slots } = context

    return () => (
      <div class={s.navbar} style={styles}>
        <span class={s['svg_icon']}>
          {slots?.icon?.()}
        </span>
        <span>
          {slots?.text?.()}
        </span>
      </div>
    )
  }
})
