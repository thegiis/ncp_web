<template>
    <div :class="$style.titleBar" class="container is-widescreen">
        <div class="baseNavbarDiv" :class="$style.navDiv">
            <nuxt-link :to="{name: 'index'}">Home</nuxt-link>
            <nuxt-link :to="{name: 'about'}">About</nuxt-link>
            <a href="/ncp">Learn</a>
        </div>
    </div>
</template>

<style module>
.titleBar{
    width: 100%;
    padding: 1rem 2rem;
    padding-top: 2rem;
}

.navDiv {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.navDiv a {
  font-weight: bold;
  padding: 12px 20px;
  font-size: 1.4rem;
  border: 0.2rem solid #a8d6e2;
  border-radius: 2rem;
  margin: 0 1rem;
  text-decoration: none;
  color: #6f94c1;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  transition: 0.3s linear;
}
.navDiv a:last-child {
    margin-right: 0;
}
.navDiv a:hover {
    background-color: #97adc7;
    color: #354a63;
    border-color: white;
}

</style>

<style scoped>
.baseNavbarDiv a.nuxt-link-exact-active {
  background-color: #6f94c1;
    border-color: white;
  color: white;
  cursor: default;
}
</style>