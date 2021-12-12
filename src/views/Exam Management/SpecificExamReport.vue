<template>
  <header>
    <div class="exam__info">
      <h3 class="exam__header">Exam Info</h3>

      <div class="header__container">

        <div class="item1">
          <div class="header__img">
            <img src="/images/placeholderImg.svg" alt="">
          </div>
        </div>

        <div class="item2">
          <h3>Physics 1s Paper-2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi possimus officia porro eius nisi amet. Eaque, neque similique. Ullam eos vero ipsum saepe.</p>
          <p>10:30 AM | Sunday, 19/10/2021</p>
        </div>

        <div class="item3">
          <h3>Assigned Student</h3>
          <div class="exam__info">
            <div class="group">
              <p class="label"></p>
              <p class="value"></p>
            </div>
            <div class="group">
              <p class="label"></p>
              <p class="value"></p>
            </div>
          </div>
          <div class="mark__info">
            <div class="group">
              <p class="label"></p>
              <p class="value"></p>
            </div>
            <div class="group">
              <p class="label"></p>
              <p class="value"></p>
            </div>
            <div class="group">
              <p class="label"></p>
              <p class="value"></p>
            </div>
          </div>
        </div>

        <div class="item4">
          <h3>Your Performance</h3>

          <div class="infos">
            Score: 25/30
            Timestamp: 10:20 pm
            Negative Marketing: -5
          </div>

          <button class="view__btn">
            View Answer Sheet
          </button>
        </div>

      </div>

    </div>

    <div class="header__input">
      <input type="text" placeholder="Search With Phone Number" name="" id="">
      <input type="text" name="" id="" placeholder="Filter High To Low">
      <input type="text" name="" id="" placeholder="Filter Low to High">
      <input type="text" name="" id="" placeholder="Timestamp">
      <select name="" id="" placeholder="Filter with Board">
        <option value="dhaka">Dhaka</option>
        <option value="chittagong">Chittagong</option>
        <option value="sylhet">Sylhet</option>
      </select>
    </div>
  </header>
  <table>
    <tbody>
      <tr>
        <td>
          <span>
            Rank
          </span>
        </td>
        <td>
          <span>
            Name
          </span>
        </td>
        <td>
          <span>
            Board
          </span>
        </td>
        <td>
          <span>
            time_stamp
          </span>
        </td>
        <td>
          <span>
            Score
          </span>
        </td>
        <td>
          <span>
            Negative Marking
          </span>
        </td>
      </tr>
      

      <tr class="main_row" v-for="report in specificExamReports" :key="report.examId">
        <td> 
          <span>
            {{report.rank}}
          </span>
        </td>
        <td>
          <div class="student__info">
            <div class="img__container">
              <img src="/images/jisanProfile.png" alt="">
            </div>
            <div class="info">
              <h4> {{report.student_name}} </h4>
              <p> {{report.institute}} </p>
            </div>
          </div>
        </td>
        <td>
         <span>
           {{report.board}}
         </span>
        </td>

        <td>
          <span>
            {{report.time_stamp}}
          </span>
        </td>
        <td>
          <span>
            {{`${report.scores.own}/${report.scores.max}`}}
          </span>
        </td>
        <td>
          <span>
            {{report.negative_mark}}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router'
export default {
  name: 'SpecificExamReport',
  setup() {
    const route = useRoute();
    const specificExamReports = ref([
      {
        scores: {own: 25, max: 30},
        rank: 1,
        student_image: '',  
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,

      },{
        scores: {own: 25, max: 30},
        rank: 2,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,

      },{
        scores: {own: 25, max: 30},
        rank: 3,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3
        
      },{
        scores: {own: 25, max: 30},
        rank: 4,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
      },{
        scores: {own: 25, max: 30},
        rank: 5,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,

      },{
        scores: {own: 25, max: 30},
        rank: 6,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,

      },{
        scores: {own: 25, max: 30},
        rank: 7,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
      },{
        scores: {own: 25, max: 30},
        rank: 8,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
      },{
        scores: {own: 25, max: 30},
        rank: 9,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
      },{
        scores: {own: 25, max: 30},
        rank: 10,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
      },{
        scores: {own: 25, max: 30},
        rank: 11,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
      },{
        scores: {own: 25, max: 30},
        rank: 12,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
      },{
        scores: {own: 25, max: 30},
        rank: 13,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
      },{
        scores: {own: 25, max: 30},
        rank: 14,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
      },{
        scores: {own: 25, max: 30},
        rank: 15,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
        
      },{
        scores: {own: 25, max: 30},
        rank: 16,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
      },{
        scores: {own: 25, max: 30},
        rank: 17,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
      },{
        scores: {own: 25, max: 30},
        rank: 18,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
      },{
        scores: {own: 25, max: 30},
        rank: 19,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        time_stamp: "10:20:30 Pm",
        negative_mark: -3,
      }
    ])
    onMounted(() => {
    })
    return {
      specificExamReports
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
table {
  border-collapse: collapse;
  width: 100%;
  tbody tr{
    border-bottom: 1px solid #CDCDCD;
    display: grid;
    grid-template-columns: 1fr 2fr 1.5fr 1.5fr 1fr 1.5fr;
    // grid-template-columns: repeat(6, 1fr);
    // @include maxMedia(968px) {
    //   display: inherit;
    // }

    &:first-child{
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      color: #9FA2B4;
    }

    .date__time{
      @include flexVertical;
      justify-content: center;
      align-items: flex-start;  
      
      color: #454545;
      font-size: 0.7rem;
      .date{
        margin-bottom: 0.3rem;
        color: #000;
        font-size: 0.88rem;
      }
    }
  }
  tr td{
    // border: 1px solid blue;
    text-align: left;
    padding:1rem 2rem 1rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @include maxMedia(968px) {
      padding: 0.5rem 0.9rem 0.5rem 0;
    }
  }
  .main_row td {
    span{
      font-weight: 600;
      font-size: 1.05rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      color: #000;
    }
    .student__info{
    @include flexCenter;
    gap: 0.9rem;
    .img__container{
      height: 42px;
      width: 42px;
      border-radius: 50%;
      img{
        width:100%;
        height: 100%;
      }
    }
    
    .info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.3rem;
      h4{
        font-weight: 600;
        font-size: 0.9REM;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: #000;
      }
      P{
        font-size: 0.8rem;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: #454545;
      }
    }

   }
  }
  tr td:nth-child(2) {
    // grid-column: span 2
    min-width: 300px;
  }
  tr td:last-child {
    text-align: center;
    justify-content: center;
  }

}
.header__input{
  display: flex;
  justify-content: flex-start;
  align-content: center;
  gap: 0.85rem;
  margin-bottom: 1rem;

  input, select {
    border: 1px solid #FF6F00;
    box-sizing: border-box;
    border-radius: 8px;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 0.9rem;
    outline: none;
    padding: 0.7rem 1rem;
    text-align: center;
    &::placeholder{
      color: #696969;
    }
    &:first-child{
      min-width: 10%;
      width: 23%;
    }
  }
  select{
    text-align: left;
  }
  // input[type='text'] {
  //   min-width: 15%;
  //   width: 25%;
  // }
  
  
}
</style>