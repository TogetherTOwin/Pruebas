<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">MisionTIC2022</a>
        <form class="d-flex">
          <button class="btn btn-outline-danger" type="submit"
           @click.prevent="logoutUser">Salir
          </button>
          
          <button class="btn btn-outline-danger" type="submit"
           @click.prevent="getUserData">data
          </button>

        </form>
      </div>
    </nav>

    <div>
        <ul class="list-group">
        <li class="list-group-item"> <span>Nombre: </span> {{user.nombre}}</li>
        <li class="list-group-item"> <span>Email :</span>{{user.email}} </li>        
      </ul>

    </div>

  </div>



</template>



<script>
export default {      
    data() {
    return {
      user: {
      },        
    };
  },
  methods: {
    getUserData(){
        let token = localStorage.getItem('jwt');
        let user = localStorage.getItem('usuario');
        
        if (token){
          this.user= JSON.parse(user);
          console.log(this.user);
        }


    },        
      
    logoutUser() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("usuario");      
      this.$router.push('/'); 
    },

    
},

created(){
    this.getUserData();

}

}
</script>