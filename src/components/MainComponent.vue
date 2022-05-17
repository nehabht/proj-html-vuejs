<template>
    <main >
        <div class="container">
            <div class="navbar d-flex justify-content-between">
                <div>
                    <img src="@/assets/img/logo.png" alt="">
                </div>
                <NavbarMenu />

            </div>
            
            

        </div>
    </main>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";

export default {
  components: {
    NavbarMenu
  },
  
};
</script>

<style lang="scss" scoped>
.navbar{
    img{
        height: 45px;
    }

}
</style>