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
  <StudentDashboard />
</template>

<script>
import StudentDashboard from '../../components/Exam Management/StudentDashboard.vue'
export default {
  components: { StudentDashboard },
  name: "Dashboard",
  
}
</script>

<style>

</style>