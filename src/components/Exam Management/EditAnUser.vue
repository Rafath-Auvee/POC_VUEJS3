<template>
  <h1>thi is edit user page</h1>
</template>

<script>
export default {
  name: 'EditAnUser',
  props: {
    selectedEditUser: {
      type: Object,
      required: () => true
    }
  },
  setup(props) {
    console.log(props.selectedEditUser)
    return {

    }
  }
}
</script>

<style>

</style>