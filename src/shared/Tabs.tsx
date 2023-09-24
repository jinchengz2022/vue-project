import { defineComponent, HTMLAttributes, ref, type PropType } from 'vue'

import s from './Tabs.module.scss'

const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => <div class={s.tabs}>{context?.slots.default?.()}</div>
  }
})

const Tabs = defineComponent({
  props: {
    styles: {
      type: Object as PropType<HTMLAttributes['style']>
    },
    defaultName: {
      type: String as PropType<string>
    },
    tabsChange: {
      type: Function as PropType<(name: string) => void>
    }
  },
  setup: (props, context) => {
    const { styles, defaultName, tabsChange } = props
    const { slots } = context
    const tabChildren: Record<string, any>[] = slots.default?.() ?? [];
    const itemName = ref(defaultName ?? tabChildren[0]?.props?.name);
    
    if (tabChildren.length === 0) {
      return console.warn('<Tabs> need one child')
    }

    for (let k = 0; k < tabChildren.length; k++) {
      if (tabChildren[k].type !== Tab) {
        throw new Error('<Tabs> children must is <Tab>~')
      }

      if (!tabChildren[k]?.props?.name) {
        console.warn('<Tab> need one name~')
      }
    }
    return () => {
      
  
      const updateItem = (name: string) => {
        itemName.value = name;
        tabsChange?.(name)
      }

      return (
        <div class={s.tabs} style={styles}>
          <nav>
            {tabChildren.map((ele) => (
              <ol
                class={itemName.value === ele?.props?.name ? s['tabs_tab'] : ''}
                onClick={() => updateItem(ele?.props?.name)}
              >
                {ele?.props?.name}
              </ol>
            ))}
          </nav>
        </div>
      )
    }
  }
})

Tabs.Tab = Tab

export { Tabs }
