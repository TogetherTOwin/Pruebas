import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Servicios from '/..views/Servicios.vue'


Vue.use(VueRouter)

const routes = [
  {
    // Ruta 
    path: '/',
    // Vista 
    name: 'Login',
    // Componente 
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
    
  },
     
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    // La página no se muestra a no ser que la variable este TRUE 
    meta:{
      requireAuth: true 
    }
  },
  // {
  //   path: '/servicios',
  //   name: 'Servicios',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "servicios" */ '../views/Servicios.vue')
  // }

]
//En el min 39.30 del ciclo 3 dia 4 esta antes de routes asi:  mode: 'history', base:process.env.BASE_URL, routes
const router = new VueRouter({  
  routes
})
//Funcion de validacion para cada una de las rutas
//Antes de cada una de las rutas o de los procesos va a realizar una validacion
//To: hacia donde, From: desde donde, Next: continue
//Esta validacion se hace para que al borrar el token de la autenticacion, el usuario no pueda seguir en la pagina que se ha logeado
  //record es un nombre de una variable 
  //Si me coincide algunas de las rutas que estoy haciendo con el atributo meta.requireAuth        
    //jwt es variable en la cual se almaceno el token en el localStorage
  
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.getItem('jwt') === null) {
      next({
        path: '/'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
