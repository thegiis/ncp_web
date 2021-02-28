<template>
  <div :class="$style.landingInfo">
    <section class="hero is-fullheight">
      <div class="container is-max-desktop" :class="$style.infoContainer">
        <h2 :class="$style.objectives">Nature’s Contribution to People</h2>
        <p :class="$style.objectivesText">
          Nature contributes to our quality of life in multiple ways. Some of
          these gifts are easily visible, like the clothes we wear, the food we
          eat, and the water we drink. However, some contributions, such as
          regulation of air quality and pollination of food crops are hardly
          ever seen. Scientists warn that we are now losing many of these gifts
          from nature. If we continue doing what we are currently doing to
          nature, we might permanently lose the gifts nature provides.
        </p>
        <br />
        <p :class="$style.objectivesText">
          One of the things we need to conserve nature is to understand why and
          how it is important for our lives. We have created videos and
          interactive lessons to talk about nature’s contributions to people and
          how we can take good care of nature, including ourselves.
        </p>
      </div>
    </section>
  </div>
</template>

<style module>
.landingInfo {
  width: 100%;
  padding: 2rem 2rem;
  min-height: 640px;
  background-color: #49e1f0;
  color: white;
  margin: 0;
}
.infoContainer{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.objectives {
  font-weight: bold;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  font-family: 'restoration';
  margin-bottom: 2rem;
  color: rgb(30, 77, 99);
}
.objectivesText {
  max-width: 1080px;
  text-align: center;
  line-height: 2rem;
  font-size: 1.5rem;
  letter-spacing: 2px;
  color: rgb(30, 77, 99);
}
</style>
