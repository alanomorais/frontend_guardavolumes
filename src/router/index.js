import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Paciente from '../views/Paciente.vue'
import Armario from '../views/Armario.vue'
import Movimentacao from '../views/Movimentacao.vue'
import Login from '../views/Login.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Guard from '../services/middleware'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },

  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: Guard.auth,
  },
  {
    path: '/pacientes',
    name: 'Paciente',
    component: Paciente,
    beforeEnter: Guard.auth,
  },
  {
    path: '/armarios',
    name: 'Armario',
    component: Armario,
    beforeEnter: Guard.auth,
  },
  {
    path: '/movimentacoes',
    name: 'Movimentacao',
    component: Movimentacao,
    beforeEnter: Guard.auth,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
