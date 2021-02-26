<template>    
    <div :class="$style.landingInfo">
      <h2 :class="$style.objectives">Our Objectives</h2>
      <p :class="$style.objectivesText">This project aims to produce multimedia digital learning package on ‘Nature and Nature’s Contribution to People (NCP)’ for the young audience with an age range from 10-16 years. The learning package will include learning videos, interactive lessons and interactive activities. The goal of this project is to generate curiosity and interest among young learners in nature and sustainability and provide an immersive and interactive experience to understand and internalize the concepts.</p>
    </div>
</template>


<style module>
.landingInfo{
  width: 100%;
  padding: 2rem 2rem;
  min-height: 640px;
  background-color: #10FDFF;
  color: white;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.objectives{
  font-weight: bold;
  font-size: 3rem;
  font-family: "restoration";
  margin-bottom: 2rem;
  color: rgb(30, 77, 99);
}
.objectivesText{
  max-width: 1080px;
  text-align: center;
  line-height: 2rem;
  font-size: 1.5rem;
  letter-spacing: 2px;
  color: rgb(30, 77, 99);
}
</style>
