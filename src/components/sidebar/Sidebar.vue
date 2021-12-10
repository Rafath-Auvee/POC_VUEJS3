<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <img alt="Vue logo" class= "poc_logo2" src="../../assets/poc_logo_small.png" />
      </span>
      <span v-else><img alt="Vue logo" class= "poc_logo" src="../../assets/poc_logo.png" /></span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
    <SidebarLink to="/exam-pack" icon="fas fa-chart-bar">Exam Pack</SidebarLink>
    <SidebarLink to="/friends" icon="fas fa-users">Friends</SidebarLink>
    <SidebarLink to="/image" icon="fas fa-image">Images</SidebarLink>
<!-- 
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span> -->
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #E5E5E5;
  --sidebar-item-hover: #00A9DC;
  --sidebar-item-active: #00A9DC;
}
</style>

<style scoped>
.poc_logo2
{
  width: 2rem;
  transition: 5s linear;
}
.poc_logo
{
  width: 9rem;
  transition: 0.2s linear;
}
.sidebar {
  color: black;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding-left: 1.5em;
  padding-right: 1.5em;
  padding-top: 2em;
  transition: 0.1s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 4em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  
  color: var(--sidebar-item-active);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>