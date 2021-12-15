<template>
  <header>
    <div class="img__container">
      <img src="@/assets/poc_logo.svg" alt="">
    </div>

      <div class="timer">
        <p>Time Remaining</p>
        <h3>
          <span>00</span><span>:</span><span>10</span><span>:</span><span>00</span>
        </h3>
      </div>
  </header>
</template>

<script>
export default {
  name: 'ExamPageTopBar'
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @include maxMedia(768px) {
    padding: 1rem;
  }
  .img__container {
    max-width: 150px;
    @include maxMedia(500px) {
      max-width: 120px;
    }
    img{
      width: 100%;
    }
  }

  .timer {
background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
    color: #fff;
    padding: 0.9rem 1rem;
    border-radius: 14px;
    
    text-align: center;

    p{
      font-size: 0.71rem;
      font-weight: 500;
      margin-bottom: 0.4rem;
    }
    h3 span{
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 24px;
      letter-spacing: 0.5px;
      margin: 0.1rem;
      @include maxMedia(500px) {
        font-size: 1.3rem;
         line-height: 1.5rem;
      }
    }
  }
  
}
</style>