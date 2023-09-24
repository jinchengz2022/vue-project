import { defineComponent, HTMLAttributes, Teleport, type PropType } from 'vue'

import s from './OverLay.module.scss'

export const OverLay = defineComponent({
  props: {
    styles: {
      type: Object as PropType<any>
    },
    onClick: {
      type: Function as PropType<(e?: MouseEvent) => void>
    },
    visiable: {
      type: String as PropType<'hidden' | 'unset'>
    }
  },
  setup: (props, context) => {
    const { styles, visiable, onClick } = props
    const { slots } = context

    return () => (
      <Teleport to='body'>
        <div class={s['overlay_wrapper']} style={styles}>
          <div class={s['overlay_mask']} onClick={onClick} />
          <div class={s['overlay_content']}>
            <div>
              <span>{slots?.title?.()}</span>
            </div>
            <div>{slots?.items?.()?.map((i) => <p>{i}</p>)}</div>
          </div>
        </div>
      </Teleport>
    )
  }
})
