<template>
  <div class="app-container">
    <Sidebar />
    <div class="main">
      <slot />
    </div>
  </div>
  
</template>

<script>
import Sidebar from '../components/sidebar/Sidebar.vue'
export default {
  components: { Sidebar },
  name: 'AppLayout',
}
</script>