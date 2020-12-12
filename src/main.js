import Vue from 'vue'
import App from './App.vue'
import router from './router'
//se importa axios para la conexion con la api de la autenticacion
import axios from 'axios'


// Se define una constante para la ruta para que no la tenga que llamar toda
//Constante en la que se almacena la url base par la autenticacion de usuario password
const base= axios.create({
  baseURL : 'https://glacial-everglades-74306.herokuapp.com/'
})
// se define que se usa base a traves de $http
Vue.prototype.$http = base;
 



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
