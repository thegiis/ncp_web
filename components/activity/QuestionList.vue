<template>
  <div :class="$style.questionListDiv">
    <div :class="$style.questionContainer">
      <QuestionItem :question="getQuestion" :questionNum="questionNum" />
    </div>
  </div>
</template>

<script>
import QuestionItem from '@/components/activity/QuestionItem.vue'

export default {
  name: 'QuestionList',
  components: {
    QuestionItem,
  },
  props: {
    questionList: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      questionNum: 1,
    }
  },
  computed:{
      getQuestion () {
          return this.questionList[this.questionNum-1]
      }
  }
}
</script>

<style module>
.questionListDiv {
  position: relative;
  padding: 2rem;
  width: 100%;
  background-color: white;
  margin: 0.5rem;
  min-height: 80vh;
}
</style>
