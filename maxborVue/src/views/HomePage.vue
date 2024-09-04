<template>
  <Slogan></Slogan>
  <div class="flex flex-col justify-center mt-10">
    <Slider />
    <About />
    <Forms />
  </div>
</template>
<script>
import Slogan from "../components/Slogan.vue";
import Slider from "../components/Slider.vue";
import Forms from "../components/Forms.vue";
import About from "../components/About.vue";
export default {
  name: "HomePage",
  components: {
    Slogan,
    Slider,
    Forms,
    About,
  },
};
</script>
<style></style>
