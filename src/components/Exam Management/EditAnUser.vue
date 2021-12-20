<template>
  <UserManage @back="this.$emit('backToList')" @onEditUser="handleEditUser" :selectedEditUser="selectedEditUser" :isEditUser="true" />
</template>

<script>
import UserManage from './UserManage.vue'
export default {
  components: { UserManage },
  name: 'EditAnUser',
  props: {
    selectedEditUser: {
      type: Object,
      required: () => true
    }
  },
  setup(props, ctx) {
    // console.log(props.selectedEditUser)
    const handleEditUser = (user) => {
      ctx.emit('onEditUser', user)
    }
    return {
      handleEditUser

    }
  }
}
</script>

<style>

</style>