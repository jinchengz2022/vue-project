import { defineComponent, HTMLAttributes, ref, type PropType } from 'vue'

import { OverLay } from './../shared/OverLay'
import { NavBar } from './../shared/NavBar'
import { Icon } from './../shared/Icon'
import { Tabs, Tab } from './../shared/Tabs'

export const InitialPage = defineComponent({
  props: {
    styles: {
      type: Object as PropType<HTMLAttributes['style']>
    }
  },
  setup: () => {
    const open = ref(false)

    return () => {
      const closeOverLay = () => {
        open.value = false
      }

      const openOverLay = () => {
        open.value = true
      }

      const tabsChange = (n) => {
        console.log(n)
      }

      return (
        <div style={{ width: '100%', height: '100%'}}>
          {/* <NavBar>
            {{
              icon: () => (
                <Icon onClick={openOverLay}>
                  <svg
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4392"
                    width={200}
                    height={200}
                  >
                    <path
                      d="M864 496v32a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zM864 160v32a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32z m0 672v32a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32z"
                      fill="#ffffff"
                      p-id="4393"
                    ></path>
                  </svg>
                </Icon>
              ),
              text: () => 'base'
            }}
          </NavBar> */}
          <Tabs defaultName="item1" tabsChange={tabsChange}>
            <Tab name="item1">
              <p>create</p>
            </Tab>
            <Tab name="item2">
              <p>list</p>
            </Tab>
          </Tabs>
          {open.value ? (
            <OverLay onClick={closeOverLay}>
              {{ title: () => 'hello', items: () => ['lucy', 'jack', 'angle'] }}
            </OverLay>
          ) : null}
        </div>
      )
    }
  }
})
