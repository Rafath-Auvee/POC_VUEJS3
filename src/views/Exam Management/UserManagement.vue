<template>
  <UserList :allUsers="allUsers" @onAddUser="addUserBtnClick" @onUserEdit="userProfileEdit"  v-if="currentComp === 'UserList' "/>
  <AddAnUser @addNewUser="handleAddNewUser" v-else-if="currentComp === 'AddAnUser' " @backToList="onBack"/>
  <EditAnUser :selectedEditUser='selectedEditUser' @onEditUser="handleEditAnUser" @backToList="onBack" v-else />
</template>

<script>
import { ref } from '@vue/reactivity'
import EditAnUser from '../../components/Exam Management/EditAnUser.vue'
import UserList from '../../components/Exam Management/UserList.vue'
import AddAnUser from '../../components/Exam Management/AddAnUser.vue'
export default {
  components: { UserList, EditAnUser, AddAnUser },
  setup() {
    const allUsers = ref([
      {
        id: 1,
        name: 'Jisan Mia',
        img: '',
        email: 'abc@gmail.com',
        password: '#jsdf',
        position: 'Admin'
      },
      {
        id: 2,
        name: 'Zaheed Hasan',
        img: '',
        email: 'abc@gmail.com',
        password: '#jsdf',
        position: 'Admin'
      },
      {
        id: 3,
        name: 'Abrar Abir',
        img: '',
        email: 'abc@gmail.com',
        password: '#jsdf',
        position: 'User'
      },
      {
        id: 4,
        name: 'RS Shakil',
        img: '',
        email: 'abc@gmail.com',
        password: '#jsdf',
        position: 'User'
      },
      {
        id: 5,
        name: 'Kibria',
        img: '',
        email: 'abc@gmail.com',
        password: '#jsdf',
        position: 'User'
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

    const handleAddNewUser = (user) => {
      currentComp.value = 'UserList'
      console.log('add new user', user);
      allUsers.value = [...allUsers.value, {...user}]
      console.log(allUsers.value)
    }

    const handleEditAnUser = (user) => {
      currentComp.value = "UserList";
      console.log('Edit user', user);
      const updatedUser = allUsers.value.map(u => {
        if (u.id == user.id) {
          return {
            ...u,
            name: user.name,
            email: user.email,
            password: user.password,
            position: user.position
           }
        } return u
      })

      allUsers.value = [...updatedUser]
    }

    const onBack = () => {
      currentComp.value = 'UserList'
    }
    return {
      addUserBtnClick,
      userProfileEdit,
      currentComp,
      handleAddNewUser,
      allUsers,
      selectedEditUser,
      handleEditAnUser,
      onBack
    }
  }

}
</script>

<style lang="scss" scoped>

</style>