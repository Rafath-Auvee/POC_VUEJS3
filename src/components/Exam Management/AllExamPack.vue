<template>
<div>
  <div class="container">
    <button @click="handleAddExamPack" class="primary-btn flex-btn">
      <i class="fas fa-plus"></i> <span> Add Exam Pack </span>
    </button>
  <div class="pack_container">
    <div v-for="examPack in examPacks" :key="examPack.id"  class="card" >
      <ExamPackCard @unpack-exam="onUnpackExam" :examPack="examPack"/>
    </div>
    </div>

  </div>
</div>
</template>
<script>
import { ref } from '@vue/reactivity'
import getExamList from '../../api/examPackApi'
import ExamPackCard from '../../components/Exam Management/ExamPackCard.vue'
import { onMounted } from '@vue/runtime-core'

export default {
  name: "AllExamPack",
  components: {
    ExamPackCard
    
  },
  setup() {
      const examPacks = ref([
        {
          id: 1, 
          title: 'Elite Exam Mania',
          batch: '2021'
        },{
          id: 2, 
          title: 'Elite Exam Mania',
          batch: '2021'
        },{
          id: 3, 
          title: 'Elite Exam Mania',
          batch: '2021'
        },{
          id: 4, 
          title: 'Elite Exam Mania',
          batch: '2021'
        },{
          id: 5, 
          title: 'Elite Exam Mania',
          batch: '2021'
        },{
          id: 6, 
          title: 'Elite Exam Mania',
          batch: '2021'
        },{
          id: 7, 
          title: 'Elite Exam Mania',
          batch: '2021'
        },{
          id: 8, 
          title: 'Elite Exam Mania',
          batch: '2021'
        }
      ])
      const onUnpackExam = (examPack) => {
        // console.log('clicked', examPack)
      }

      const {examList, error, loadExamList} = getExamList();
      const url = "http://www.exam.poc.ac/api/list_examPack"
      function apiFetch(){
          fetch(url)
          .then(res => res.json())
          .then(data => {
              console.log(data)
          })
      }
      // apiFetch();
      // onMounted(() => {

      // })

      return {
        examPacks
      }
  }
}

</script>


<style scoped>

.container{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
}

.pack_container{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  grid-gap:2rem 1.2em;
  flex: 1;
  justify-content: center;
}
.pack_container::after{
  content: "";
  display: block;
  grid-column-start: 1;
  height: 1em;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8em;
}
@media (max-width: 600px) {
  .pack_container{
    padding: 1em 1em;
  }
}
.primary-btn{
  border: none;
  outline: none;
  padding: 1rem 1.2rem;;
  border-radius: 1rem;
  background: #00A9DC;
  color: #fff;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.3rem;
  text-align: center;
  cursor: pointer;
}
.flex-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
}

</style>

