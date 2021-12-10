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

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
  font-family: 'Montserrat', sans-serif;
}

*{
  margin: 0;
  padding: 0;
}

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

