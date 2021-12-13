<template>
  <div class="login_cont" v-if="currentStep === 'login'">
    <h3>
      Login
    </h3>

    <form @submit.prevent="handleUserLogin">
      <CustomPhoneInput v-model="userAuthInput.phoneNumber" placeholder="Enter your phone number" />
      <CustomAuthInput v-model="userAuthInput.password" placeholder="Enter your password" type="text"/>

      <p>
        Don’t have an account? <router-link  :to="{name: 'Register'}"> <span class="special"> Register </span></router-link>
        <br />
        <span @click="handleForgotStep" class="special"> Forgot Password</span>
      </p>

      <CustomLoginRegisterBtn  buttonText="Login" />
    </form>
  </div>
    <SendOtp v-else/>
</template>

<script>
import { ref } from '@vue/reactivity'
import CustomAuthInput from '../../components/Auth Components/CustomAuthInput.vue'
import CustomPhoneInput from '../../components/Auth Components/CustomPhoneInput.vue'
import CustomLoginRegisterBtn from '../../components/ui/CustomLoginRegisterBtn.vue'
import SendOtp from '../../components/Auth Components/SendOtp.vue'
export default {
  components: { CustomAuthInput, CustomPhoneInput, CustomLoginRegisterBtn, SendOtp },
  name: 'Login',
  setup() {
    const userAuthInput = ref({
      phoneNumber: '',
      password: ''
    })
    const loginSteps = ref(['login', 'sendOtp']);
    const currentStep = ref('login')

    const handleForgotStep = () => {
      currentStep.value = 'sendOtp'
    }


    const handleUserLogin = () => {
      console.log('handle user login func called')
    }

    return {
      userAuthInput,
      handleUserLogin,
      handleForgotStep,
      currentStep
    }
  }
}
</script>

<style lang="scss" scoped>
.login_cont {
  height: calc(100vh - 125px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // gap: 1.8rem;
  margin: 0 1rem;

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
    width: 400px;
    min-width: 200px;
    p {
      color: #00325B;
      font-size: 1rem;
      line-height: 24px;
      .special {
        cursor: pointer;
        color: #00325a;
        text-decoration-line: underline;
        font-weight: bold;
      } 
    }
  }
}


</style>