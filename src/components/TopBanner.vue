<template>
<div>
<div >
 <!-- carousel -->
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
          </ol>
          <div class="carousel-inner">
              <div class="carousel-item active">
                 <img src="../../public/imagenes/uno.png" alt="">                  
                  <div class="carousel-caption d-none d-md-block">
                      <h5>STORY TELLING</h5>
                      <p>Alimenta tu Espíritu</p>
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="../../public/imagenes/dos.png" alt="">                  
                  <div class="carousel-caption d-none d-md-block">
                      <h5>STORY TELLING</h5>
                      <p>Expande Tu Universo</p>
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="../../public/imagenes/tres.png" alt="">                                    
                  <div class="carousel-caption d-none d-md-block">
                      <h5>STORY TELLING</h5>
                      <p>Historias que inpiran</p>
                  </div>
              </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </a>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: 'TopBanner',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


