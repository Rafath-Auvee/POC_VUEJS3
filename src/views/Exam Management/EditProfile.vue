<template>
  <div class="container">
    <h2>Edit Profile</h2>

    <div class="img__container">
      <img src="/images/jisanProfile.png" alt="">
      <span><i class="fas fa-edit "></i></span>
    </div>
  

    <div class="form__area">
      <input placeholder="Your name" type="text" class="input__field">

      <input placeholder="Your Email" type="email" class="input__field">

      <select name="batch" id="batch">
        <option value="HSC 2023">HSC 2023</option>
        <option value="HSC 2022">HSC 2022</option>
        <option value="HSC 2021">HSC 2021</option>
      </select>

      <input placeholder="School/Collage" type="text" class="input__field">

      <select name="division" id="division">
        <option value="dhaka">Dhaka</option>
        <option value="sylhet">Sylet</option>
        <option value="comilla">Comilla</option>
      </select>

      <button class="edit__btn">Edit</button>

    </div>


  </div>
</template>

<script>
export default {
  name: "EditProfile",
  
}
</script>

<style>

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
  font-size: 3rem;
  line-height: 110px;
  text-align: center;
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
	-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.img__container{
  height: 180px;
  width: 180px;
  border-radius: 50%;
  position: relative;
  padding-top: 0.3rem;
}
.img__container img{
  width:100%;
  height: 100%;
}

.img__container span{
  font-size: 1.2rem;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 50px;
  width: 50px;
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
  
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  grid-gap:2rem 1.2em;
  flex: 1;
  justify-content: center;
}
.form__area::after{
  content: "";
  display: block;
  grid-column-start: 1;
  height: 1em;
}
.form__area .input__field,  .form__area select, .edit__btn{
  border-radius: 1.1rem;
  outline: none;
  font-size: 1.1rem;
  padding: 1rem 1.1rem;
  border: 1.5px solid #00294E;
}

.edit__btn{
  border: none;
  outline: none;
  width: 100%;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
}
@media  (max-width:768px) {
  .form__area .input__field,  .form__area select, .edit__btn{
    border-radius: 1rem;
    outline: none;
    font-size: 1.1rem;
    padding: 0.9rem 1rem;
    border: 1.5px solid #00294E;
  }
}

@media  (min-width:1115px) {
  .form__area{
    max-width: 80%;
  }
}


</style>