<template>
  <header class="header">
    <div class="header__input">
      <input type="number" placeholder="Search With Phone Number" name="" id="">
      <input type="text" name="" id="" placeholder="Search With Name">
      <select name="" id="" placeholder="Filter with Board">
        <option selected disabled value="">Filter With Board</option>
        <option  value="dhaka">Dhaka</option>
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
            Phone Number
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
            Batch
          </span>
        </td>
      </tr>
      

      <tr class="main_row" v-for="student in allStudentList" :key="student.id">
        <td> 
          <router-link :to="{name: 'SpecificStudent', params: {studentId: student.id}}">
            <span class="phone">
              {{student.phoneNumber}}
            </span>
          </router-link>
        </td>
        <td>
          <div class="student__info">
            <div class="img__container">
              <img src="/images/jisanProfile.png" alt="">
            </div>
            <div class="info">
              <h4> {{student.student_name}} </h4>
              <p> {{student.institute}} </p>
            </div>
          </div>
        </td>
        <td>
         <span>
           {{student.board}}
         </span>
        </td>

        <td>
          <span>
            {{student.batch}}
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
  name: 'StudentManagement',
  setup() {
    const route = useRoute();
    const allStudentList = ref([
      {
        phoneNumber: '01201822947',
        id: 25381,
        student_image: '',  
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",

      },{
        phoneNumber: '01201822947',
        id: 2,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",

      },{
        phoneNumber: '01201822947',
        id: 3,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020"
        
      },{
        phoneNumber: '01201822947',
        id: 4,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
      },{
        phoneNumber: '01201822947',
        id: 5,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",

      },{
        phoneNumber: '01201822947',
        id: 6,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",

      },{
        phoneNumber: '01201822947',
        id: 7,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
      },{
        phoneNumber: '01201822947',
        id: 8,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
      },{
        phoneNumber: '01201822947',
        id: 9,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
      },{
        phoneNumber: '01201822947',
        id: 10,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
      },{
        phoneNumber: '01201822947',
        id: 11,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
      },{
        phoneNumber: '01201822947',
        id: 12,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
      },{
        phoneNumber: '01201822947',
        id: 13,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
      },{
        phoneNumber: '01201822947',
        id: 14,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
      },{
        phoneNumber: '01201822947',
        id: 15,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
        
      },{
        phoneNumber: '01201822947',
        id: 16,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
      },{
        phoneNumber: '01201822947',
        id: 17,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
      },{
        phoneNumber: '01201822947',
        id: 18,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
      },{
        phoneNumber: '01201822947',
        id: 19,
        student_image: '',
        student_name: "Md. Ahmed",
        institute: "Chittagong College, Chittagong",
        board: "Dhaka",
        
        batch: "HSC 2020",
      }
    ])
    onMounted(() => {
    })
    return {
      allStudentList
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
    grid-template-columns: 1fr 2fr 1fr 1fr;
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
    span.phone {
      font-display: 600;
      letter-spacing: 0.2px;
      text-decoration-line: underline;
      color: #00335C;
      cursor: pointer;
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 250px);
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