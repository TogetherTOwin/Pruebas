<template>
 
<div class="container mt-5">
    <the-login/>
</div>

</template>


<script>
//Se referencia al componnte TheLogin en una nueva carpeta auth
import TheLogin from "@/components/auth/TheLogin.vue";
export default {
    components:{
        TheLogin
    }
}
</script> 