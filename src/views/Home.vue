<template>
  <div class="home">
    <router-link :to='{name: "LoginRegister"}'>
      <h2>
        Go to Login/register
      </h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
.home{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    font-size: 1.8rem;
    background: rgb(99, 99, 226);
    color: white;
    display: inline-block;
    padding: 1rem 1.5rem;
    border-radius: 8px;

  }
}
</style>