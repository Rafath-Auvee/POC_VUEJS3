<template>
  <div class="container">
    <div class="form">
      <AdminCustomInput v-model="user.name"/>
      <AdminCustomInput v-model="user.email" />

      <div class="btn_div">
        <div>
          <CustomAdminBtn icon="fas fa-edit" type="info" @onClick="handleEdit">
            Edit Info
          </CustomAdminBtn>
        </div>
        <div>
          <CustomAdminBtn icon="fas fa-edit" type="info">
            Change Password
          </CustomAdminBtn>
        </div>
        <div>
          <CustomAdminBtn type="info">
             Back
          </CustomAdminBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import AdminCustomInput from '../../components/Exam Management/AdminCustomInput.vue'
import CustomAdminBtn from '../../components/ui/CustomAdminBtn.vue';
export default {
  name: "AccountManagement",
  setup() {
    const user = ref({
      name: "Saul Ramirez",
      email: "ramirez@gmail.com"
    });

    const handleEdit = () => {
      // 
    }
    return {
      user,
      handleEdit
    };
  },
  components: { AdminCustomInput, CustomAdminBtn }
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

  .form{
    max-width: 950px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
    gap: 1.5rem;
    @include maxMedia(768px) {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }

  .btn_div {
    grid-column: 1 / 3;
    display: flex;
    gap: 1.5rem;

    div{
      // max-width: 200px;
      min-width: 170px;
    }
  }
}
</style>