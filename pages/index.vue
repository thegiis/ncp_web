<template>
  <div>
    <LandingImage />
    <SectionObjectives/>
    <SectionModules/>
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
}
</script>

<style>
</style>
