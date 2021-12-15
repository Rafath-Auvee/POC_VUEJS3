<template>
  <table>
    <!-- <thead>
      <th>Exam ID</th>
      <th>Subject</th>
      <th>Data & Time</th>
    </thead> -->

    <tbody>
      <tr>
        <th>Exam ID</th>
        <th>Subject</th>
        <th>Data & Time</th>
      </tr>
      

      <tr v-for="exam in exams" :key="exam.id">
        <td class="id"> 
          <router-link :to="{name: 'ExamPage', params: {examId: exam.examId}}">
            <span>
              #{{exam.examId}} 
            </span>
          </router-link>
           </td>
        <td class="subject">
          <span>
            {{exam.subject}}
          </span>
        </td>
        <td>
          <div class="date__time">
            <span class="date">{{exam.date.date}}</span>
            <span class="time">{{exam.date.time}}</span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router'
export default {
  name: 'ExamUnpack',
  setup() {
    const route = useRoute();
    const exams = ref([
      {
        examId: 'HSC2022',
        subject: 'Physics 1st Paper',
        date: {
          date: '1/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2020',
        subject: 'Physics 2st Paper',
        date: {
          date: '2/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2021',
        subject: 'Chemistry 2st Paper',
        date: {
          date: '3/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2022',
        subject: 'Chemistry 1st Paper',
        date: {
          date: '4/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2021',
        subject: 'Higher Math 1st Paper',
        date: {
          date: '6/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2022',
        subject: 'Higher Math 2st Paper',
        date: {
          date: '7/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2023',
        subject: 'Chemistry',
        date: {
          date: '8/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2020',
        subject: 'Chemistry',
        date: {
          date: '9/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2022',
        subject: 'Physics',
        date: {
          date: '10/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2021',
        subject: 'Physics 1st Paper',
        date: {
          date: '11/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2023',
        subject: 'Physics 1st Paper',
        date: {
          date: '13/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2020',
        subject: 'Physics 1st Paper',
        date: {
          date: '14/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2021',
        subject: 'Physics 1st Paper',
        date: {
          date: '15/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2023',
        subject: 'Physics 1st Paper',
        date: {
          date: '16/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2022',
        subject: 'Physics 1st Paper',
        date: {
          date: '17/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2023',
        subject: 'Physics 1st Paper',
        date: {
          date: '18/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2022',
        subject: 'Physics 1st Paper',
        date: {
          date: '19/22',
          time: '06:00 PM'
        }
      },{
        examId: 'HSC2021',
        subject: 'Physics 1st Paper',
        date: {
          date: '21/22',
          time: '07:00 PM'
        }
      },{
        examId: 'HSC2022',
        subject: 'Physics 1st Paper',
        date: {
          date: '23/3',
          time: '06:00 PM'
        }
      }
    ])
    onMounted(() => {
    })
    return {
      exams
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
    grid-template-columns: 1.5fr 2fr 1.5fr 1.5fr;
    
    @include maxMedia(968px) {
      display: inherit;
    }

    &:first-child{
      border: none;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      color: #9FA2B4;
    }

    .id span, .subject span{
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      text-decoration-line: underline;
      color: #00335C;
      cursor: pointer;
    }
    .subject span{
      color: #000;
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
  th, td{
    // border: 1px solid blue;
    text-align: left;
    padding: 1rem 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @include maxMedia(968px) {
      padding: 0.5rem 0.9rem;
    }
  }

}
</style>