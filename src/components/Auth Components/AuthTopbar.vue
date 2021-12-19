<template>
  <header>
    <div class="img__container">
      <img src="@/assets/poc_logo.svg" alt="">
    </div>

    <router-link :to="{name: 'Home'}" >
      <h3>
        Back To Home
      </h3>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'AuthTopbar'
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem;
  
 
  .img__container {
    max-width: 150px;
    @include maxMedia(500px) {
      max-width: 120px;
    }
    img{
      width: 100%;
    }
  }

  h3{
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 24px;
    text-decoration-line: underline;
    color: #000000;
    @include maxMedia(500px) {
      font-size: 1rem;
    line-height: 1.09rem;
    }
  }
}
</style>