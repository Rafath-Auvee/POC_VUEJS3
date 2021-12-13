<template>
  <div class= "container justify-content-center  align-items-center">
    <main class="form-signin">
        <form>
          <!-- <h1 class="h3 mb-5 fw-normal logintext">Forgot Password</h1> -->

          <div class="wrap-input100 validate-input" data-validate="Valid email is     required: ex@abc.xyz">
                        <input class="input1002" type="text" name="email" placeholder="Enter OTP">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
          </div>


          
          <button class="w-100 btn btn-lg btn-primary mt-3 submitbutton" type="submit">Submit</button>
          <!-- <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p> -->
        </form>
    </main>
  </div>  
</template>

<script>

</script>

<style scoped>
html,
body {
  height: 100%;
}

.wrap-input100 {
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
  
  
}



.input100 {
  
  font-size: 15px;
  line-height: 1.5;
  color: #666666;
  display: block;
  width: 100%;
  background: #e6e6e6;
  border: 2px solid #146AB4;
  height: 75px;
  border-radius: 25px;
  padding: 0 59px 0 93px;
}


.input1002 {
  
  font-size: 15px;
  line-height: 1.5;
  color: #666666;
  display: block;
  width: 100%;
  background: #e6e6e6;
  border: 2px solid #146AB4;
  height: 75px;
  border-radius: 25px;
  padding: 0 59px 0 33px;
}

.symbol-input100 {
  font-size: 15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 35px;
  pointer-events: none;
  
  -webkit-transition: all 0.4s;
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

input:focus {
  border: 3px solid #00D4FE;
}

/* .focus-input100 {
	
  display: block;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  color: rgba(87,184,70, 0.8);
} */

.submitbutton
{
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
  border-radius: 21px;
  width: 478px;
  height: 75px;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

/* .form-signin input[type="number"] {
  margin-bottom: -1px;
  border-radius: 21px;
  border: 2px solid #146AB4;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border: 2px solid #146AB4;
  border-radius: 21px;
} */

.logintext
{
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
}
</style>