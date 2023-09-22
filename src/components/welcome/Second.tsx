import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

import { Content } from './Content'

import s from './Footer.module.scss'

export const Second = defineComponent({
  setup: (props, context) => {
    const slots = {
      logo: () => <p>logo 2~</p>,
      content: () => <p>conntent 2~</p>,
    };

    return () => (
      <main class={s.wrapper} style={{ backgroundColor: 'blue'}}>
        <Content v-slots={slots}/>
      </main>
    )
  }
})
