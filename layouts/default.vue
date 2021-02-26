<template>
  <div>
    <BaseNavigation />
    <Nuxt />
    <BaseFooter />
  </div>
</template>

<script>
import BaseNavigation from '@/components/base/BaseNavigation.vue'
import BaseFooter from '@/components/base/BaseFooter.vue'
export default {
  components: {
    BaseNavigation,
    BaseFooter
  }
}
</script>

<style>
</style>
