 <template>
  <div>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>

        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="login.email"
        />

        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="login.password"
        />
      </div>

      <!-- El boton no recarga la pagina al darle prevent, al presionar activa el método loginUser -->
      <button type="submit" class="btn btn-primary" @click.prevent="loginUser">
        Ingresar
      </button>
    </form>
    
  </div>
</template>


<script>
import swal from 'sweetalert';

export default {
  // Data es una funcion que devuelve un objeto
   data() {
    return {
      login: {
        email: '',
        password: '',
      },
    };
  },
  methods: {    
      async loginUser(){      
      try{
        // console.log(this.login);
      // el post permite tambien enviar datos para que devuelva respuesta
      //Este es el endpoint que tiene definida la api creada en Backend la /api/user/login
      // axios.metodo(url, objeto). El metodo post permite enviar informacion sin que salga en la url, mayor privacidad
      let response = await this.$http.post('/api/usuario/login', this.login);
      //devuelve en consola un tokenReturn de autenticacion y un objeto usuario que tiene toda la info
      console.log(response.data);      
      let token = response.data.tokenReturn;
      let user = response.data.user;
      console.log(user);
      //Almacena en localStorage del navegador el token en la variable jwt (jwt es la herramienta del backend que genera token)
      //jwt json web token
      localStorage.setItem('jwt', token)
      //JSON.stringify convierte en cadena de texyo el objeto usuario
      localStorage.setItem('usuario', JSON.stringify(user))


        if (token){
        swal("Successfully logged!",`Usted se ha registrado con exito!`, "success");
        //accedo ametodos del router con $router
        this.$router.push('/home'); 
      }     
     }
        catch(error){
          swal("An error has ocurred!", "Revise sus datos de ingreso!", "error");
          console.log(error) 
    }    
    }
      
    
    },
  
};
</script>




<style scoped>
</style>