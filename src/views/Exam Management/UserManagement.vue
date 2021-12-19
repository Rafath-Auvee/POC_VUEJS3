<template>
  <div class="container">
    <div class="btns">
      <CustomAdminBtn @onClick="handleAddUser" icon="fas fa-plus" type="primary">
        Add User
       </CustomAdminBtn>
    </div>

    <div class="profile__cont">
      <div class="profile" v-for="user in allUsers" :key="user.id">
        <div class="img__container">
          <img src="/images/profile1.jpg" alt="">
        </div>
        <p class="name">{{user.name}}</p>
        <p class="position">{{user.position}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import CustomAdminBtn from '../../components/ui/CustomAdminBtn.vue'
export default {
  name: 'UserManagement',
  components: {
    CustomAdminBtn
},
  setup(props) {
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
    const handleAddUser =() => {
      console.log('handle add user')
    }
    return {
      allUsers,
      handleAddUser
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .btns {
    max-width: 200px;
  }
  .profile__cont {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
    .profile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.3rem;
      cursor: pointer;
      p.name{
        font-weight: 800;
        font-size: 1.2rem;
        line-height: 1.3re;
        letter-spacing: -0.011em;
        color: #000;
        text-transform: capitalize;
        
      }
      p.position {
        color: #00a9dc;
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1rem;
        text-transform: capitalize

      }
    }
  }
  .img__container{
    border-radius: 18px;
    min-width: 80px;
    width: 120px;
    height: 120px;
    min-height: 80px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
      border-radius: 50%;
    }
  }
}
</style>