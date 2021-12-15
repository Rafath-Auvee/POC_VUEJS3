<template>
  <div class="otp_cont" v-if="currentStep == 'submitOtp'">

    <form v-on:submit.prevent>
      <CustomAuthInput v-model="userOtpInput" placeholder="Enter OTP" />

      <CustomLoginRegisterBtn @click="handleOtpSubmit" buttonText="Submit" />
    </form>
  </div>
  <NewPassword v-else-if="!isRegistrationPage && currentStep == 'newPass' " />
  <MainRegisterUser :isRegistrationPage="isRegistrationPage" v-else-if="isRegistrationPage && currentStep !== 'newPass' " />
</template>

<script>
import { ref } from '@vue/reactivity'
import CustomLoginRegisterBtn from '../../components/ui/CustomLoginRegisterBtn.vue'
import NewPassword from './NewPassword.vue'
import CustomAuthInput from './CustomAuthInput.vue'
import MainRegisterUser from './MainRegisterUser.vue'
export default {
  components: { CustomLoginRegisterBtn, NewPassword, CustomAuthInput, MainRegisterUser },
  name: 'submitOtp',
  props: {
    isRegistrationPage: {
      type: Boolean,
      default: () => false
    }
  },
  setup(props) {
    const userOtpInput = ref('')
    console.log(props.isRegistrationPage)

    const loginSteps = ref(['submitOtp', 'newPass', 'mainRegister']);
    const currentStep = ref('submitOtp')
    const handleOtpSubmit = () => {
      if(props.isRegistrationPage) {
        currentStep.value = 'mainRegister'
        console.log('submit otp from register page')
        return;
      }
      console.log('submit otp from login page')
      currentStep.value = 'newPass'
    }

    return {
      userOtpInput,
      handleOtpSubmit,
      currentStep
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';

.otp_cont {
  // height: calc(100vh - 125px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // gap: 1.8rem;
  // margin:0 1rem;

  form {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    text-align: center;
    width: 100%;
    max-width: 400px;
    min-width: 200px;
    
  }
}


</style>