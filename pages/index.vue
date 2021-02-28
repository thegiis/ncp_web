<template>
  <div class="container">
    <LandingImage />
    <SectionObjectives />
    <SectionModules class='test'/>
  </div>
</template>

<script>
import LandingImage from '@/components/LandingImage.vue'
import SectionObjectives from '@/components/SectionObjectives.vue'
import SectionModules from '@/components/SectionModules.vue'


export default {
  components: {
    LandingImage,
    SectionObjectives,
    SectionModules
  },
  head() {
    return {
      title: "Nature's Contributions to People"
    }
  },
  mounted(){
    this.startAnimation()
  },
  methods: {
    startAnimation(){
      const tween = TweenMax.to('.test', 1, {backgroundColor:"red"})

      const scene = this.$scrollmagic.scene({
        triggerElement: ".test",
        triggerHook: 0.5,
        duration: 500
      })
      .setTween(tween);
      
      this.$scrollmagic.addScene(scene)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
