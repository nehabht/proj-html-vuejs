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
        <JumboComponent />
    </main>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";
import JumboComponent from '@/components/JumboComponent.vue'

export default {
  components: {
    NavbarMenu,
    JumboComponent,
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