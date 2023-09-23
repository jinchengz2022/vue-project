import { defineComponent } from 'vue'
import { Content } from './Content'

import s from './Footer.module.scss'

export const Forth = defineComponent({
  setup: (props, context) => {
    const slots = {
      logo: () => <p>logo 4~</p>,
      content: () => <p>conntent 4~</p>,
    };

    return () => (
      <div class={s.wrapper} style={{ backgroundColor: 'orange'}} >
        <Content v-slots={slots}/>
      </div>
    )
  }
})
