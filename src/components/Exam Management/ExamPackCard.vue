<template>
 
    <div class="img__container">
      <img src="/images/placeholderImg.svg" alt="">
    </div>
    <div class="text">
      <h3> {{examPack.title}} </h3>
      <p @click="$emit('unpack-exam', examPack.id)">
        Batch {{examPack.batch}} 
      </p>
    </div>
</template>

<script>
export default {
  name: "ExamPackCard",
  props: ['examPack'],
  emits: ['unpack-exam'],
  setup(props) {
     const examPack = props.examPack

    return {
      examPack
    }
  }
}
</script>

<style scoped>

  
  .img__container{
    background: #CFCFCF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 23px;
    width: 100%;
    height: 180px;
  }
  .img__container img{
    max-width: 77px;
  }
  .text{
    text-align: left;
  }
  .text h3{
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 25px;
    text-decoration: underline;
    color: #00A9DC;
    cursor: pointer;

  }
  .text p{
    font-size: 0.9rem;
    color: #000;
    line-height: 17px;
  }

</style>