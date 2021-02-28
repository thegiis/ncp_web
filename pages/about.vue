<template>
  <div :class="$style.aboutSection">
    <section class="container is-max-desktop">
      <h1 :class="$style.aboutTitle">
        About Nature's Contribution to People (NCP)
      </h1>
      <br />
      <div :class="$style.aboutDescription">
        <p>
          his project aims to produce multimedia digital learning materials on
          ‘Nature and Nature’s Contribution to People (NCP)’ for the young
          audience with an age range from 10-15 years. The learning materials
          will include learning videos, interactive lessons and activities.
        </p>
        <br />
        <p>
          The goal of this project is to generate curiosity and interest among
          young learners in nature and biodiversity and provide an immersive and
          interactive experience to understand and internalize why and how we
          can take good care of nature, including ourselves.
        </p>
        <br />
        <p>
          The learning materials will be based on the assessments produced by
          the Intergovernmental Science-Policy Platform on Biodiversity and
          Ecosystem Service (IPBES). This project is supported by Norwegian
          Environmental Agency and implemented by the Global Institute for
          Interdisciplinary Studies (GIIS), Nepal. We hope our learning
          materials for younger audience not only informs them about the
          activities of IPBES but also makes them aware to change extractive
          behavior to Nature. Ultimately, it will empower them to live in
          harmony with Nature.
        </p>
      </div>
    </section>
    <SectionTeam />
  </div>
</template>

<script>
import SectionTeam from '@/components/SectionTeam.vue'
export default {
  components: {
    SectionTeam,
  },
  head() {
    return {
      title: 'About',
    }
  },
}
</script>

<style module>
.aboutSection {
  padding-top: 2rem;
  padding-bottom: 5rem;
  background-color: #f8f9fa;
}
.aboutSection > section {
  padding-bottom: 2rem;
}
.aboutTitle {
  font-size: 2.5rem;
  color: #676b5e;
  text-align: center;
}
.aboutDescription {
  text-align: justify;
  font-size: 1rem;
}
</style>
