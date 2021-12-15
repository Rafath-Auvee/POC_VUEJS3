<template>
 
    <div class="img__container">
      <img src="/images/placeholderImg.svg" alt="">
    </div>
    <div class="text">
        <h3 @click="$emit('upcoming-exam', upcomingExam)"> {{upcomingExam.examName}} </h3> 
      <p>
        {{upcomingExam.date}}
    </p>
    </div>
</template>

<script>
export default {
  name: "UpcomingExamCard",
  props: ['upcomingExam'],
  emits: ['upcoming-exam'],
  setup(props) {
    const upcomingExam = props.upcomingExam
    const titleToUrl = title => title.trim().toLowerCase().split(' ').join('-')
    return {
      upcomingExam,
      titleToUrl
    }
  }
}
</script>

<style lang="scss" scoped>

  
  .img__container{
    background: #CFCFCF;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 130px;
  }
  .img__container img{
    max-width: 77px;
  }
  .text{
    text-align: left;

    h3{
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 25px;
    text-decoration: underline;
    color: #00A9DC;
    cursor: pointer;
  }
  }
  .text p{
    font-size: 0.9rem;
    margin-top: .3rem;
    color: #000;
    line-height: 17px;
  }

</style>