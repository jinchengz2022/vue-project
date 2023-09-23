import { defineComponent } from 'vue'

import { Content } from './Content'

import s from './Footer.module.scss'

export const Third = defineComponent({
  setup: (props, context) => {

    const slots = {
      logo: () => <p>logo 3~</p>,
      content: () => <p>conntent 3~</p>
    }

    return () => (
      <div class={s.wrapper} style={{ backgroundColor: 'red' }}>
        <Content v-slots={slots} />
      </div>
    )
  }
})
