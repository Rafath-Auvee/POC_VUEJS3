<template>
  <div class="container">
    <!-- dashboard profile start -->
    <div class="profile">
      <div class="profile__info">
        <div class="img__container1">
          <img src="/images/profile1.jpg" alt="">
        </div>
        <div class="profile__detail">
          <p class="basic">Sylhet | HSC 2021 | Science</p>
          <h3 class="name">Jisan Mia</h3>
          <p class="institute">Singair Degree Collage</p>
        </div>
      </div>
      <!-- upcoming exams -->
      <div class="upcoming">
        <h3>Upcoming Exams</h3>
        <div class="upcoming__exams-container">
          <!-- boxes will be iterated form upcoming apis -->
          <div class="box" v-for="upcomingExam in upcomingExams" :key="upcomingExam.id">
            <UpcomingExamCard :upcomingExam="upcomingExam" @upcoming-exam="handleClickUpcomingExam" />
          </div>
        </div>
      </div>
    </div>
    <!-- dashboard profile end -->

    <!-- dashboard stats start -->
    <div class="stats">
      <div class="stats__chart">
      </div>

      <div class="stats__cards">
        <DashboardStatsCountCard label="Completed Exams" value="25"/>
        <DashboardStatsCountCard label="Average Mark" value="66.67%"/>
        <DashboardStatsCountCard label="Passed" value="75%"/>
        <DashboardStatsCountCard label="Failed" value="25%"/>
      </div>
    </div>
    <div class="detail">
      <h3>Previous Exam</h3>
      <table>
      <tbody>
        <tr>
          
          <td>
            <span>
              Exam ID
            </span>
          </td>
          <td>
            <span>
              Exam Name
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
          <td>
            <span>
              Answer Sheet
            </span>
          </td>
        </tr>
        

        <tr v-for="exam in previousExam" :key="exam.examId">
          

          <td class="id" > 
            
            <span>
              #{{exam.examId}}
            </span>
          
          </td>
          <td class="exam_name">
            
            <span>
              {{strJoin(exam.exam_name)}}
            </span>
          </td>

          <td class="scores">
            <span>
              {{`${exam.scores.own}/${exam.scores.max}`}}
            </span>
          </td>

          <td class="scores">
            <span>
              {{exam.negative_mark}}
            </span>
          </td>

          <td class="answer__sheet">
            <span>
              View/Download
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import DashboardStatsCountCard from './DashboardStatsCountCard.vue'
import UpcomingExamCard from './UpcomingExamCard.vue'
export default {
  components: {
    DashboardStatsCountCard,
    UpcomingExamCard
  },
  name: 'StudentDashboard', 
  setup() {
    const previousExam = ref([
      {
        scores: {own: 20, max: 30},
negative_mark: -3,
examId: 'HSC2022',
        exam_name: 'Physics 1st Paper',
        date: {
          date: '1/22',
          time: '06:00 PM'
        }
      },{
        scores: {own: 20, max: 30},
negative_mark: -3,
examId: 'HSC2020',
        exam_name: 'Physics 2st Paper',
        date: {
          date: '2/22',
          time: '06:00 PM'
        }
      },{
        scores: {own: 20, max: 30},
negative_mark: -3,
examId: 'HSC2021',
        exam_name: 'Chemistry 2st Paper',
        date: {
          date: '3/22',
          time: '06:00 PM'
        }
      },{
        scores: {own: 20, max: 30},
negative_mark: -3,
examId: 'HSC2022',
        exam_name: 'Chemistry 1st Paper',
        date: {
          date: '4/22',
          time: '06:00 PM'
        }
      },{
        scores: {own: 20, max: 30},
negative_mark: -3,
examId: 'HSC2021',
        exam_name: 'Higher Math 1st Paper',
        date: {
          date: '6/22',
          time: '06:00 PM'
        }
      },
    ])
    const upcomingExams = ref([
      {
        id: 1,
        examName: 'Chemistry 1st Paper',
        date: '10:30 AM | Sunday, 19/10/2021'
      },
      {
        id: 2,
        examName: 'Chemistry 1st Paper',
        date: '10:30 AM | Sunday, 19/10/2021'
      }
    ])
    const handleClickUpcomingExam = (exam) => {
      console.log(exam)
    }

    const strJoin = (str) => {
      return str.split(' ').join('-')
    }
    return {
      previousExam,
      upcomingExams,
      handleClickUpcomingExam,
      strJoin
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';


.container {
  @include flexVertical;
  justify-content: center;
  align-items: flex-start;
  gap: 2.2rem;
}
.statsProfile_common {
  width: 100%;
  display: flex; 
  grid-template-columns: 2fr 1fr;
  gap: 1.2rem;
  justify-content: center;
  align-content: center;
  @include maxMedia(768px) {
    grid-template-columns: 1fr;
  }


}
.profile {
  @extend .statsProfile_common;
  .profile__info {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    .img__container1{
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 18px;
      min-width: 120px;
      width: 180px;
      height: 180px;
      min-height: 120px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        border-radius: 18px;
      }
    }
    .profile__detail {
      @include flexVertical;
      gap: 0.5rem;
      p{
        color: #000;
        font-size: 0.9rem;
      }
      .name {
        color: #00A9DC;;
        font-size: 2.5rem;
        line-height: 2.3rem;
        letter-spacing: 0.5px;
      }
    }
    
  }
  .upcoming{
    width: 100%;
    @include flexVertical;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
    h3{
      color: #00A9DC;
      font-size: 1.3rem;
      line-height: 2rem;
      font-weight: 700;
    }
    &__exams-container{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      grid-template-rows: max-content;
      grid-auto-rows: max-content;
      grid-gap:2rem 1.2em;
      flex: 1;
      justify-content: center;
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.8em;
      } 
    }
  }
}

.stats {
  @extend .statsProfile_common;
  &__chart {
    border: 1px solid #00A9DC;
    border-radius: 18px; 
    width: 100%;
    background: #eae7f7;
    padding: 0.5rem;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
    width: 100%;
  }
}
.detail{
  @include flexVertical;
  justify-content: center;
  align-items: flex-start;
  gap: 0.3rem;
  h3{
    color: #00A9DC;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
}
table {
  border-collapse: collapse;
  width: 100%;
  tbody tr{
    border-bottom: 1px solid #CDCDCD;
    display: grid;
    // grid-template-columns: 1fr 2fr 1.5fr 1.5fr 1.5fr;
    grid-template-columns: repeat(5, 1fr);
    // @include maxMedia(968px) {
    //   display: inherit;
    // }

    &:first-child span{
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.2rem;
      letter-spacing: -0.011em;
      color: #00A9DC;
    }

    td span{
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      color: #000;
    }
    td.answer__sheet span {
      text-decoration-line: underline;
      font-weight: 600;
      cursor: pointer;
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

}

</style>