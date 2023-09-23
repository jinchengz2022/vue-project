import { defineComponent } from 'vue'

import { Content } from './Content'
import { Button } from '../../shared/MyButton'

import s from './Footer.module.scss'

export const First = defineComponent({
  setup: (props, context) => {
    const slots = {
      logo: () => <p>logo1 ~</p>,
      content: () => <p>conntent1 ~</p>
    }

    return () => (
      <div class={s.wrapper} style={{ backgroundColor: 'white' }}>
        <Content v-slots={slots} />
        <Button>test</Button>
      </div>
    )
  }
})
