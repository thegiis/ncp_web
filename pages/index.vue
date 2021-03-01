<template>
  <div>
    <LandingImage />
    <SectionObjectives ref="objectives"/>
    <SectionModules />
  </div>
</template>

<script>
import LandingImage from '@/components/LandingImage.vue'
import SectionObjectives from '@/components/SectionObjectives.vue'
import SectionModules from '@/components/SectionModules.vue'

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
