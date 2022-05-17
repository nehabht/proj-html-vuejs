<template>
  <header>
    <div class="container info-contacts d-flex justify-content-between align-items-center">
      <div class="header-left d-flex">
        <div>
          <font-awesome-icon icon="fa-solid fa-clock" />
          Open Hours: Mon - Sat - 9.00 - 18:00
        </div>
      </div>
      <div class="header-right d-flex ">
        <div>
          <font-awesome-icon icon="fa-solid fa-phone" />
          <span>+1 (305) 1234-5678</span>
          <span class="ms-2">
              <font-awesome-icon icon="fa-solid fa-envelope" />
              hello@example.com</span>
          <span>
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </span>
          <span>
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </span>
          <span>
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </span>
        </div>
      </div>
    </div>
  </header>
    

</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
header {
  background-color: #122439;
  height: 60px;
  color: lightgray;
}

.info-contacts {

    height: 100%;

    span{
        margin: 0 10px;
    }
}


</style>