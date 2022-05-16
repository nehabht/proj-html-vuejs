<template>
  <header>
    <div class="container info-contacts d-flex justify-content-between align-items-center">
      <div class="header-left d-flex">
        <div>
          <span>icon</span>
          Open Hours: Mon - Sat - 9.00 - 18:00
        </div>
      </div>
      <div class="header-right d-flex">
        <div>
          <span>icon</span>
          <span>+1 (305) 1234-5678</span>
          <span>hello@example.com</span>
          <span>fb</span>
          <span>tw</span>
          <span>in</span>
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