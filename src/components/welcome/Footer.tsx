import { defineComponent } from 'vue'
import { RouterView, RouterLink, useRoute } from 'vue-router'

import { urlMap } from '../../common/routerMap'
import s from './Footer.module.scss'

export const Footer = defineComponent(() => {
  return () => {
    const { name } = useRoute();

    return (
      (
        <footer>
          <RouterLink to={`/home/${urlMap[name]}`} class={s['done-hidden']}>
            done
          </RouterLink>
          <RouterLink to={`/home/${urlMap[name]}`}>next</RouterLink>
          <RouterLink to={'/initial'}>done</RouterLink>
        </footer>
      )
    )
  }
})
