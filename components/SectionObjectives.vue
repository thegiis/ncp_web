<template>
  <div :class="$style.landingInfo">
    <section class="hero is-fullheight">
      <div class="container is-max-desktop" :class="$style.infoContainer">
        <h2 :class="$style.objectives">Nature’s Contribution to People</h2>
        <p :class="$style.objectivesText">
          Nature contributes to our good quality of life in multiple ways. Some
          of these contributions are easily visible, like the clothes we wear,
          the food we eat, and the water we drink. However, some contributions,
          such as regulation of air quality, purification of water, and
          pollination of crops are hardly ever seen. Scientists warn that we are
          now losing the quantity and quality of many of these contributions
          from nature because of our reckless behaviour to nature. If we
          continue doing what we are currently doing to nature, we might
          permanently lose the contributions nature provides to us that will
          diminish our good quality of life.
        </p>
        <br />
        <p :class="$style.objectivesText">
          One of the things we need to conserve nature is to understand why and
          how it is important for our lives. We have created videos and
          interactive lessons to inform about nature and nature’s contributions
          to people and how we can take good care of nature, including
          ourselves.
        </p>
      </div>
    </section>
  </div>
</template>

<style module>

/* raleway and quicksand */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&family=Raleway:wght@500&display=swap');

.landingInfo {
  width: 100%;
  min-height: 640px;
  background-color: #49e1f0;
  color: white;
  margin: 0;
  padding: 2rem 2rem;
}
.infoContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.objectives {
  font-weight: bold;
  width: 100%;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.8125rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #1e4d63;
}
.objectivesText {
  max-width: 1080px;
  text-align: center;
  line-height: 2rem;
  font-size: 1rem;
  color: #1e4d63;
  font-family: 'Raleway', sans-serif;
}
</style>
