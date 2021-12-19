<!--
<template>
  <div>
    <h1>The sidebar is {{ collapsed ? 'closed' : 'open' }}</h1>
    <button @click="toggleSidebar">Toggle Sidebar</button>
  </div>
</template>

<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'
export default {
  setup() {
    return { collapsed, toggleSidebar }
  }
}
</script>
-->

<template>
  <StudentProfile />
</template>

<script>
import StudentProfile from '../../components/Exam Management/StudentProfile.vue'
export default {
  components: { StudentProfile },
  name: "Dashboard",
  
}
</script>

<style>

</style>