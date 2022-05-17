<template>
    <div class="main_menu">
        <a :href="item.href" v-for="item in menu" :key="item.id" :class="item.text === 'GET IN TOUC' ? 'active' : ''">{{ item.text }}</a>
    </div>
</template>


<script>
export default {
  name: "NavbarMenu",
  data() {
    return {
      menu: [
        {
          id: 1,
          href: "#",
          text: "HOME",
        },
        {
          id: 2,
          href: "#",
          text: "SERVICES",
        },
        {
          id: 3,
          href: "#",
          text: "ABOUT",
        },
        {
          id: 4,
          href: "#",
          text: "PROJECTS",
        },
        {
          id: 5,
          href: "#",
          text: "RESULT",
        },
        {
          id: 6,
          href: "#",
          text: "GET IN TOUCH",
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main_menu {
  a {
        padding: 10px 20px;
        height: 100%;
        font-size: 15px;
        color: rgb(51, 51, 51);
        font-weight: 400;
        background-color: transparent;
        text-decoration: none;

            &:hover,
            &.active {

                
                color: white;
                background-color: #1c918e;
                border-radius: 3px;

            }
    }
}

</style>