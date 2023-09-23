import { defineComponent } from 'vue'

export const Content = defineComponent({
  setup: (props, context) => {
    const { slots } = context

    return () => (
      <div style={{ display: 'block'}}>
        
        <p>{slots.logo?.()}</p>
        <p>{slots.content?.()}</p>
      </div>
    )
  }
})
