<template>
  <div class="forgot" v-if="currentStep == 'sendOtp'">
    <h3 v-if="isRegistrationPage == false">
      Forgot Password
    </h3>

    <form  v-on:submit.prevent :class="isRegistrationPage && 'mt-4'">
      <CustomPhoneInput v-model="userPhoneNumber" placeholder="Enter your phone number" />

      <CustomLoginRegisterBtn @click="handleSendOtp" buttonText="Send OTP" />
    </form>
  </div>
  <SubmitOtp :isRegistrationPage="isRegistrationPage"  v-else />
</template>

<script>
import { ref } from '@vue/reactivity'
import CustomPhoneInput from './CustomPhoneInput.vue'
import CustomLoginRegisterBtn from '../ui/CustomLoginRegisterBtn.vue'
import SubmitOtp from './SubmitOtp.vue'
export default {
  components: { CustomPhoneInput, CustomLoginRegisterBtn, SubmitOtp },
  name: 'SendOtp',
  props: {
    isRegistrationPage: {
      type: Boolean,
      default: () => false
    }
  }, 
  setup(props) {
    const userPhoneNumber = ref('')
    console.log(props.isRegistrationPage)

    const loginSteps = ref(['sendOtp', 'submitOtp']);
    const currentStep = ref('sendOtp')
    const handleSendOtp = () => {
      currentStep.value = 'submitOtp'
      if(props.isRegistrationPage) {
        console.log('send otp from resister page');
        return;
      }
      console.log('send otp from login page')
    }

    return {
      userPhoneNumber,
      handleSendOtp,
      currentStep,
    }
  }
}
</script>

<style lang="scss" scoped>
.forgot {
  height: calc(100vh - 125px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // gap: 1.8rem;
  // margin: 0 1rem;
  .mt-4 {
    margin-top: 5rem;
  }

  h3{
    margin: 1.6rem 0;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    line-height: 110px;
    text-align: center;
    background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    // margin: 0;
  }
  form {
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