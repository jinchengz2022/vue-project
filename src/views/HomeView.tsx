import { defineComponent, watchEffect, Transition, ref } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'

import { Header } from './Header'
import { useSwipe } from './../hooks/useSwipe'
import { urlMap } from './../common/routerMap'
import { throttle } from './../common/throttle'
import { FooterButton } from './../shared/FooterButton'
import { InitialPage } from './InitialPage'

import s from './Home.module.scss'

export const HomeView = defineComponent({
  setup: (props, context) => {
    const router = useRouter()
    const route = useRoute()
    const mainRef = ref<HTMLElement | null>(null)
    const { direction, swiping } = useSwipe(mainRef, { beforeStartPrev: (e) => e.preventDefault() })

    const pushURL = throttle(() => {
      router.replace(`/home/${urlMap[route.name]}`)
    })

    watchEffect(() => {
      if (direction.value && swiping.value && direction.value === 'left') {
        pushURL()
      }
    })

    function currying(fn) {
      let args = []
      return function temp(...newArgs) {
        if (newArgs.length) {
          args = [...args, ...newArgs]
          return temp
        } else {
          let val = fn.apply(this, args)
          args = [] //保证再次调用时清空
          return val
        }
      }
    }

    return () => (
      <div class={s.wrapper}>
        <header>
          <Header />
        </header>
        <main ref={mainRef}>
          {/* <RouterView name="content">
            {({ Component }) => (
              <Transition
                enterActiveClass={s.enterActiveClass}
                enterFromClass={s.enterFromClass}
                leaveActiveClass={s.leaveActiveClass}
                leaveToClass={s.leaveToClass}
              >
                <Component />
              </Transition>
            )}
          </RouterView> */}
          <InitialPage />
          <FooterButton
            onClick={(e) => {
              console.log('wefsdf')
            }}
          />
        </main>
        <RouterView name="footerContainer" />
      </div>
    )
  }
})
