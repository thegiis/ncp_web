<template>
  <div v-if="loading" class="loading-page">
    <div class="loading-bg loading-bg-gradient"></div>
    <div class="loading-bg loading-bg-img"></div>
    <div class="loading-texts">
      <div class="waviy">
        <span style="--i: 1">L</span>
        <span style="--i: 2">o</span>
        <span style="--i: 3">a</span>
        <span style="--i: 4">d</span>
        <span style="--i: 5">i</span>
        <span style="--i: 6">n</span>
        <span style="--i: 7">g</span>
        <span style="--i: 8">.</span>
        <span style="--i: 9">.</span>
        <span style="--i: 10">.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      const html = document.querySelector('html')
      html.style.overflow = 'hidden'
      this.loading = true
    },
    finish() {
        const html = document.querySelector('html')
        html.style.overflow = 'visible'
        this.loading = false
    },
  },
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  z-index: 1000;
}
.loading-bg {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}
.loading-bg-gradient {
  background: linear-gradient(#ffc875 20%, white 80%);
}
.loading-bg-img {
  background-image: url('@/assets/images/hills.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center bottom;
}
.loading-text {
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 2.5rem;
  bottom: 5%;
}
.loading-texts {
  position: relative;
  top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.waviy {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
}
.waviy span {
  position: relative;
  display: inline-block;
  font-size: 3rem;
  color: #fff;
  text-transform: uppercase;
  animation: waviy 1s infinite;
  animation-delay: calc(0.1s * var(--i));
}
@keyframes waviy {
  0%,
  40%,
  100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
}
</style>