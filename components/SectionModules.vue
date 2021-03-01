<template>
<<<<<<< Updated upstream
    <div :class="$style.modulesSection">
      <div :class="$style.modulesContainer">
      <ThumbnailModule v-for="module in modules" :key="module.title" 
      :filename="module.filename" 
      :title="module.title" 
      :text="module.text"
      :isRight="module.isRight"
      :alt="module.alt"/>
      </div>
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      modules: [{
        'title': 'Pollution',
        'text': 'something on pollution',
        'filename': 'pollution.jpg',
        'alt': 'pollution',
        "isRight": false,
      },{
        'title': 'Pollination',
        'text': 'something on pollination',
        'filename': 'pollination.jpg',
        'alt': 'pollination',
        "isRight": true,
      },{
        'title': 'Food',
        'text': 'something on food',
        'filename': 'food.png',
        'alt': 'food',
        "isRight": false,
      },{
        'title': 'Nature Beauty',
        'text': 'something on Nature Beauty',
        'filename': 'hiking.png',
        'alt': 'nature beauty',
        "isRight": true,
      },{
        'title': 'Human Animal Relation',
        'text': 'something on Human Animal Relation',
        'filename': 'hiking.png',
        'alt': 'nature beauty',
        "isRight": false,
      }]
    }
  }
=======
>>>>>>> Stashed changes
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
