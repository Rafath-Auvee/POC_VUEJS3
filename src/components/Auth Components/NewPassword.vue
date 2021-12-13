<template>
  <div class="otp_cont">

    <form v-on:submit.prevent>
      <CustomAuthInput v-model="newPassObj.newPass" placeholder="Enter new password" />
      <CustomAuthInput v-model="newPassObj.confirmPass" placeholder="Confirm password" />

      <CustomLoginRegisterBtn @click="handleNewPasswordSubmit" buttonText="Submit" />
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import CustomLoginRegisterBtn from '../../components/ui/CustomLoginRegisterBtn.vue'
import CustomAuthInput from './CustomAuthInput.vue'
export default {
  components: {  CustomLoginRegisterBtn, CustomAuthInput },
  name: 'NewPassword',
  setup() {
    const newPassObj = ref({
      newPass: '',
      confirmPass: ''
    })

    const currentStep = ref('otp')
    const handleNewPasswordSubmit = () => {
      console.log('handleNewPasswordSubmit btn clicked')
    }

    return {
      newPassObj,
      handleNewPasswordSubmit,
      currentStep
    }
  }
}
</script>

<style lang="scss" scoped>
.otp_cont {
  // height: calc(100vh - 125px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // gap: 1.8rem;
  margin: 0 1rem;


  form {
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    text-align: center;
    width: 400px;
    min-width: 200px;
    
  }
}


</style>