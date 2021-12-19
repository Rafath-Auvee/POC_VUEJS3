<template>
  <div class="container">
    <form class="" @submit.prevent="handleAddUser" >
      <AdminCustomInput label="Name" v-model="newUser.name" placeholder="Enter Name"/>
      <AdminCustomInput label="Email Address" v-model="newUser.email" placeholder="Enter Email Address"/>
      <AdminCustomInput label="Password" v-model="newUser.password" placeholder="Enter Password"/>

      <div class="select">
        <label>Position</label>
        <select name="position" id="position" v-model="newUser.position">
          <span>Position</span>
          <option selected disabled value="">Select Position</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>

      <div class="btn_div">
        <CustomAdminBtn icon="fas fa-plus" type="primary">
         Add An User
        </CustomAdminBtn>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import AdminCustomInput from "../../components/Exam Management/AdminCustomInput.vue";
import CustomAdminBtn from '../../components/ui/CustomAdminBtn.vue';
export default {
  name: "AddAnUser",
  components: { AdminCustomInput, CustomAdminBtn },
  setup(props, ctx) {
    const newUser = ref({
      name: "",
      email: "",
      password: "",
      position: ""
    })
    const handleAddUser = (event) => {
      event.preventDefault();
      ctx.emit('onAddNewUser', newUser.value)
    }
    return {
      newUser,
      handleAddUser
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
  padding: 1rem;

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
    max-width: 250px;
  }
}
</style>