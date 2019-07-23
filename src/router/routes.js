import Home from '../pages/Home/index.vue'
import Classify from '../pages/Classify/index.vue'
import Oneself from '../pages/Oneself/index.vue'
import Shop from '../pages/Shop/index.vue'
import Things from '../pages/Things/index.vue'

export default [{
    path: '/home',
    component: Home,
  },
  {
    path: '/classify',
    component: Classify,
  },
  {
    path: '/oneself',
    component: Oneself,
  },
  {
    path: '/shop',
    component: Shop,
  },
  {
    path: '/things',
    component: Things,
  },
  {
    path: '/',
    redirect: '/home'
  }
]