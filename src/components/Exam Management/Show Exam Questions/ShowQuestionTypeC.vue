<template>
  <div class="type3">
    <div class="para__header">
      {{examQuestionC.paragraphHeader}}
    </div>

    <div class="para">
      {{examQuestionC.paragraph}}
    </div>
    <div class="question" v-for="examQuestion in examQuestionC.questions" :key="examQuestion">

      <ShowQuestionTypeA v-if="examQuestion.type == 'A'" :examQuestion="examQuestion" />
      <ShowQuestionTypeB v-if="examQuestion.type == 'B'" :examQuestion="examQuestion"  />

    </div>
  </div>
</template>

<script>
import ShowQuestionTypeA from "./ShowQuestionTypeA.vue";
import ShowQuestionTypeB from "./ShowQuestionTypeB.vue";
export default {
  name: "ShowQuestionTypeC",
  props: {
    examQuestionC: {
        type: Object
    }
  },
  components: { ShowQuestionTypeA, ShowQuestionTypeB },
  setup(props) {
    console.log(props.examQuestionC)
    return {

    }
  }
}
</script>

<style lang="scss" scope>
.pDefault {
  font-size: 1rem;
  color: rgb(0 0 0 / 70%);
  line-height: 1.25rem;
  font-weight: 500;
}
.type3 {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .para__header, .para {
    @extend .pDefault;
    margin-bottom: 1.5rem;
  }

}
</style>