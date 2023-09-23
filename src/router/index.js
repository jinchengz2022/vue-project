import { createRouter, createWebHistory } from 'vue-router'
import { HomeView } from '../views/HomeView'
import { First } from '../components/welcome/First'
import { Second } from '../components/welcome/Second'
import { Third } from '../components/welcome/Third'
import { Forth } from '../components/welcome/Forth'
import { Footer } from '../components/welcome/Footer'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'direct_home',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'direct_first',
          redirect: '/home/first'
        },
        {
          path: 'first',
          name: 'first',
          components: { content: First, footerContainer: Footer }
        },
        {
          path: 'second',
          name: 'second',
          components: { content: Second, footerContainer: Footer }
        },
        {
          path: 'third',
          name: 'third',
          components: { content: Third, footerContainer: Footer }
        },
        {
          path: 'forth',
          name: 'forth',
          components: { content: Forth, footerContainer: Footer }
        },
        {
          path: 'done',
          name: 'done'
        },
      ]
    },
    
  ]
})

export default router
