<template>    
    <div :class="$style.landingImage">
        <!-- <h1 :class="$style.title">Nature's<br> Contribution <br>to People</h1> -->
          <!-- <img :class="$style.bg" src="@/assets/images/LandingImage.png" /> -->
          <img :class="$style.island" src="@/assets/images/landingpage/island2.png" />
          <img :class="$style.bee" src="@/assets/images/landingpage/bee.svg" />
          <!-- <img :class="$style.cloud1" src="@/assets/images/landingpage/cloud1.svg" /> -->
          <!-- <img :class="$style.cloud2" src="@/assets/images/landingpage/cloud2.svg" /> -->

          
          <img :class="[$style.waterBack, $style.water1, $style.MiddleWaves]" src="@/assets/images/landingpage/wave1.svg" />
          <img :class="[$style.waterBack, $style.water2, $style.DarkWaves]" src="@/assets/images/landingpage/wave2.svg" />
          <img :class="[$style.waterBack, $style.water3, $style.LightWaves]" src="@/assets/images/landingpage/wave3.svg" />


          <img :class="[$style.waterFront, $style.water1, $style.MiddleWaves]" src="@/assets/images/landingpage/wave1.svg" />
          <img :class="[$style.waterFront, $style.water2, $style.DarkWaves]" src="@/assets/images/landingpage/wave2.svg" />
          <img :class="[$style.waterFront, $style.water3, $style.LightWaves]" src="@/assets/images/landingpage/wave3.svg" />
    </div>
</template>


<style module>
.landingImage{
    position: relative;
    width: 100%;
    height: 700px;
    background-color: white;
    color: white;
    margin: 0;
    overflow: hidden;
}
.title{
    position: absolute;
    bottom: 59%;
    z-index: 12;
    font-size: 1.7rem;
    font-family: "restoration";
    left: 60%;
    transform: translateX(-50%);
    color: #808080;
    width: 25%;
}
.bg{
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translateX(-50%);
    height: 100%;
}
.island{
    position: absolute;
    height: 55%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 35%;
    z-index: 5;
}
.bee{
    position: absolute;
    height: 55%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 35%;
    z-index: 7;
}
.cloud1{
    position: absolute;
    height: 3.7%;
    left: 53.4%;
    transform: translateX(-50%);
    bottom: 78.7%;
    z-index: 6;
}
.cloud2{
    position: absolute;
    height: 3.85%;
    left: 68%;
    transform: translateX(-50%);
    bottom: 71%;
    z-index: 6;
}
.waterBack{
    position: absolute;
    height: 60%;
    left: 50%;
    transform: translate(-50%,0);
    bottom: -4%;
    opacity: 0.6;
}
.waterFront{
    position: absolute;
    height: 60%;
    left: 55%;
    transform: translate(-50%,0);
    bottom: -10%;
    opacity: 0.6;
    z-index: 10;
}

.LightWaves {
  animation: lightwaves 3s infinite;
}

@keyframes lightwaves {
    0%,100% { transform: translate(-50%,0); }
    25%     { transform: translate(-49.75%, 1%) scale(1.01); }
    50%     { transform: translate(-49%, 2%); }
    75%     { transform: translate(-49.25%, 1.5%) scale(1.01); }
}

.DarkWaves {
  animation: darkwaves 3.8s infinite;
}

@keyframes darkwaves {
    0%,100% { transform: translate(-50%,0); }
    25%     { transform: translate(-49%, 1%) scale(1.01); }
    50%     { transform: translate(-49.25%, 2%); }
    75%     { transform: translate(-49.75%, 1%); }
}

.MiddleWaves {
  animation: middlewaves 4s alternate ease infinite;
}

@keyframes middlewaves {
    0% { transform: translate(-50%, 2%); }
    100%     { transform: translate(-49%, 3%); }
}
</style>
