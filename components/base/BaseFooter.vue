<template>
  <div :class="$style.footer">
    <div :class="$style.socials">
      <a href="https://www.facebook.com/theGIIS" target="_blank">
        <img src="@/assets/images/fb.svg" />
      </a>
      <a href="https://www.youtube.com/" target="_top">
        <img src="@/assets/images/youtube.svg" />
      </a>
      <a href="https://www.instagram.com/" target="_top">
        <img src="@/assets/images/insta.svg" />
      </a>
      <a href="mailto:info@thegiis.org" target="_top">
        <img src="@/assets/images/gmail.svg" />
      </a>
    </div>
    <div :class="$style.institution">
      <div :class="$style.institutionImg">
        <a target="”_blank”" href="http://www.thegiis.org"
          ><img
            :class="$style.institutionLogo"
            src="@/assets/images/giis_transparent.png"
        /></a>
        <!-- <p>Global Institute for Interdisciplinary Studies</p> -->
      </div>
      <div :class="$style.insitutionDetails">
        <p>P.O. Box 3084, Kathmandu, Nepal</p>
        <p>info@thegiis.org</p>
        <p>Phone: +977-1-4880927</p>
        <p>Cell Phone: 9840728150</p>
      </div>
    </div>
    <footer :class="$style.donors" class="footer">
      <p>Supported By</p>
      <div :class="$style.donorsContainer">
        <a target="”_blank”" href="https://ipbes.net/"
          ><img src="@/assets/images/ipbes.svg"
        /></a>
        <a target="”_blank”" href="https://www.environmentagency.no/"
          ><img src="@/assets/images/norway_environment.svg"
        /></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BaseFooter',
}
</script>

<style module>
.footer {
  position: relative;
  width: 100%;
  padding-top: 6rem;
  background-color: #00c3ab;
}
.socials {
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%, -50%);
  min-width: 50%;
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
.institution {
  position: relative;
  width: 80%;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
}
.institution > * {
  margin: 0 1rem;
}
.institutionImg {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.institutionImg p {
  color: white;
  font-size: 1.3rem;
}
.institutionLogo {
  height: 100px;
}
.insitutionDetails {
  color: #244590;
  border-left: 1px solid #244590;
  margin-left: 1rem;
  padding-left: 1rem;
  text-align: left;
  font-size: 1.2rem;
  letter-spacing: 2px;
  line-height: 1.6rem;
  font-family: 'Poppins', sans-serif;
}
.donors {
  position: relative;
  width: 100%;
  background-color: #333333;
}
.donors > p {
  text-align: center;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
}
.donorsContainer {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.donorsContainer > * {
  margin: 0 1rem;
}
.donorsContainer img {
  height: 100px;
}

@media only screen and (max-width: 768px) {
  .institution {
    flex-direction: column;
  }
  .institution > * {
    margin: 1rem;
  }
  .insitutionDetails {
    border-left: none;
    text-align: center;
  }
  .institutionLogo {
    height: auto;
    width: 320px
  }
}
</style>>