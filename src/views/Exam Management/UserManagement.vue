<template>
  <UserList :allUsers="allUsers" @onAddUser="addUserBtnClick" @onUserEdit="userProfileEdit"  v-if="currentComp === 'UserList' "/>
  <AddAnUser @onAddNewUser="handleAddNewUser" v-else-if="currentComp === 'AddAnUser' " />
  <EditAnUser :selectedEditUser='selectedEditUser' v-else />
</template>

<script>
import { ref } from '@vue/reactivity'
import EditAnUser from '../../components/Exam Management/EditAnUser.vue'
import UserList from '../../components/Exam Management/UserList.vue'
import AddAnUser from './AddAnUser.vue'
export default {
  components: { UserList, EditAnUser, AddAnUser },
  setup() {
    const allUsers = ref([
      {
        id: 1,
        name: 'Jisan Mia',
        img: '',
        position: 'admin'
      },
      {
        id: 2,
        name: 'Zaheed Hasan',
        img: '',
        position: 'admin'
      },
      {
        id: 3,
        name: 'Abrar Abir',
        img: '',
        position: 'user'
      },
      {
        id: 4,
        name: 'RS Shakil',
        img: '',
        position: 'user'
      },
      {
        id: 5,
        name: 'Kibria',
        img: '',
        position: 'user'
      },
    ])
    const comps = ['UserList', 'EditAnUser', 'AddAnUser']
    const currentComp = ref("UserList");
    const selectedEditUser = ref({})
    const addUserBtnClick = () => {
      console.log('add User btn clicked')
      currentComp.value = 'AddAnUser'
    }
    const userProfileEdit = (user) => {
      console.log('edit user', user)
      selectedEditUser.value = user;
      currentComp.value = 'EditAnUser';
    }

    const handleAddNewUser = (newUser) => {
      currentComp.value = 'UserList'
      console.log('add new user', newUser);
      allUsers.value = [...allUsers.value, {...newUser, id: Math.floor(Math.random() * 1000)}]
    }

    return {
      addUserBtnClick,
      userProfileEdit,
      currentComp,
      handleAddNewUser,
      allUsers
    }
  }

}
</script>

<style lang="scss" scoped>

</style>