<template>
  <div class="main__container">
    <ExamPageTopBar />
    <ExamPageExamDetail />
    <ShowAllExamQuestions />
  </div>
</template>
  
<script>
import { onMounted, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router'
import ExamPageTopBar from '../../components/Exam Management/ExamPageTopBar.vue';
import ExamPageExamDetail from '../../components/Exam Management/ExamPageExamDetail.vue';
import ShowAllExamQuestions from '../../components/Exam Management/ShowAllExamQuestions.vue';
export default {
  components: { ExamPageTopBar, ExamPageExamDetail, ShowAllExamQuestions },
  name: 'ExamPage',
  setup(props) {
    const route = useRoute();
    let {examId} = route.params.examId;
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/config.scss";

.main__container {
  padding: 2.8rem 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @include maxMedia(768px) {
    max-width: 100%;
  }
}
</style>