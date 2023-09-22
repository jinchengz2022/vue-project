import { defineComponent } from 'vue'
import { RouterView, RouterLink, useRoute } from 'vue-router'

import s from './Footer.module.scss'


export const Footer = defineComponent(() => {
  return () => {
    const { name } = useRoute();

    const url = {
      'first': 'second',
      'second': 'third',
      'third': 'forth',
      'forth': 'done',
    }
    
    return (
      (
        <footer>
          <RouterLink to={`/home/${url[name]}`} class={s['done-hidden']}>
            done
          </RouterLink>
          <RouterLink to={`/home/${url[name]}`}>next</RouterLink>
          <RouterLink to={'/home/done'}>done</RouterLink>
        </footer>
      )
    )
  }
})
