<template>
  <div class="container">
    <div class="input">
      <input type="text" v-model="user.name">
      <input type="text" v-model="user.email">
    </div>

    <div class="btns">
      <button>Edit Info</button>
      <button>Change Password</button>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'AccountManagement',
  setup() {
    const user = ref({
      name: 'Saul Ramirez',
      email: 'ramirez@gmail.com'
    })

    return {
      user
    }
  }
}
</script>

<style lang="scss" scoped>

</style>