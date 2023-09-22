import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

import { Content } from './Content'

import s from './Footer.module.scss'

export const First = defineComponent({
  setup: (props, context) => {
    const slots = {
      logo: () => <p>logo1 ~</p>,
      content: () => <p>conntent1 ~</p>,
    }

    return () => (
      <main class={s.wrapper}>
        <Content v-slots={slots} />
      </main>
    )
  }
})
