<template>
  <div>
    <LandingImage />
    <SectionObjectives ref="objectives"/>
    <SectionModules />
  </div>
</template>

<script>
import LandingImage from '@/components/page_landing/LandingImage.vue'
import SectionObjectives from '@/components/page_landing/SectionObjectives.vue'
import SectionModules from '@/components/page_landing/SectionModules.vue'

const { gsap } = require('gsap/dist/gsap')
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger')

gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    LandingImage,
    SectionObjectives,
    SectionModules,
  },
  head() {
    return {
      title: "Nature's Contributions to People",
    }
  },
  mounted() {
    this.startAnimation()
    //loading
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  methods: {
    startAnimation() {
      const objectives = this.$refs.objectives.$el
      gsap.to(objectives, {
        ease: 'none',
        backgroundColor: '#A8D4EE',
        scrollTrigger: {
          trigger: objectives,
          start: 'top top+=100',
          end: '60% center',
          scrub: true,
        },
      })
    },
  },
}
</script>

<style>
</style>
