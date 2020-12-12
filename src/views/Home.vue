<template>
  <!-- <div class="home">
    
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
    <!-- <top-menu></top-menu> -->
    <!-- <top-banner></top-banner> -->

    <!-- <area-servicios id="services"> </area-servicios> -->
    

    <!-- Area de Noticias  -->

    <log-outmenu></log-outmenu>


    <div class="container-fluid">
       <api-news> </api-news>
    </div>

    <!-- Area de miembros  -->
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col mt-5" v-for="(item, index) of team" :key="index">
          <!-- v-bind se puede abreviar como :member solamente -->
          <team-card v-bind:member="item"></team-card>
        </div>
      </div>
    </div>
    <!-- <area-miembros> </area-miembros> -->
    <area-footer> </area-footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import TopMenu from "../components/TopMenu.vue";
// import TopBanner from "../components/TopBanner.vue";
// import AreaServicios from "../components/AreaServicios.vue";
// import AreaMiembros from '../components/AreaMiembros.vue'
import AreaFooter from "../components/AreaFooter.vue";
import TeamCard from "../components/TeamCard.vue";
import ApiNews from "../components/ApiNews.vue";
import LogOutmenu from "../components/auth/LogOutmenu.vue"


export default {
  name: "Home",
  components: {
    // HelloWorld
    // To  pMenu,
    // TopBanner,
    // AreaServicios,    
    // AreaMiembros,
    AreaFooter,
    TeamCard,
    ApiNews,
    LogOutmenu,

  },
  data() {
    return {
      team: [
        {
          codigo: 1,
          nombre: "Gustavo Gomez",
          descripcion:
            "Ingeniero Civil, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum ab ipsam tenetur molestias libero, numquam amet similique dignissimos exercitationem pariatur voluptas unde totam, cupiditate aliquid! Nesciunt ex qui facere.",
          rol: "Desarrollador Backend",
          // image : "//placeimg.com/150/150/city",
          image: "./gustav.jpeg",
        },
        {
          codigo: 2,
          nombre: "Nicolas Buitrago",
          descripcion:
            "Ingeniero Sistemas, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum ab ipsam tenetur molestias libero, numquam amet similique dignissimos exercitationem pariatur voluptas unde totam, cupiditate aliquid! Nesciunt ex qui facere.",
          rol: "Desarrollador backend",
          image: "./Nicolas.jpg",
        },
        {
          codigo: 3,
          nombre: "Santiago",
          descripcion:
            "Ingeniero Civil, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum ab ipsam tenetur molestias libero, numquam amet similique dignissimos exercitationem pariatur voluptas unde totam, cupiditate aliquid! Nesciunt ex qui facere.",
          rol: "Desarrollador backend",
          image: "./santiago.jpg",
        },

        {
          codigo: 4,
          nombre: "Harold",
          descripcion:
            "Ingeniero Electronico, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum ab ipsam tenetur molestias libero, numquam amet similique dignissimos exercitationem pariatur voluptas unde totam, cupiditate aliquid! Nesciunt ex qui facere.",
          rol: "Desarrollador backend",
          image: "./Harold.jpeg",
        },
        {
          codigo: 5,
          nombre: "Milena",
          descripcion:
            "Ingeniera Sistemas, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum ab ipsam tenetur molestias libero, numquam amet similique dignissimos exercitationem pariatur voluptas unde totam, cupiditate aliquid! Nesciunt ex qui facere.",
          rol: "Desarrollador backend",
          image: "./Milena.jpeg",
        },
      ],
    };
  },
  methods(){}
};
</script>
