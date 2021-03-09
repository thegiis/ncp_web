<template>
  <div :class="$style.quizSection">
    <section class="container is-max-desktop">
      <h1 :class="$style.quizTitle">Quiz Time</h1>
      <QuestionList :questionList="quizData" />
    </section>
  </div>
</template>

<script>
import sampleData from '@/assets/data/sample_quiz.json'
import QuestionList from '@/components/activity/QuestionList.vue'

export default {
  components: {
    QuestionList,
  },
  head() {
    return {
      title: 'Quiz',
    }
  },
  data() {
    return {
      quizData: sampleData.questions
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
}
</script>

<style module>
.quizSection {
  padding-top: 2rem;
  padding-bottom: 5rem;
  background-color: #f8f9fa;
}
.quizSection > section {
  padding: 2rem;
}
.quizTitle {
  font-size: 2.5rem;
  color: #1e4d63;
  text-align: center;
}
</style>
