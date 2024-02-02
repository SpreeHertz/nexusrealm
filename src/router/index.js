import { createRouter, createWebHistory } from 'vue-router'
import Enchanter from '../views/Enchanter.vue';
import Landing from '../views/Landing.vue';
import Profile from '../views/Profile.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing
    },
    {
      path: '/enchanter',
      name: 'enchanter',
      component: Enchanter
    },
    { 
      path: '/profile/:username', 
      component: Profile,
      props: true
  } /*,
  {
    path: '/projects/:projectname',
    component: Project, 
    props: true
  } */
  ]
});

export default router