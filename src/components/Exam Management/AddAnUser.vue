<template>
  <UserManage @onAddNewUser="handleAddNewUser" @back="this.$emit('backToList')" />
</template>

<script>
import UserManage from './UserManage.vue'
export default {
  components: { UserManage },
  name: "AddAnUser",
  setup(props, ctx) {
    const handleAddNewUser = (user) => {
      console.log('user from adanuser', user)
      ctx.emit('addNewUser', user)
    }

    return {
      handleAddNewUser
    }
  }
}
</script>

<style>

</style>