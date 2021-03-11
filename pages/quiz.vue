<template>
  <div :class="$style.quizSection" class="bg-secondary">
    <section class="container is-max-desktop">
      <h1 :class="$style.quizTitle" class="color-primary">Quiz Time</h1>
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
}
.quizSection > section {
  padding: 2rem;
}
.quizTitle {
  font-size: 2.5rem;
  text-align: center;
}
</style>
