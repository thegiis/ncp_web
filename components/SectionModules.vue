<template>
  <div  class="hero is-fullheight" :class="$style.modulesSection">
      <div
        class="container is-max-desktop"
        :class="$style.modulesContainer"
        ref="modulesContainer"
      >
        <ThumbnailModule
          v-for="module in modules"
          :key="module.title"
          :filename="module.filename"
          :title="module.title"
          :text="module.text"
          :isRight="module.isRight"
          :alt="module.alt"
        />
      </div>
  </div>
</template>

<script>
import ThumbnailModule from '@/components/ThumbnailModule.vue'

const { gsap } = require('gsap/dist/gsap')
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger')

gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    ThumbnailModule,
  },
  data() {
    return {
      modules: [
        {
          title: 'Food',
          text: 'something on food',
          filename: 'food.png',
          alt: 'food',
          isRight: false,
        },
        {
          title: 'Inspiration & Learning',
          text: 'something on Inspiration & Learning',
          filename: 'hiking.png',
          alt: 'Inspiration & Learning',
          isRight: true,
        },
        {
          title: 'Pollination',
          text: 'something on pollination',
          filename: 'pollination.png',
          alt: 'pollination',
          isRight: false,
        },
        {
          title: 'Regulation of Air Quality',
          text: 'something on Regulation of Air Quality',
          filename: 'pollution.jpg',
          alt: 'pollution',
          isRight: true,
        },
        {
          title: 'Companionship',
          text: 'something on Companionship',
          filename: 'companion.jpg',
          alt: 'companion',
          isRight: false,
        },
      ],
    }
  },

  mounted() {
    this.startAnimation()
  },
  methods: {
    startAnimation() {
      const moduleContainer = this.$refs.modulesContainer
      const modules = moduleContainer.childNodes
      console.log(modules)
      console.log(gsap)
      // const tl = gsap.timeline({
      //   stagger: 0.2,
      //   scrollTrigger: {
      //     trigger: moduleContainer,
      //     start: "top center",
      //     scrub: true,
      //     markers: true
      //   }
      // })
      // tl.from(modules, {duration:1, autoAlpha: 0})
    },
  },
}
</script>

<style module>
.modulesSection {
  padding: 5rem 2rem;
  background-color: #f39569;
  display: flex;
  justify-content: center;
}
.modulesContainer {
  max-width: 720px;
  position: relative;
  width: 90%;
}
</style>
