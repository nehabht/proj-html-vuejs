<template>
  <div class="col-3" >
    <h4>{{ menuTitle }}</h4>
    <ul>
      <li v-for="(link, index) in menuLinks" :key="index">
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
        <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'FooterItems',
    props : {
        menuTitle: String,
        menuLinks: Array
    }
};
</script>

<style lang="scss" scoped>
ul{
    list-style: none;
    padding: 0;
}

a{
    padding-left: 10px; 
    text-decoration: none;
    color: #bcbebc;


    &:hover{
        color: white;
    }
}

h4{
    color: white;
    font-weight: 600;
}

.fa-chevron-right{
    color: #bcbebc;

}

.row{
    flex-wrap: nowrap;
}

.col-3{
    background-color: #1d2023;
    margin: 20px 0px;
    padding: 40px 45px;
    border-radius: 8px;
    width: 270px;
    

    li{
        padding: 6px 0px;
    }
}
</style>