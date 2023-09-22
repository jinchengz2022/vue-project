import { defineComponent, Transition } from 'vue'
import { RouterView } from 'vue-router'

import { Header } from './Header'

import s from './Home.module.scss'

export const HomeView = defineComponent(() => {
  return () => (
    <div class={s.wrapper}>
      <header>
        <Header />
      </header>
      <main>
        <RouterView name="content">
          {({ Component }) => (
            <Transition 
            // name="slide-fade"
            enterActiveClass={s.enterActiveClass}
            enterFromClass={s.enterFromClass}
            leaveActiveClass={s.leaveActiveClass}
            leaveToClass={s.leaveToClass}
            >
              <Component />
            </Transition>
          )}
        </RouterView>
      </main>
      <RouterView name="footerContainer" />
    </div>
  )
})
