import { defineComponent } from 'vue'

export const Content = defineComponent({
  setup: (props, context) => {
    const { slots } = context

    return () => (
      <div >
        {slots.logo?.()}
        {slots.content?.()}
        {/* {slots.footerContainer?.()} */}
      </div>
    )
  }
})
