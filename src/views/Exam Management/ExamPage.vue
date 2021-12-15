<template>
  <h1>this is exam page</h1>
</template>
  
<script>
import { onMounted, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router'
export default {
  name: 'ExamPage',
  setup(props) {
    const route = useRoute();
    let {examId} = route.params.examId;
  }
}
</script>

<style>

</style>