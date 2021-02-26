<template>
  <div :class="$style.footer">
      <div :class="$style.socials">
        <a href="https://www.facebook.com/sandeepsthapit" target="_blank">
          <img src="@/assets/images/fb.svg" />
        </a>
        <a href="mailto:sandeepsthapit@gmail.com" target="_top">
          <img src="@/assets/images/gmail.svg" />
        </a>
      </div>
      <div :class="$style.institution">
        <div :class="$style.institutionImg">
          <img :class="$style.institutionLogo" src="@/assets/images/GIIS.svg" />
          <!-- <p>Global Institute for Interdisciplinary Studies</p> -->
        </div>
          <div :class="$style.insitutionDetails">
            <p>Chakupat, Lalitpur</p>
            <p>Nepal</p>
            <p>Phone Number</p>
          </div>
      </div>
      <div :class="$style.donors">
        <p>Supported By</p>
        <div :class="$style.donorsContainer">
          <img src="@/assets/images/IPBES.svg" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'BaseFooter'
};
</script>

<style module>
.footer{
  position: relative;
  width: 100%;
  padding-top: 6rem;
  background-color: #496363;
}
.socials {
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: flex;
  background-color: white;
  border-radius: 2rem;
  padding: 0.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.socials > a {
  height: 100%;
  width: 60px;
  height: 60px;
  background-color: white;
  padding: 0.2rem;
  border: 0.2rem solid #a8d6e2;
  border-radius: 50%;
  margin: 0px 0.75rem;
  transition: 0.2s ease-in-out;
}
.socials img {
  height: 100%;
}
.socials a:hover {
    background-color: #97adc7;
    color: #354a63;
    border-color: white;
}
.socials a:hover img {
    filter: brightness(50%);
}
.institution{
  position: relative;
  width: 80%;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
}
.institution>*{
  margin: 0 1rem;
}
.institutionImg{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.institutionImg p{
  color: white;
  font-size: 1.3rem;
}
.institutionLogo{
  height: 120px;
}
.insitutionDetails{
  color: white;
  text-align: left;
  font-size: 1.2rem;
  letter-spacing: 2px;
  line-height: 1.6rem;
  font-family: 'Poppins', sans-serif;
}
.donors{
  position: relative;
  width: 100%;
  background-color: #333333;
  padding: 3rem 0rem;
}
.donors>p{
  text-align: center;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
}
.donorsContainer{
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}
.donorsContainer>*{
  margin: 0 1rem;
}
.donorsContainer img{
  height: 100px;
}
</style>>