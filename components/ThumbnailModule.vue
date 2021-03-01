<template>
  <div :class="getClass(isRight)">
    <div :class="$style.thumbnail">
      <img :alt=alt :src="require(`@/assets/images/thumbnails/${filename}`)">
    </div>
    <div :class="$style.description">
      <h2>{{title}}</h2>
      <!-- <p>{{text}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThumbModule',
  props: {
    filename: {
      required: true,
      type: String
    },
    alt: {
      required: false,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    },
    isRight:{
      default: false,
      type: Boolean,
      required: false
    }
  },
  methods: {
    getClass (right){
      if (right){
        return [this.$style.module, this.$style.right]
      } else {
        return this.$style.module
      }
    }
  },
  mounted(){
  }
}
</script>

<style module>
.module{
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.thumbnail{
  position: relative;
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  flex: none;
  margin-right: 1.5rem;
}
.right>.thumbnail{
  order: 10;
  margin-right: 0rem;
  margin-left: 1.5rem;
}
.right>.description{
  text-align: right;
}
.thumbnail>img{
  position: absolute;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.description{
  width: 100%;
  text-align: left;
}
.description>p{
  font-size: 1.2rem;
  color: #FFF6ED;
}
.description>h2{
  font-family: 'Averia Libre', cursive;
  font-size: 1.5rem;
  color: white;
}
</style>
