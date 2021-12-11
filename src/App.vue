<template>
  <div id="app">
     <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>


<script>


export default {

}
</script>

<style lang="scss">

@import '@/styles/base.scss';

#nav {
  padding: 70px;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



</style>

