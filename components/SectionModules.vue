<template>
    <div :class="$style.modulesSection">
      <div :class="$style.modulesContainer">
      <ThumbnailModule v-for="module in modules" :key="module.title" 
      :filename="module.filename" 
      :title="module.title" 
      :text="module.text"
      :isRight="module.isRight"
      :alt="module.alt"/>
      </div>
  <div class="hero is-fullheight" :class="$style.modulesSection">
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

export default {
  name: 'ComingSoon',
  components: {
    ThumbnailModule
  },
  data () {
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
      const tl = gsap.timeline({
        // stagger: 0.2,
        scrollTrigger: {
          trigger: moduleContainer,
          start: '-30% center',
          end: '65% center',
          scrub: true,
          markers: true,
        },
      })
      modules.forEach(function (module) {
        console.log(module.childNodes)
        if (module.dataset.right) {
          gsap.set(module.childNodes[2], { opacity: 0, x: '120' })
          tl.from(module.childNodes[0], {
            xPercent: 50,
            left: '-50%',
          }).to(module.childNodes[2], {
            opacity: 1,
            x: '0',
          })
        } else {
          gsap.set(module.childNodes[2], { opacity: 0, x: '-120' })
          tl.from(module.childNodes[0], {
            xPercent: -50,
            left: '50%',
          }).to(module.childNodes[2], {
            opacity: 1,
            x: '0',
          })
        }
      })
    },
  },
}
</script>

<style module>
.modulesSection{
  width: 100%;
  padding: 5rem 2rem;
  background-color: #F39569;
  display: flex;
  justify-content: center;
}
.modulesContainer{
  max-width: 720px;
  width: 90%;
}
</style>
