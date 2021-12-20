<template>
  <div class="container">
    <form class="" @submit.prevent="preventSubmit" >
      <AdminCustomInput label="Name" v-model="user.name" placeholder="Enter Name"/>
      <AdminCustomInput label="Email Address" v-model="user.email" placeholder="Enter Email Address"/>
      <AdminCustomInput label="Password" v-model="user.password" placeholder="Enter Password"/>

      <div class="select">
        <label>Position</label>
        <select name="position" id="position" v-model="user.position">
          <option selected disabled value="">Select Position</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>

      <div class="btn_div" v-if="isEditUser == false">
        <div>
          <CustomAdminBtn icon="fas fa-plus" type="primary" @onClick="addUserFromManage">
            Add An User
          </CustomAdminBtn>
        </div>
        <div>
          <CustomAdminBtn type="info" @onClick="this.$emit('back')">
            Back
          </CustomAdminBtn>
        </div>
      </div>
      <div class="more__btn" v-else>
        <div class="wrapper">
          <CustomAdminBtn icon="fas fa-edit" type="info" @onClick="editUserFromManage">
            Edit Info
          </CustomAdminBtn>
        </div>
        <div class="wrapper">
          <CustomAdminBtn icon="fas fa-trash" type="danger">
           Delete User
          </CustomAdminBtn>
        </div>
        <div class="wrapper">
          <CustomAdminBtn type="info" @onClick="this.$emit('back')">
           Back
          </CustomAdminBtn>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import AdminCustomInput from "./AdminCustomInput.vue";
import CustomAdminBtn from '../ui/CustomAdminBtn.vue';
export default {
  name: "UserManage",
  components: { AdminCustomInput, CustomAdminBtn },
  props: {
    selectedEditUser: {
      type: Object,
    },
    isEditUser: {
      type: Boolean,
      default: () => false
    }
  },
  setup(props, ctx) {
    // console.log(props.selectedEditUser)
    const user = ref({
      name: "",
      email: "",
      password: "",
      position: ""
    })
    user.value = props.isEditUser ? {...props.selectedEditUser} : {...user.value}

    const addUserFromManage = () => {
      ctx.emit('onAddNewUser', user.value)
    }

    const editUserFromManage = () => {
      if(props.isEditUser) {
        ctx.emit('onEditUser', user.value)
      }
    }
    
    const preventSubmit = (event) => {
      event.preventDefault();
    }
    return {
      user,
      preventSubmit,
      addUserFromManage,
      editUserFromManage
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
.container {
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form{
    max-width: 950px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
    gap: 1.5rem;
    @include maxMedia(768px) {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
  .select {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    label {
      margin-bottom: 0.4rem;
      font-size: 0.9rem;
      color: #000;
    }

  }
  #position {
    // height: 68%;
    // margin-top: auto;
    width: 100%;
    height: 100%;
    outline: none;
    border: 1.8px solid #00A9DC;
    font-size: 1rem;
    padding:  1rem;
  }
  .btn_div{
    display: flex;
    gap: 1rem;
    div {
      max-width: 250px;
      min-width: 120px;
    }
  }

  .more__btn {
    grid-column: 1 / 3;
    display: flex;
    gap: 1.5rem;
    .wrapper {
      max-width: 180px;
      min-width: 170px;
    }
  }
}
</style>