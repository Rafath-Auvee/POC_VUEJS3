<template>
  <div class="container">

    <div class="img__container">
      <img src="/images/placeholderImg2.svg" alt="">
      <span><i class="fas fa-edit "></i></span>
    </div>
  

    <div class="form__area">
      <input placeholder="Your name*" type="text" class="input__field">

      <input placeholder="Email Address(Optional)" type="email" class="input__field">

      <select name="label" id="label" aria-placeholder="Level">
        <option value="JSC">JSC</option>
        <option value="SSC">SSC</option>
        <option value="HSC">HSC</option>
        <option value="O-Label">O-Label</option>   
        <option value="A-Label">A-Label</option>
      </select>

      <select name="batch" id="batch">
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>


      <select name="division" id="division">
        <option value="dhaka">Dhaka</option>
        <option value="sylhet">Sylet</option>
        <option value="comilla">Comilla</option>
      </select>

      <input placeholder="School/Collage" type="text" class="input__field">
      <button @click="handleRegisterNewUser" class="edit__btn">Register</button>

    </div>


  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: "MainRegisterUser",
  props: {
    isRegistrationPage: {
      type: Boolean,
      default: () => false
    }
  },

  setup(props) {
    const router = useRouter()
    const handleRegisterNewUser = () => {
      router.push('/dashboard')
    }
    return {
      handleRegisterNewUser
    }
  }
  
}
</script>

<style lang="scss" scoped>

.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h2{
  font-style: normal;
  font-weight: bold;
  font-size: 2.3rem;
  line-height: 90px;
  text-align: center;
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
	-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.img__container{
  height: 170px;
  width: 170px;
  border-radius: 50%;
  position: relative;
  padding-top: 0.3rem;
  background: #dddddd;
}
.img__container img{
  width:100%;
  height: 100%;
}

.img__container span{
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 46px;
  width: 46px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  background: #00A9DC;
  cursor: pointer;
}


.form__area{
  width: 100%;
  height: 100%;
  
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  grid-gap:2rem 1.2em;
}

.form__area .input__field,  .form__area select, .edit__btn{
  border-radius: 1.1rem;
  outline: none;
  font-size: 1.1rem;
  padding: 1rem 1.1rem;
  border: 1.5px solid #00D4FE
;
}
.form__area select option {
  // text-transform: uppercase;
}

.edit__btn{
  border: none;
  outline: none;
  width: 100%;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
  grid-column-start: 2;
}


@media  (max-width:768px) {
  .form__area .input__field,  .form__area select, .edit__btn{
    border-radius: 1rem;
    outline: none;
    font-size: 1.1rem;
    padding: 0.9rem 1rem;
  }
  .container .form__area{
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  

  .edit__btn{
   grid-column-start: 1;
   margin-bottom: 1rem;
  }
}

@media  (min-width:1115px) {
  .form__area{
    max-width: 70%;
  }
}


</style>
