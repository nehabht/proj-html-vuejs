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
        <BusinessAreaComponent />
    </main>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";
import JumboComponent from '@/components/JumboComponent.vue'
import BusinessAreaComponent from '@/components/BusinessAreasComponent.vue'

export default {
  components: {
    NavbarMenu,
    JumboComponent,
    BusinessAreaComponent,
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