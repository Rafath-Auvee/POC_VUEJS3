<template>
  <div class="container">
    <div class="item1">
      <div class="img__container">
        <img src="/images/logo.svg" alt="">

        <div class="social">
          <span>
            <i class="fab fa-facebook fa-2x"></i>
          </span>
          
          <span>
            <i class="fab fa-youtube fa-2x"></i>
          </span>

          <span>
            <i class="fab fa-discord fa-2x"></i>
          </span>

        </div>
      </div>
      
    </div>
    <div class="item2">
        <div class="img__container">
          <img src="@/assets/poc_logo.svg" alt="">
        
        </div>
      
     <div class="wrapper">
        
        <div class="btns">
            <CustomLoginRegisterBtn buttonText="Login" :outline="false" @click="handleLoginRoute"/>
            <CustomLoginRegisterBtn buttonText="Register" :outline="true" @click="handleRegisterRoute"/>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import CustomLoginRegisterBtn from '../components/ui/CustomLoginRegisterBtn.vue'
export default {
  components: { CustomLoginRegisterBtn },
  name: 'LoginRegister',
  setup(props, ctx) {
    const router = useRouter();

    const handleLoginRoute = () => {
      router.push({
        name: 'Login'
      })
      console.log('login clicked')
    }
    const handleRegisterRoute = () => {
      router.push({
        name: 'Register'
      })
      console.log('register clicked')
    }

    return {
      handleLoginRoute,
      handleRegisterRoute
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .item1{
    background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .img__container{
      max-width: 50%;
      img{
        width: 100%;
      }
    }
    
    .social {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      bottom: -100px;
      span svg{
        width: 33px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .item2{
    @extend .item1;
    background: #fff;
    position: relative;
    .img__container {
      max-width: 150px;
      position: absolute;
      top: 85px;
    }
    .btns {
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 1rem
    }
    
    .wrapper{
      width: 55%;
      margin: 0 auto;
    }
  }
}
</style>