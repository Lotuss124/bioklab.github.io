import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import People from '../views/People.vue'
import Photos from '../views/Photos.vue'
import Publications from '../views/Publications.vue'
import Software from '../views/Software.vue'
import Contact from '../views/Contact.vue'
import Join from '../views/Join.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/people',
      name: 'people',
      component: People,
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos,
    },
    {
      path: '/publications',
      name: 'publications',
      component: Publications,
    },
    {
      path: '/software',
      name: 'software',
      component: Software,
    },
    {
      path: '/join',
      name: 'join',
      component: Join,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的滚动位置（浏览器前进/后退），使用它
    if (savedPosition) {
      return savedPosition
    } else {
      // 否则滚动到页面顶部
      return { top: 0 }
    }
  },
})

export default router
