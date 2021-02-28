<template>
  <div :class="$style.memberContainer">
    <div :class="$style.thumbnail">
      <img :alt=name :src="require(`@/assets/images/team/${filename}`)">
    </div>
    <div :class="$style.description">
      <h2 :class="$style.name">{{name}}</h2>
      <h3 :class="$style.role">{{role}}</h3>
      <!-- <p>{{text}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemTeamMember',
  props: {
    filename: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    role: {
      required: true,
      type: String
    },
  }
}
</script>

<style module>

.memberContainer{
  position: relative;
  padding: 0;
  width: 150px;
  margin: 0.5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
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
  margin-bottom: 1rem;
}
.name{
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
}
.role{
    font-size: 1.1rem;
    color: #F39569;
    text-align: center;
}
</style>
